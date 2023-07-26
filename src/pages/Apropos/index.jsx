import paysageApropos from "../../assets/paysageApropos.png";
import "../../styles/Bodyapropos.scss";
import Collapse from "../../components/Collapse";
import { data } from "../../datas/data";

function Apropos() {
  return (
    <div className="bodyApropos">
      <img src={paysageApropos} alt="paysage" className="paysageApropos" />
      {data.map((data) => {
        return (
          <div className="aPropos" key={data.id}>
            <Collapse
              title={data.title}
              description={data.description}
              equipments={data.equipments}
              show="description"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Apropos;
