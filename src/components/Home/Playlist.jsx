import { useState, useEffect } from "react";
import "../../css/Playlist.css";

const API_BASE = "https://jamsesh-server-wcbm.onrender.com";

const Playlist = () => {
  const [songs, setSongs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    artist: "",
    album: "",
    image: "", // optional image 
  }); 

  const getSongId = (song) => song._id || song.id;


  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

// Auto Clear 
  useEffect(() => {
  if (!status) return;

  const timer = setTimeout(() => {
    setStatus("");
  }, 3000); // 3 seconds

  return () => clearTimeout(timer); // cleanup
}, [status]);


  // load playlist from backend 
  useEffect(() => { 
    setLoading(true);
    fetch(`${API_BASE}/api/playlist`)
      .then((res) => res.json())
      .then((data) => {
        console.log("playlist data from API:", data);
        setSongs(Array.isArray(data) ? data : []);
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
    setForm({ title: "", artist: "", album: "", image: "" });
    setEditingId(null);
  };

  const validateForm = () => {
    const title = form.title.trim(); 
    const artist = form.artist.trim(); 
    const album = form.album.trim(); 
    const image = form.image.trim();


    if (!title || !artist){
      return " Title and Artist are required"
    } 
    if (title.length < 3 || title.length > 50){
      return "Title must be 3-50 characters"
    } 
    if (artist.length < 3 || artist.length > 50){
      return "Artist must be 3-50 characters"
    } 
    if (album.length > 50){
      return "Album must not exceed 50 characters  "
    } 
    if (image.length > 300) {
      return "Image URL must not exceed 300 characters "
    }
    
    return ""; 
  }; 


  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");     
    setStatus("");

    const validationError = validateForm(); 
    if (validationError) {
      setError(validationError); 
      return;
    } 

    const payload = {
      title: form.title.trim(), 
      artist: form.artist.trim(), 
      album: form.album.trim(),
      image: form.image.trim(),
    }; 

    setSaving(true);

    
    
    // Editing Song 
    if (editingId) {
      fetch(`${API_BASE}/api/playlist/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((updatedSong) => {
          if (updatedSong.error) {
            setError(updatedSong.error);
          } else {
            const updatedId = updatedSong._id || updatedSong.id ; 

            setSongs((prev) =>
              prev.map((song) =>
                getSongId(song) === updatedId ? updatedSong : song
              )
            );
            
            setStatus("Song updated successfully.");
            resetForm();
          }
        })
        .catch((err) => {
          console.error("Error updating song:", err);
          setError("Failed to update song.");
        })
        .finally(() => setSaving(false));
    } else {
      fetch(`${API_BASE}/api/playlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((newSong) => {
          if (newSong.error) {
            setError(newSong.error);
          } else {
            setSongs((prev) => [...prev, newSong]); 
            setStatus("Song added to playlist.");
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
    const id = getSongId(song);
    setEditingId(id);
    setForm({
      title: song.title || "",
      artist: song.artist || "",
      album: song.album || "",
      image: song.image || "" , 
    });
    setError(""); 
    setStatus("");
  };

  const handleDelete = (id) => {
    if (!window.confirm("Remove this song from the playlist?")) return;

    setSaving(true);
    setError(""); 
    setStatus("");

    fetch(`${API_BASE}/api/playlist/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          setError(result.error);
        } else {
          setSongs((prev) => prev.filter((song) => getSongId(song) !== id)); 
          setStatus("Song deleted successfully!!")
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
      <h3 className="playlist-heading">Share Your Favorite Song:</h3>

      {error && <p className="error-msg">{error}</p>}
      {status && <p className="status-msg">{status}</p>}
     
      {/* Add / Edit Form */}
      <form className="playlist-form" onSubmit={handleSubmit}>
        <h3 className="form-title">
          {editingId ? "Edit Song" : "What's Your Current Fave Song"}
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

        <div className="form-row"> 
          <label htmlFor="image"> Image URL (optional) </label> 
          <input 
            id="image" 
            name="image" 
            value={form.image} 
            onChange={handleChange} 
            placeholder="https://example.com/cover.jpg" 
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
          <ul className="ul">
            <h2> Current Favorite Songs </h2>
            {songs.map((song) => (
              <li key={getSongId(song)} className="song-card">
                <div className="song-main">
                  <span className="song-title">{song.title}</span>
                  <span className="song-artist">by {song.artist}</span>
                  {song.album && (
                    <span className="song-album"> · {song.album}</span>
                  )}
                </div>

                {/* optional image display */}
                {song.image && (
                  <div className="song-image-wrapper">
                    <img
                      src={song.image}
                      alt={`${song.title} cover`}
                      className="song-image"
                    />
                  </div>
                )}

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
                    onClick={() => handleDelete(getSongId(song))}
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


    


