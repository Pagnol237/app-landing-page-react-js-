import React, {useEffect} from 'react'
import './acceuille.css'
import Image from './images/olinecourse.png'
import AOS from 'aos'

function Pourquoi() {
    useEffect(()=>{
        AOS.init({
            duration:1500,
        });
    },[])
  return (
    <div className='main_fonctionement'>
        <div className='fonct_fielt' >
          <img src={Image} className='personne' alt='personnage qui sinteroge'/>
        </div>

        <div className='fonct_fielt'>
          <div className='fonct_title'>SUIVI INDIVIDUEL PAR DES PROFESSEURS QUALIFIES</div>
            <p className='teacher'>
            loremLabore fugiat cupidatat incididunt sunt culpa. Magna esse ea proident laborum
            fugiat. Occaecat cillum laboris fugiat esse occaecat laborum dolore aliqua incididunt
            deserunt aliqua pariatur nulla occaecat. Duis ex id ex reprehenderit exercitation culpa
            velit. Incididunt pariatur incididunt reprehenderit ea excepteur adipisicing anim. 
            Laborum consectetur tempor nostrud nisi Lorem mollit officia elit est dolor et nisi 
            qui. Aliquip irure mollit velit veniam amet irure veniam sit esse veniam nulla cillum.
            </p>
        </div>
    </div>
  )
}

export default Pourquoi;