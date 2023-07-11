
import Card from '../../components/Card'
import {useParams} from 'react-router-dom'
import {logementList} from '../Home/logementList'


function Logement(){
    let {id}=useParams()
    console.log(id);
    const logement=logementList.find((l)=>l.id===id)
    console.log(logement)
    return(
<div>
(
        <div key={id} >
    <Card
    title={logement.title}
    host={logement.host}
    tags={logement.tags}
    pictures={logement.pictures}
   />
    </div> 
    )

</div>
 )
}



export default Logement


