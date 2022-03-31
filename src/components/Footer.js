import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import {RiMailSendFill} from 'react-icons/ri'
import {BsPinMapFill} from 'react-icons/bs'
import {AiOutlineCopyright} from 'react-icons/ai'

function Footer() {
  return (
    <div className='footermain'>
      <div className='footer_field_container'>
        <div className='footer_field'>
          <div className='footer_field_title'>A PROPOS DE NOUS</div>
          <div className='footer_field_text'>
            Reprehenderit nostrud et sit incididunt nisi ad consequat in nisi. Sit quis
             labore anim velit ut id. Eu sit qui dolor aute. Lorem sint exercitation con
             sectetur sunt deserunt officia sint velit ut eu ea. Consectetur ullamco 
          </div>
        </div>

        <div className='footer_field'>
        <div className='footer_field_title'>LE BUT DE WOMLAH</div>
          <div className='footer_field_text'>
            Reprehenderit nostrud et sit incididunt nisi ad consequat in nisi. Sit quis
             labore anim velit ut id. Eu sit qui dolor aute. Lorem sint exercitation con
             sectetur sunt deserunt officia sint vel
          </div>
        </div>

        <div className='footer_field'>
        <div className='footer_field_title'>NOUS JOINDRE</div>
            <div className='localisation_container'>
                <div className='footer_field_icon'><FaWhatsapp/></div>
                <div className='footer_field_contact'>+237 000 000 000</div>
            </div>

            <div className='localisation_container'>
                <div className='footer_field_icon'><RiMailSendFill/></div>
                <div className='footer_field_contact'>info@womlah.com</div>
            </div>

            <div className='localisation_container'>
                <div className='footer_field_icon'><BsPinMapFill/></div>
                <div className='footer_field_contact'>yaounde / cameroun</div>
            </div>

        </div>
    </div>
    <hr/>
    <div className='copyright'><AiOutlineCopyright/> wamlah 2022, by pagnol consulting</div>
    </div>
  )
}

export default Footer;