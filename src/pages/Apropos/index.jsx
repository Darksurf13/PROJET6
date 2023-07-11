import paysageApropos from '../../assets/paysageApropos.png'
import Bodyapropos from '../../components/Bodyapropos'
import Collapse from '../../components/Collapse'


<p>  rien ne s'affiche </p>

function Apropos() {
	return <div>
    <Bodyapropos>
    <img src={paysageApropos} alt='paysage' className='paysageApropos'/>

<Collapse/>
   
    </Bodyapropos>
  </div>
}

export default Apropos