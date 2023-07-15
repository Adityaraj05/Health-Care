import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'

import '../Disease_type/Infectious.css'
import bons from './bons.jpg'
import skin from './skin.jpg'
import yy from '../Disease_type/img_1.jpg'
import uu from '../Disease_type/br_1.jpg'
import cut from './cut.avif'
import bite from './bite.avif'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
export default function Disease() {
  const { t } = useTranslation(); 
  const [lang, setLang] = useState('');
  return (
    <div>
      <div><Navbar/></div>
      <div className="container">
     <div className='first_infectious_row'>
      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={yy} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">{t('Infectious')}</h2>
      <p className="infectious_p">{t('Infectious1')}</p>
      <Link className='infectious_a' to="/Infectious_disease">{t('covid_1')}</Link>
      </div>
      </div>

      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={uu} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">{t('breathing')}</h2>
      <p className="infectious_p">{t('breathing1')}</p>
      <Link className='infectious_a' to="/breathing">{t('covid_1')}</Link>
      </div>
      </div>


      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={cut} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">{t('cuts')}</h2>
      <p className="infectious_p">{t('cuts1')}</p>
      <Link className='infectious_a' to="/Cuts_wounds">{t('covid_1')}</Link>
      </div>
      </div>
      </div>

      <div className='first_infectious_row'>
      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={bite} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">{t('bites')}</h2>
      <p className="infectious_p">{t('bites1')}</p>
      <Link className='infectious_a' to="/Bits_Stings">{t('covid_1')}</Link>
      </div>
      </div>

      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={skin} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">{t('skin')}</h2>
      <p className="infectious_p">{t('skin1')}</p>
      <Link className='infectious_a' to="/Skin_burns">{t('covid_1')}</Link>
      </div>
      </div>


      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={bons} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">{t('bones')}</h2>
      <p className="infectious_p">{t('bones1')}</p>
      <Link className='infectious_a' to="/Bones_joint">{t('covid_1')}</Link>
      </div>
      </div>
      </div>
      <div><Footer/></div>
    </div>
    </div>
  )
}
