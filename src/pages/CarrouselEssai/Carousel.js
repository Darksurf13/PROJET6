import './Carousel.css'
import {useState} from 'react'

function Carousel({id,pictures}){
    const [slide,setSlide]=useState(0);

    const goToNext=()=> {
        setSlide(slide === pictures.length -1 ? 0 : slide)
    };

    const goToPrevious=()=> {
        setSlide(slide === 0 ? pictures.length -1 : slide)
    };


    return(
        <div key={id} className='carousel'>
       <img src={pictures[0,1,2]}  alt="1" className={slide ===id ? "slide":"slide slide-hidden"} />
       
       <div className='leftArrowStyles' onClick={goToPrevious}>
        &#8249;
        </div>
        <div className='rightArrowStyles' onClick={goToNext}>
        &#8250; 
        </div>
        </div>
    )
}

export default Carousel