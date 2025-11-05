import SongList from "./SongList";

const ChartCard = ({ website, url, img, description, chartData }) => {
  return (
    <div className="chart-card">
      <img src={process.env.PUBLIC_URL + img} alt={website} className="chart-image" />
      <h2>{website}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Visit Chart →</a>
      <SongList chart={chartData} />
    </div>
  );
};

export default ChartCard;
