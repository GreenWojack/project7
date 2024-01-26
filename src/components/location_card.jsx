import "../style/location_card.scss";

function Card({ logement }) {
    const { title, cover, description, host, rating, location, equipments, tags } = logement;
    return (
        <div className="card">
            <img className="card-cover" src={cover} alt="" />
            <span className="card-title">{title}</span>
        </div>
    );
}

export default Card;