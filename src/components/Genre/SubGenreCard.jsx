import "./SubGenreCard.css";

const SubGenreCard = ({ name, description }) => {
    return (
        <div className="sub-genre-card">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default SubGenreCard;
