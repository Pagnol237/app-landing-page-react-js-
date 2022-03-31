import React from 'react'
import {FaWhatsapp,FaUser} from 'react-icons/fa'
import { AiOutlineMail,AiOutlineUser } from 'react-icons/ai'
import Image from './images/Bonjour.png'
import './Contact.css'


function Contact() {
  return (
    <div className='maincontainer'>
      <div className='boxcontainer'>
          <div className='box'>
            <img src={Image} className='image' />
          </div>

          <div className='box'>
            <form className='form_main'>
                <div className='inputscontainer'>
                    <div className='inconscontainer'><AiOutlineUser/></div>
                    <div className='inputcontainer'>
                    <input  type='texte' placeholder='votre nom'/>
                    </div>
                </div>
                <div className='inputscontainer'>
                    <div className='inconscontainer'><FaWhatsapp/></div>
                    <div className='inputcontainer'>
                    <input  type='texte' placeholder='votre nom'/>
                    </div>
                </div>
                <div className='inputscontainer'>
                    <div className='inconscontainer'><AiOutlineMail/></div>
                    <div className='inputcontainer'>
                    <input  type='texte' placeholder='votre nom'/>
                    </div>
                </div>
                  <div>
                      <textarea placeholder='votre message...'>
                        
                      </textarea>
                  </div>
                  <button className='send'>Envoyer</button>   
            </form>
          </div>
      </div>
    </div>
  )
}

export default Contact;