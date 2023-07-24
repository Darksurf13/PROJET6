import "../styles/Card.scss";
import ImageSlider from "./ImageSlider";

function Carrousel({ pictures }) {
  console.log(pictures.length);
  const slides = pictures.map((picture) => ({
    url: picture,
    // title:'room',
  }));

  const totalImage = pictures.length;

  return (
    <div>
      <div className="containerStyles">
        <ImageSlider slides={slides} totalImage={totalImage} />
      </div>
    </div>
  );
}

export default Carrousel;
