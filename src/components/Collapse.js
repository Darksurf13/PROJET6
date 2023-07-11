import {useState} from 'react'
import '../styles/Collapse.css'


function Collapse () {
    const [selected,setSelected] = useState (null)

      const toggle = (i) => {
        if(selected ===i)  {
          return setSelected(null)
        }
        setSelected(i)
        }
        return (
         <div className='wrapper'>
            <div className ='accordion'>
              {data.map((item,i)=>(
                <div className='item'>
                <div className='title' onClick = {() => toggle(i)}>
                <h2> {item.title}</h2>
                <span> {selected === i? '^' : 'v' } </span>
                </div>
                <div  className = {
                      selected === i ? 'content show' : 'content'}>
                     {item.description}
                     </div>
                     </div>
                     ))}
            </div>
          </div>
        )
}

const data = [
    {title : 'Fiabilité',
    description: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes'
    },
    {title : 'Respect',
    description: 'La bienveillance  fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme'
    },
    {title : 'Service',
    description: 'La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.'
    },
    {title : 'Securité',
    description: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs,chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l hote qu au locataire,cela permet à nos equipes de verifier que les standards sont bien respectés.Nous organisons également des ateliers sur la sécurité domestique pour nos hotes'
    }
    ]

export default Collapse 