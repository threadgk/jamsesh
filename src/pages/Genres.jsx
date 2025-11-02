import "./../css/Genres.css";
import Card from "../components/Genre/Card.jsx";

const Genres = () => {
    return (
        <div>
            <h2>Genres Page</h2>

            <Card
                name="Alt Hip Hop"
                image="https://example.com/jazz-image.jpg"
                genre="Jazz"
            />

            <Card
                name="Rock"
                image="https://example.com/rock-image.jpg"
                genre="Rock"
            />

            <Card
                name="Classical"
                image="https://example.com/classical-image.jpg"
                genre="Classical"
            />

            <Card
                name="Hip Hop"
                image="https://example.com/hiphop-image.jpg"
                genre="Hip Hop"
            />

            <Card
                name="Pop"
                image="https://example.com/pop-image.jpg"
                genre="Pop"
            />  

        </div>
    );
};

export default Genres;
