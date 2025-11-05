import "./../css/Genres.css";
import GenreCard from "../components/Genre/GenreCard.jsx"; 
import  genreData  from "../data/genres.json";


const Genres = () => {
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
