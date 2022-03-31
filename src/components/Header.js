import React,{useEffect} from 'react'
import './acceuille.css'
import {AiFillApple, AiOutlineSafety} from 'react-icons/ai'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {FaGooglePlay} from 'react-icons/fa'
import Phone from './images/Phone.png'

function Header() {
  useEffect(()=>{
    AOS.init({
      duration:1500,
    });
  },[])
  return (
    <div className='headermain'>
      <div className='header_container'>
        <div className='container_items' data-aos='fade-right'>
            <p>APPRENDRE VOTRE LANGUE</p>
            <p>DEVIENT UN PLAISIR</p>
            <p>Application disponible sur</p>
            
            <div className='button_container'>
                <div className='dowload_button'>
                  <div className='icon'> <AiFillApple/> </div>
                  <div className='store_name'>App store</div>
                </div>
                <div className='dowload_button'>
                  <div className='icon'> <FaGooglePlay/> </div>
                  <div className='store_name'>Google play</div>
                </div>

            </div>
        </div>
        
        <div className='container_items' data-aos='fade-left'>
            <img className="phone_image" src={Phone}/>
        </div>
      </div>
    </div>
  )
}

export default Header;