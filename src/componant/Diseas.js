
import React from 'react'

import './Diseas.css'
import {Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
export default function Diseas() {
  const { t } = useTranslation(); 
  const [lang, setLang] = useState('');
  
  // return (
  //   <>
      {/* <div classNameName='container' id='alldisease' >
     <Link to="/Infectious_disease">
    <div className='diseas-1' >
      <div>
        <Link to="/Infectious_disease" className='diseas-box-1' >{t('Infectious')}</Link>
      </div>
      
    </div>
    </Link>
    <Link to="/breathing">
    <div className='diseas-2' >
    <p to="/breathing" className='diseas-box-2'>{t('breathing')}</p>
    </div>
    </Link>
    <Link to="/Bones_joint">
    <div className='diseas-3' >
    <Link to="/Bones_joint" className='diseas-box-3' >{t('bones')}</Link>
    </div>
    </Link>
    <Link to="">
    <div className='diseas-4' >
    <Link to="/Common_Disease" className='diseas-box-4' >{t('common')}</Link>
    </div>
    </Link>
    </div>  */}


 
  
  return (
    <>

    <div class="main-flip container">
    <div class="container--1">
        <div class="card--1">
        
            <div class="card-front-1"><p>{t('Infectious')} </p></div>
            <Link to="/Infectious_disease"  >
                <div class="card-back">
                    <h2 class="h2--1">{t('Infectious')} <br/>
                    <span class="span--1"></span>
                    </h2>
                    <div class="content--1">
                        <p class="p--1">Infectious diseases are illnesses caused by pathogenic microorganisms such as bacteria, viruses, fungi, or parasites that can be transmitted from one person to another.</p>
                    </div>
                  
                </div>
                </Link>
            </div>

            <div class="card--1">
            <div class="card-front-2"><p>{t('breathing')}</p></div>
            <Link to="/breathing">
                <div class="card-back">
                    <h2 class="h2--1">{t('breathing')}<br/>
                    <span class="span--1"></span>
                    </h2>
                    <div class="content--1">
                        <p class="p--1">Respiratory diseases, also known as breathing diseases, are conditions that affect the lungs and respiratory system, impairing the ability to breathe properly.</p>
                    </div>
                  
                </div>
                </Link>
            </div>

            <div class="card--1">
            <div class="card-front-3"><p>{t('bones')}</p></div>
            <Link to="/Bones_joint">
                <div class="card-back">
                    <h2 class="h2--1">{t('bones')}<br/>
                    <span class="span--1"></span>
                    </h2>
                    <div class="content--1">
                        <p class="p--1">Bone and joint problems refer to conditions that affect the skeletal system, including bones, joints, cartilage, ligaments, and tendons.</p>
                    </div>
                  
                </div>
                </Link>
            </div>

            <div class="card--1">
            <div class="card-front-4"><p>{t('common')}</p></div>
            <Link to="/Common_Disease">
                <div class="card-back">
                    <h2 class="h2--1">{t('common')}<br/>
                    <span class="span--1"></span>
                    </h2>
                    <div class="content--1">
                        <p class="p--1">Common diseases are health conditions that occur frequently in a population or are prevalent in a specific region</p>
                    </div>
                  
                </div>
                </Link>
            </div>
            </div>
            </div>   
     </>
  )
}





