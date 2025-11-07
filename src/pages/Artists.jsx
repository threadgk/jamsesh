import "./../css/Artists.css";
import Card from "../components/Artist/ArtistCard.jsx";
//import artistData from "../data/artists.json";// 
import { useEffect, useState } from "react"; 


const Artists = () => { 
    const [artistData, setArtistData] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jamsesh-server-wcbm.onrender.com/api/artists") 
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setArtistData(data);
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

