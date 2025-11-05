import "./GenreCard.css";  
import SubGenreCard from "./SubGenreCard";

const GenreCard = ({genre, description, subGenres}) => {
    return (
        <div className="genre-card">
            <h2>{genre}</h2>
            <p className="genre-description">{description}</p> 

            <div className="sub-genres-section">  
                <h3>Sub-Genres:</h3>
                {subGenres.map((subGenre, index) => (
                    <SubGenreCard 
                        key={index} 
                        name={subGenre.name} 
                        description={subGenre.description} 
                    />
                ))}
            </div>
        </div>
    );
}
export default GenreCard; 