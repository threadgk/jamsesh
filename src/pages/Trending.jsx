import "./../css/Trending.css";
import Chart from "../components/Trend/Chart.jsx";
import chartData from "../data/charts.json";

const Trending = () => {
    return (
        <div>
            <h2>Music Charts </h2>   
            <div className= "chart-container"> 
                {chartData.map((chart, index) => (
                   <Chart
                       key={index}
                       website={chart._website}
                       url={chart.url}
                       img={chart.img}
                       description={chart._description}
                       chartData={chart}
                   />
                ))}
            </div>
        </div>
    );
};


export default Trending;
