import React, { useState,useEffect } from 'react'
import './style.css'
import {NavLink} from 'react-router-dom'
import Womlahlogo from './images/Womlah-logo-blanc.png'
import {FaBars} from 'react-icons/fa'
import Logo from './images/Womlahlogo.png'

function Navigation() {
  const [active,setActive]=useState('hiden_menu');
  
  const ToggleMenu = () => {
    active === 'hiden_menu'?setActive('open_menu'):setActive('hiden_menu');
  }
  return (
    <div>
        <div className='nav-container'>
          <div className='container'>
              <div className='logo_container'> <img src={Womlahlogo} alt='logo womlah'/> </div>
                <nav className={active}>
                    <ul >
                      
                        <li className='lien'>
                          <NavLink exact to='' className={({isActive})=> isActive?'lienActif':'lien'}>
                            accueil
                          </NavLink>
                        </li>
                      
                      
                        <li className='lien'>
                          <NavLink to='Contact' className={({isActive})=>isActive?'lienActif':'lien'}>
                            contact
                          </NavLink>
                        </li>
                      
                    </ul>
                </nav>
                <div className='bars' onClick={ToggleMenu}>
                      <FaBars/>
                    </div>
              </div>
          </div>
    </div>
  )
}

export default Navigation