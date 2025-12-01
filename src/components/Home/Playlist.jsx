import { useState, useEffect } from "react";
import "../../css/Playlist.css";

const API_BASE = "https://jamsesh-server-wcbm.onrender.com";

const Playlist = () => {
  const [songs, setSongs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    artist: "",
    album: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // load playlist from backend on mount
  useEffect(() => {
    fetch(`${API_BASE}/api/playlist`)
      .then((res) => res.json())
      .then((data) => {
        setSongs(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading playlist:", err);
        setError("Failed to load playlist.");
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm({ title: "", artist: "", album: "" });
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.title.trim() || !form.artist.trim()) {
      setError("Please enter at least a song title and artist.");
      return;
    }

    setSaving(true);

    if (editingId) {
      // UPDATE existing song (PUT)
      fetch(`${API_BASE}/api/playlist/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((updatedSong) => {
          if (updatedSong.error) {
            setError(updatedSong.error);
          } else {
            setSongs((prev) =>
              prev.map((song) =>
                song.id === updatedSong.id ? updatedSong : song
              )
            );
            resetForm();
          }
        })
        .catch((err) => {
          console.error("Error updating song:", err);
          setError("Failed to update song.");
        })
        .finally(() => setSaving(false));
    } else {
      // ADD new song (POST)
      fetch(`${API_BASE}/api/playlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((newSong) => {
          if (newSong.error) {
            setError(newSong.error);
          } else {
            setSongs((prev) => [...prev, newSong]);
            resetForm();
          }
        })
        .catch((err) => {
          console.error("Error adding song:", err);
          setError("Failed to add song.");
        })
        .finally(() => setSaving(false));
    }
  };

  const handleEdit = (song) => {
    setEditingId(song.id);
    setForm({
      title: song.title,
      artist: song.artist,
      album: song.album || "",
    });
  };

  const handleDelete = (id) => {
    if (!window.confirm("Remove this song from the playlist?")) return;

    setSaving(true);
    setError("");

    fetch(`${API_BASE}/api/playlist/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          setError(result.error);
        } else {
          setSongs((prev) => prev.filter((song) => song.id !== id));
          if (editingId === id) resetForm();
        }
      })
      .catch((err) => {
        console.error("Error deleting song:", err);
        setError("Failed to delete song.");
      })
      .finally(() => setSaving(false));
  };

  return (
    <div className="playlist-page">
      <h2 className="playlist-heading">My Playlist</h2>

      {error && <p className="error-msg">{error}</p>}

      {/* Add / Edit Form */}
      <form className="playlist-form" onSubmit={handleSubmit}>
        <h3 className="form-title">
          {editingId ? "Edit Song" : "Add a New Song"}
        </h3>

        <div className="form-row">
          <label htmlFor="title">Song Title</label>
          <input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Song title"
          />
        </div>

        <div className="form-row">
          <label htmlFor="artist">Artist</label>
          <input
            id="artist"
            name="artist"
            value={form.artist}
            onChange={handleChange}
            placeholder="Artist"
          />
        </div>

        <div className="form-row">
          <label htmlFor="album">Album (optional)</label>
          <input
            id="album"
            name="album"
            value={form.album}
            onChange={handleChange}
            placeholder="Album"
          />
        </div>

        <div className="form-actions">
          <button type="submit" id="save-song-btn" disabled={saving}>
            {saving
              ? "Saving..."
              : editingId
              ? "Save Changes"
              : "Add Song"}
          </button>
          {editingId && (
            <button
              type="button"
              id="cancel-edit-btn"
              onClick={resetForm}
              disabled={saving}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Song List */}
      <div className="playlist-list">
        {loading ? (
          <p className="empty-msg">Loading playlist...</p>
        ) : songs.length === 0 ? (
          <p className="empty-msg">No songs yet. Add your first track!</p>
        ) : (
          <ul>
            {songs.map((song) => (
              <li key={song.id} className="song-card">
                <div className="song-main">
                  <span className="song-title">{song.title}</span>
                  <span className="song-artist">by {song.artist}</span>
                  {song.album && (
                    <span className="song-album"> · {song.album}</span>
                  )}
                </div>
                <div className="song-actions">
                  <button
                    type="button"
                    className="edit-btn"
                    onClick={() => handleEdit(song)}
                    disabled={saving}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => handleDelete(song.id)}
                    disabled={saving}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Playlist;


    


