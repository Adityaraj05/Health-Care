import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './Infectious.css'
import './Breathing.css'
import gg from './br_1.jpg'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Breathing() {
  const { t } = useTranslation(); 
  const [lang, setLang] = useState('');
  return (
    <div>
     <div><Navbar/></div>
     <div className="container">
     <h1 className='main_heading_breathing'>{t('breathing')}</h1>
     <div className='first_infectious_row'>
      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={gg} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">{t('breathing_1')}</h2>
      <p className="infectious_p">{t('breathing_2')}</p>
      <Link className='infectious_a' to="/de_10">{t('covid_1')}</Link>
      </div>
      </div>

      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={gg} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Choking</h2>
      <p className="infectious_p">Choking occurs when an object or food becomes lodged in the throat or windpipe, blocking the airway and preventing breathing. It can cause severe respiratory distress and can be life-threatening if not treated promptly.</p>
      <Link className='infectious_a' to="/de_11">First aid Solution</Link>
      </div>
      </div>


      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={gg} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Pneumonia</h2>
      <p className="infectious_p">Pneumonia is a respiratory infection that inflames the air sacs in the lungs, causing cough, fever, chest pain, and difficulty breathing. It can be caused by bacteria, viruses, or other microorganisms.</p>
      <Link className='infectious_a' to="/de_12">First aid Solution</Link>
      </div>
      </div>
      </div>

      <div className='first_infectious_row'>
      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={gg} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Tuberculosis</h2>
      <p className="infectious_p">Tuberculosis (TB) is a bacterial infection that mainly affects the lungs, but can also affect other parts of the body. It is characterized by symptoms such as cough, fever, night sweats, and weight loss.</p>
      <Link className='infectious_a' to="/de_13">First aid Solution</Link>
      </div>
      </div>

      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={gg} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Swelling</h2>
      <p className="infectious_p">Swelling of the throat, also known as throat swelling, is a condition where the tissues in the throat become enlarged, leading to difficulty breathing and swallowing. It can be caused by allergic reactions, infections.</p>
      <Link className='infectious_a' to="/de_14">First aid Solution</Link>
      </div>
      </div>


      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={gg} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Drowning</h2>
      <p className="infectious_p">Drowning occurs when a person's airway is submerged in water, preventing them from breathing. It can lead to respiratory failure, brain damage, and death if not treated promptly.</p>
      <Link className='infectious_a' to="/de_15">First aid Solution</Link>
      </div>
      </div>
      </div>


     </div>
     <div><Footer/></div>
    </div>
  )
}
