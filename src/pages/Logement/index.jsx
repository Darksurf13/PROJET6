
import Card from '../../components/Card'
import {Navigate,useParams} from 'react-router-dom'
import {logementList} from '../../datas/logementList'



function Logement(){
    let {id}=useParams()
    console.log(id);
   
    const logement=logementList.find((l)=>l.id===id)
    console.log(logement)

    if (!logement) {
        // Redirect to page404 if id is not found
        return <Navigate to="/page404" />;
      }

    return(
<div>
(
        <div key={id} >
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
    )

</div>
 )
}



export default Logement


