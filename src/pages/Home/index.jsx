import paysage from "../../assets/paysage.png";
import { data } from "../../datas/logements";
import { Link } from "react-router-dom";
import "../../styles/Body.scss";

function Home() {
  return (
    <div className="HomeBody">
      <div className="divPaysage">
        <img src={paysage} alt="paysage" className="paysage" />
      </div>
      <div className="chezVous">
        <p className="chezVous1">Chez vous,</p>
        <p className="chezVous2">partout et ailleurs</p>
      </div>

      <div className="affichageLogements">
        <ul className="ulLogement">
          {data.map((logement) => {
            return (
              <Link to={`./Logement/${logement.id}`} key={logement.id}>
                <li className="liLogement" >
                  <div className="coverItem">
                    <img
                      src={logement.cover}
                      alt={logement.id}
                      className="imgBody"
                    />{" "}
                  </div>
                  <div className="logementTitle"> {logement.title} </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Home;
