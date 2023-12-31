import React from 'react'
import {Navigate} from 'react-router-dom';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Logement from './pages/Logement'
import Footer from './components/Footer.jsx'
import './styles/Header.scss'
import Header from './components/Header'
import Error from './pages/page404/Error'
import logoNoir from './assets/logoNoir.jpg'


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Apropos" element={<Apropos />} />
            <Route path="/Logement/:id" element={<Logement />} />
            <Route path="/page404" element={<Error />}  />
            <Route path="*" element={<Navigate to="/page404" />}  />
          </Routes>
          <Footer>
          <img src={logoNoir} alt='logo kasa' className='kasa-logoNoir'/>
          <div className='conteneurRightsreserved'>
            <p className='rightsReserved1'>©2020 Kasa.All </p>
            <p className='rightsReserved2'>rights reserved</p>
            </div>
        </Footer >
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)


