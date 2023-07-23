import {useState} from 'react'
import '../styles/Collapse.scss'
import hightArrow from '../assets/hightArrow.jpg'
import lowArrow from '../assets/lowArrow.jpg'


function Collapse({ title, description, equipments, show }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ensembleCollapse">
      <div className="accordion">
        <div className="item">
          <div className="titleCollapse" onClick={toggle}>
            <h2>{title}</h2>
            <span>
              {isOpen ? (
                <img src={hightArrow} alt="hight arrow" />
              ) : (
                <img src={lowArrow} alt="low arrow" />
              )}
            </span>
          </div>
          
          {show === "description" && (
            <div className={isOpen ? "content show" : "content"}>
              {description}
            </div>
          )}
          {show === "equipments" && (
            <div className={isOpen ? "content show" : "content"}>
              <ul>
                {equipments.map((equipment) => (
                  <li key={equipment}>{equipment}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className={isOpen ? "spacer show" : "spacer"} />
    </div>
  );
}





export default Collapse 