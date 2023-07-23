import "../styles/Card.css";
import Carrousel from "./Carrousel";
import Tags from "./Tags";
import Rating from "./Rating";
import Collapse from "./Collapse";

function Card({
  id,
  title,
  host,
  tags,
  pictures,
  rating,
  description,
  equipments,
  location,
}) {
  return (
    <div className="Card">
      <div key={id} className="carrousel">
        <Carrousel pictures={pictures} />
      </div>
      <div className="wrapper1">
        <div className="wrapper1Gauche">
          <div className="title">{title}</div>
          <div className="location">{location}</div>
        </div>
        <div className="host">
          <div className="hostName">{host.name}</div>
          <img src={host.picture} alt="hostpicture" className="hostPicture" />
        </div>
      </div>
      <div className="wrapper2">
        <div key={id} className="tags">
          <Tags tags={tags} />
        </div>
        <div className="rate">
          <Rating rating={rating} />
        </div>
      </div>
      <div className="details">
       
        <div key={id} className="description">
          <Collapse
            title="Description"
            description={description}
            equipments={equipments}
            show="description"
          />
        </div>
        
        <div key={id} className="equipements">
          <Collapse
            title="Equipments"
            description={description}
            equipments={equipments}
            show="equipments"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
