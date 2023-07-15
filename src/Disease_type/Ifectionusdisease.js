import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './Infectious.css'
import rr from './img_1.jpg'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
export default function Ifectionusdisease() {
  const { t } = useTranslation(); 
  const [lang, setLang] = useState('');
  return (
    <div>
      <div><Navbar/></div>
      <div className='container'>
      <h1 className='main_heading_infectionus'>{t('Infectious')}</h1>
      <div className='first_infectious_row'>
      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='img_infectious' src={rr} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">{t('fever')}</h2>
      <p className="infectious_p">{t('infectious_disease1')}</p>
      <Link className='infectious_a' to="/de_1">{t('covid_1')}</Link>
      </div>
      </div>

      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='img_infectious' src={rr} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">The Common Cold</h2>
      <p className="infectious_p">The common cold is a viral infection that affects the upper respiratory system, causing symptoms such as coughing, sneezing, congestion, runny nose, sore throat, and sometimes a low-grade fever.</p>
      <Link className='infectious_a' to="/de_2">First aid Solution</Link>
      </div>
      </div>


      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='img_infectious' src={rr} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Malaria</h2>
      <p className="infectious_p">Malaria is a serious and potentially life-threatening infectious disease caused by a parasite that is transmitted through the bite of infected mosquitoes. It can cause symptoms such as fever, headache, chills, and flu-like symptoms.</p>
      <Link className='infectious_a' to="/de_3">First aid Solution</Link>
      </div>
      </div>

      </div>


      <div className='first_infectious_row'>
      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='img_infectious' src={rr} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Cholera</h2>
      <p className="infectious_p">Cholera is a bacterial infection that affects the intestines and can cause severe diarrhea and dehydration. It is typically spread through contaminated water or food.</p>
      <Link className='infectious_a' to="/de_4">First aid Solution</Link>
      </div>
      </div>

      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='img_infectious' src={rr} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">COVID-19</h2>
      <p className="infectious_p">COVID-19, also known as coronavirus disease 2019, is a highly infectious respiratory illness caused by the SARS-CoV-2 virus. It can cause a range of symptoms from mild to severe, and has resulted in a global pandemic.</p>
      <Link className='infectious_a' to="/de_5">First aid Solution</Link>
      </div>
      </div>


      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='img_infectious' src={rr} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Conjunctivitis</h2>
      <p className="infectious_p">Conjunctivitis, also known as pink eye, is an inflammation of the conjunctiva, which is the thin layer of tissue that covers the white part of the eye and the inside of the eyelids. It can be caused by a viral or bacterial infection, or by allergies.</p>
      <Link className='infectious_a' to="/de_6">First aid Solution</Link>
      </div>
      </div>

      </div>



      <div className='first_infectious_row'>
      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='img_infectious' src={rr} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Dengue</h2>
      <p className="infectious_p">Dengue is a mosquito-borne viral infection that causes flu-like symptoms such as fever, headache, and joint pain. In severe cases, it can be life-threatening.</p>
      <Link className='infectious_a' to="/de_7">First aid Solution</Link>
      </div>
      </div>

      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='img_infectious' src={rr} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Strep Throat</h2>
      <p className="infectious_p">Strep throat is a bacterial infection that affects the throat and tonsils, causing symptoms such as sore throat, fever, and difficulty swallowing. It is usually treated with antibiotics to prevent complications and reduce the duration of symptoms.</p>
      <Link className='infectious_a' to="/de_8">First aid Solution</Link>
      </div>
      </div>


      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='img_infectious' src={rr} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Stomach Flu</h2>
      <p className="infectious_p">Stomach flu, also known as gastroenteritis, is a viral or bacterial infection that inflames the stomach and intestines, causing symptoms such as nausea, vomiting, diarrhea, and stomach cramps.</p>
      <Link className='infectious_a' to="/de_9">First aid Solution</Link>
      </div>
      </div>

      </div>


      </div>
      <div><Footer/></div>
    </div>
  )
}
