import React from 'react'
import './acceuille.css'
import Header from './Header'
import Fonctionnement from './Fonctionnement'
import Newsletter from './Newsletter'
import Pourquoi from './Pourquoi'
import Footer from './Footer'

function Accueille() {
  return (
    <div>
        <Header/>
        <Fonctionnement/>
        <Newsletter/>
        <Pourquoi/>
        <Footer/>
    </div>
  )
}

export default Accueille;