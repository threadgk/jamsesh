import "./../css/Trending.css";
import Chart from "../components/Trend/Chart.jsx";

const Trending = () => {
    return (
        <div>
            <h2>Trending Page</h2>
            <Chart 
                name="Billboard Chart"
                image="path/to/your/chart-image.png"
                description="Description of the billboard chart goes here."
            />

            <Chart 
                name="Spotify Chart"
                image="path/to/your/spotify-chart-image.png"
                description="Description of the spotify chart goes here."
            />

            <Chart 
                name="Apple Music Chart"
                image="path/to/your/apple-music-chart-image.png"
                description="Description of the apple music chart goes here."
            />

            <Chart 
                name="YouTube Chart"
                image="path/to/your/youtube-chart-image.png"
                description="Description of the youtube chart goes here."
            />

            <Chart 
                name="iHeartRadio Chart"
                image="path/to/your/iheart-radio-chart-image.png"
                description="Description of the iHeartRadio chart goes here."
            />

        </div>
    );
};


export default Trending;
