import '../styles/Card.css'
import Carrousel from "./Carrousel"



function Card ({id,title,host,tags,pictures}){
    return (
        <div className='Card'>
           <div key={id}className="carrousel">
           <Carrousel
           pictures={pictures}/>
                </div>
            <div className='wrapper1'>
                <div className="title">
                   {title}
                </div>
                <div className="host">
<div className="hostName">
{host.name}
</div> 
                    <img src={host.picture} alt='hostpicture' className='hostPicture'/>
                    
                </div>
            </div>
            
            <div className='wrapper2'>
               <div className="tags">
               <div className="tag1">
               {tags[0]}
                </div>
                <div className="tag2">
                {tags[1]}
                </div>
                <div className="tag3">
                {tags[2]}
                </div>
               </div>
               <div className="rate">
               </div>
            </div>
            <div className='details'>
                        <div className="description">
                            <p>Description</p>
                        </div>
                        <div className="equipements">
                            <p>Equipements</p>
                        </div>
             </div>
        </div> 
    )
}

export default Card