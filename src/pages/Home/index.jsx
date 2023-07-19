import paysage from '../../assets/paysage.png'
import Body from '../../components/Body'
import {data} from '../../datas/logements'
import { Link } from 'react-router-dom'


function Home() {
	return <div>
    <Body>
    <img src={paysage} alt='paysage' className='paysage'/>
      <p className='chezVous'>Chez vous, partout et ailleurs</p>
   
    <section className='annonces'></section>
   
    <div className='affichageLogements'>
        <ul className='ulLogement'>
        {data.map((logement) => {
          return(
            <Link to={`./Logement/${logement.id}`} >  
            <li className='liLogement' key={logement.id}  >
               <div className='coverItem'><img src={logement.cover}  alt={logement.id} className='imgBody' /> </div>
                {logement.title}
            </li>
       </Link>
        )})}
    </ul>
    </div>
    </Body >
    
  </div>
}

export default Home


