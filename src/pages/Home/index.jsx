import paysage from '../../assets/paysage.png'
import Body from '../../components/Body'
import {logementList} from './logementList'
import { Link } from 'react-router-dom'


function Home() {

  

	return <div>
    <Body>
    <img src={paysage} alt='paysage' className='paysage'/>
      <p className='chezVous'>Chez vous, partout et ailleurs</p>
   
    <section className='annonces'></section>
   
    <div className='affichageLogements'>
        <ul className='ulLogement'>
        {logementList.map((logement) => {
          return(
            <Link to={`./Logement/${logement.id}`} >  
            <li className='liLogement' key={logement.id}  >
               <div className='coverItem'><img src={logement.cover}  alt={logement.id} /> </div>
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



/*function Error() {
  const { theme } = useTheme()

  return (
    <ErrorWrapper theme={theme}>
      <ErrorTitle theme={theme}>Oups...</ErrorTitle>
      <Illustration src={ErrorIllustration} />
      <ErrorSubtitle theme={theme}>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
    </ErrorWrapper>
  )
}

export default Error  */
