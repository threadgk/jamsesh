import "./../css/Artists.css";
import Card from "../components/Artist/ArtistCard.jsx";
import artistData from "../data/artists.json";

const Artists = () => {
    return (
        <div>
            <h1>Artists</h1> 
            <div className="art-container"> 
                {artistData.map((artist, index) => (    
                    <Card 
                        name={artist._name}
                        image={artist.img}
                        dob={artist._dob}
                        genre={artist._genre}
                        debutYear={artist["_debut-year"]}
                        debutAlbum={artist["_debut-album"]}
                        description={artist._description}
                    />
                ))} 
            </div>


        </div>
    );
};

export default Artists;

