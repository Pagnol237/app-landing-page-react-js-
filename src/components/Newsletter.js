import React from 'react'
import Image from './images/Imagebg.png'
import {FaFacebookF,FaInstagram,FaTiktok,FaYoutube} from 'react-icons/fa'


function Newsletter() {
  return (
    <div className='newsletter_main' style={{backgroundImage:`url(${Image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed',marginBottom:'20px'}}>
        <div className='newsletter_title'>Inscrivez vous à la news letter</div>
        <form>
            <div className='formulaire'>
                <input placeholder='votre adresse e mail'/>
                <input type='submit' value="S'inscrire"/>
            </div>
        </form>
        <div className='socialmedialink_container'>
            <div className='social_icon'><FaFacebookF/></div>
            <div className='social_icon'><FaInstagram/></div>
            <div className='social_icon'><FaTiktok/></div>
            <div className='social_icon'><FaYoutube/></div>
        </div>
    </div>
  )
}

export default Newsletter;