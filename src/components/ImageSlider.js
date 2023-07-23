import {useState} from "react";


const ImageSlider = ({slides,totalImage}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const sliderStyles = {
        height: "100%",
        position:"relative",
        };

    const slideStyles = {
        width: "100%",
        height:"100%",
        borderRadius:"10px",
        backgroundPosition : "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
        text: "1/4",
        };
        
        const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "196px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
        };
        
        const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "196px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
        };
         
        const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1:currentIndex -1;
        setCurrentIndex(newIndex);
        };
        const goToNext = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        };

        const numbering ={
            color:"white",
            position: "absolute",
            top: "85%",
            right: "50%",
            fontSize: "18px",
            fontWeight:"500",
            fontFamily: "Montserrat",
            zIndex: 1,
        }
    
        return(
        <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}>
        &#8249; 
        </div>
        <div style={rightArrowStyles} onClick={goToNext}>
        &#8250; 
        </div>
        <div style={slideStyles}>
        </div>
        <div style={numbering} >{currentIndex +1}/{totalImage}</div>
       
    
        </div>
        );
        };
    
    export default ImageSlider;
    

