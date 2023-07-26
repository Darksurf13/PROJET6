import "../styles/Card.scss";
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

      <div className="wrapper">
        <div className="wrapper1">
          <div className="title">{title}</div>
          <div className="location">{location}</div>
          <div key={id} className="tags">
            <Tags tags={tags} />
          </div>
        </div>

        <div className="wrapper2">
          <div className="host">
            <div className="hostName">{host.name}</div>
            <img src={host.picture} alt="hostpicture" className="hostPicture" />
          </div>
          <div key={id} className="rate">
            <Rating rating={rating} />
          </div>
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
            title="Equipements"
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
