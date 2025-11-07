import "./../css/Genres.css";
import GenreCard from "../components/Genre/GenreCard.jsx"; 
//import  genreData  from "../data/genres.json";// 
import { useEffect, useState } from "react";


const Genres = () => { 
    const [genreData, setGenreData] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jamsesh-server-wcbm.onrender.com/api/genres") 
            .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    setGenreData(data);
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
        <div>
            <h2>Genres </h2>

            <div className="genres-container"> 
                {genreData.map((genre, index) => (
                    <GenreCard 
                        key={index} 
                        genre={genre._genre} 
                        description={genre._description} 
                        subGenres={genre["sub-genres"]} 
                    />
                ))}
            </div> 
        </div>
    );
};

export default Genres;
