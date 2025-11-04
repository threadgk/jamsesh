import "/Users/kaylathreadgill/jamsesh/src/components/css/Card.css"
const Card = ({name, image, dob, genre, debutYear, debutAlbum, description}) => {
    return (
        <div className="artist-card">
            <h2>{name}</h2>
            <img src={image} alt={name} className="artist-image" />
            <p><h3>Genre:</h3> {genre}</p>
            <p><h3>Date of Birth:</h3> {dob}</p>
            <p><h3>Debut Year:</h3> {debutYear}</p>
            <p><h3>Debut Album:</h3> {debutAlbum}</p>
            <p>{description}</p>
        </div>
            
    );
}
export default Card;
