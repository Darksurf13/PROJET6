import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Carousel from './pages/CarrouselEssai'
import Logement from './pages/Logement'
import Footer from './components/Footer.jsx'
import './styles/Header.css'
import Header from './components/Header'
import  allPagesError from './components/allPagesError'
import logo from './assets/logo.jpg'
import Error from './pages/page404/Error'
import { Link } from 'react-router-dom'
import logoNoir from './assets/logoNoir.jpg'


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Header>
      <img src={logo} alt='logo kasa' className='kasa-logo'/>
      <nav>
      <Link to="/APropos">  <div className='li'><p>A propos</p></div></Link>
      <Link to="/"> <div className='li'><p>Accueil</p></div></Link>
      </nav>
    </Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Apropos" element={<Apropos />} />
            <Route path="/Logement/:id" element={<Logement />} />
            <Route path="/page404" element={<Error />}  />
            <Route path="*" element={<allPagesError />}  />
            <Route path="/CarrouselEssai" element={<Carousel />} />
          </Routes>
          <Footer>
          <img src={logoNoir} alt='logo kasa' className='kasa-logo'/>
          <div className='conteneurRightsreserved'><p className='rightsReserved'>© Kasa.All rights reserved</p></div>
        </Footer >
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)


