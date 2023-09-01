import "../../../styles/Error.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <div className="error404">404</div>
      <div className="oups">
        <div className="oups1"> Oups. La page que &nbsp; </div>
        <div className="oups2"> vous demandez n'existe pas.</div>
      </div>
      <div>
        <Link to="/">
          <p className="retourner"> Retourner sur la page d'accueil</p>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Error;
