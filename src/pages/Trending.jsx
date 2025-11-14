import "./../css/Trending.css";
import Chart from "../components/Trend/Chart.jsx";
//import chartData from "../data/charts.json";// 
import { useEffect, useState } from "react";

const Trending = () => {
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jamsesh-server-wcbm.onrender.com/api/trending")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setChartData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div id="body">
            <h2>Music Charts </h2>   
            <div className= "chart-container"> 
                {chartData.map((chart, index) => (
                   <Chart className="chart"
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
