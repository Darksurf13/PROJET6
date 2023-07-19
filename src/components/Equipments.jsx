
import '../styles/Equipments.css'



function Equipments ({equipments}) {
    console.log(equipments)

    const displayEquipments = equipments.map((equipment, index) => (
        <div key={index} className='equipment'>{equipment}</div>
      ));
  
    return (
      <div className='equipments'>
        {displayEquipments}
      </div>
    );
  };
   
export default Equipments