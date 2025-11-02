import "/Users/kaylathreadgill/jamsesh/src/css/Genres.css";

const Card = (card) => {
    return (
        <div className="genre-component">
            <h2>{card.name}</h2>
            <img src={card.image} alt="Artist" />
            <p>Genre: {card.genre}</p>
        </div>
            
    );
}
export default Card;