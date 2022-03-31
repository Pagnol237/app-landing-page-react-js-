import React from 'react'
import './acceuille.css'
import Personnage1 from './images/Personnage1.png'

function Fonctionnement() {
  return (
    <div className='main_fonctionement'>
        <div className='fonct_fielt' >
          <img src={Personnage1} className='personne' alt='personnage qui sinteroge'/>
        </div>

        <div className='fonct_fielt'>
          <div className='fonct_title'>COMMENT CA FONCTIONNE?</div>

          <div className='step_container'>
            <div className='step_number'>1</div>
            <div className='step_text'>Inscrivez vous sur l'application</div>
          </div>

          <div className='step_container'>
            <div className='step_number'>2</div>
            <div className='step_text'>connectez vous à votre compte</div>
          </div>

          <div className='step_container'>
            <div className='step_number'>3</div>
            <div className='step_text'>Choissisez la langue à étudier</div>
          </div>

          <div className='step_container'>
            <div className='step_number'>4</div>
            <div className='step_text'>Evaluez votre progression</div>
          </div>


        </div>
    </div>
  )
}

export default Fonctionnement;