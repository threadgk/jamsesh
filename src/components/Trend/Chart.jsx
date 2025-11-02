import "/Users/kaylathreadgill/jamsesh/src/css/Trending.css";

const Chart = (chart) => {
    return (
        <div id="chart-component">
            <h2>{chart.name}</h2>
            <img src={chart.image} alt="Trend Chart" />
            <p>{chart.description}</p>
        </div>
    );
};

export default Chart;