import Card from "../../components/Card";
import { Navigate, useParams } from "react-router-dom";
import { data } from "../../datas/logements";
import "../../styles/Card.scss";

function Logement() {
  let { id } = useParams();
  console.log(id);

  const logement = data.find((l) => l.id === id);
  console.log(logement);

  if (!logement) {
    return <Navigate to="/page404" />;
  }

  return (
    <div className="cardBody" key={id}>
      <Card
        title={logement.title}
        host={logement.host}
        tags={logement.tags}
        pictures={logement.pictures}
        rating={logement.rating}
        description={logement.description}
        equipments={logement.equipments}
        location={logement.location}
      />
    </div>
  );
}

export default Logement;
