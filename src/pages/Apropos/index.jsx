import paysageApropos from '../../assets/paysageApropos.png'
import Bodyapropos from '../../components/Bodyapropos'
import '../../styles/Bodyapropos.scss'
import Collapse from '../../components/Collapse'
import {useParams} from 'react-router-dom'
import {data} from '../../datas/data'


function Apropos() {

  let {id}=useParams()
  console.log(id);

	return (<div>
    <Bodyapropos>
    <img src={paysageApropos} alt='paysage' className='paysageApropos'/>
    

    {data.map((data) => {
          return(
            <div className='aPropos'>
            <Collapse 
           title={data.title}
            description={data.description}
            equipments={data.equipments}
            show="description"/>
            </div>
           
        )})}
     

   
    </Bodyapropos>
  </div>
)}

export default Apropos