import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../styles/Header.scss";

function Header() {
  const [selected, setSelected] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  return (
    <header className="sectionHeader">
      <img src={logo} alt="logo kasa" className="kasa-logo" />
      <nav>
        <Link to="/APropos">
          <div
            className={`li ${selected === "/APropos" ? "selected" : ""}`}
            onClick={() => setSelected("/APropos")}
          >
            <p className="pNav">A propos</p>
          </div>
        </Link>
        <Link to="/">
          <div
            className={`li ${selected === "/" ? "selected" : ""}`}
            onClick={() => setSelected("/")}
          >
            <p className="pNav">Accueil</p>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
