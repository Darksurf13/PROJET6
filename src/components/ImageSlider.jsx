import "../styles/Card.scss";
import { useState } from "react";

const ImageSlider = ({ slides, totalImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="sliderStyles">
      {totalImage > 1 && ( <div className="leftArrowStyles" onClick={goToPrevious}>
        &#8249;
      </div>)}
      {totalImage > 1 && (<div className="rightArrowStyles" onClick={goToNext}>
        &#8250;
      </div>)}
      <div style={slideStyles}></div>
      {totalImage > 1 && (
      <div className="numbering">
        {currentIndex + 1}/{totalImage}
      </div>
    )}
    </div>
  );
};

export default ImageSlider;
