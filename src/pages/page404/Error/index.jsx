
import './Error.css'
import { Link } from 'react-router-dom'

function Error() {

  return (
    <div className="error"> 
    <div className="error404"> 
    404
    </div>
    <div className="oups"> 
    Oups.La page demandée n'existe pas.
    </div>
    <div className="retourner"> 
   <Link to="/"> Retourner sur la page d'accueil </Link>
    </div>
    </div>
  )
}

export default Error
