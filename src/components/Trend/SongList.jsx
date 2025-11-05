const SongList = ({ chart }) => {
  // Collect all numbered song keys dynamically
  const songs = Object.keys(chart)
    .filter(key => key.startsWith("_") && !isNaN(key.substring(1)))
    .map(key => chart[key]);

  return (
    <ol className="song-list">
      {songs.map((song, i) => (
        <li key={i}>{song}</li>
      ))}
    </ol>
  );
};

export default SongList;
