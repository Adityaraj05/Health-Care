import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './De_1.css'
import { Link } from 'react-router-dom'
import De_img from './De_1.jpg'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

export default function De_1() {
  const { t } = useTranslation(); 
  const [lang, setLang] = useState('');
  const { speak,cancel } = useSpeechSynthesis();
  const text="First Aid Solution: Rest: Take it easy and get plenty of sleep to allow your body to fight off the infection. :Drink fluids: Stay hydrated by drinking water or other clear fluids to prevent dehydration. :Take medicine: Over-the-counter fever reducers like acetaminophen (Tylenol) or ibuprofen (Advil) can help lower your fever and ease discomfort. :Apply a cool cloth: Place a damp cloth or cool pack on your forehead or other pulse points to help reduce your fever. :Wear light clothing: Wear loose, lightweight clothing to keep your body cool and prevent overheating. :Use a fan: Use a fan to circulate air in the room and help lower your body temperature. :Call a doctor: If your fever persists for more than 3 days, or if you have other symptoms like difficulty breathing or chest pain, seek medical attention.";
  function toggleButtons() {
    var buttonContainer = document.getElementById('buttonContainer');
    var toggleButton = document.getElementById('toggleButton');

    if (buttonContainer.classList.contains('hidden')) {
      buttonContainer.classList.remove('hidden');
      toggleButton.style.display = "none";
      //  toggleButton.textContent = 'View less';
    } else {
      buttonContainer.classList.add('hidden');
      toggleButton.style.display = "flex";
      // toggleButton.textContent = 'View more';
    }
  }
  return (
    <div>
      <div><Navbar/></div>
      <div className='body_11'>
            <div style={{position:"relative" ,backgroundcolor: "deepskyblue",minheight:" 50vh"}}>
      <div className="custom-shape-divider-top-1680709654_1">
    <svg className='svg_1_curv' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill_1"></path>
    </svg>
    <h1 className='heading_de_fever'>{t('fever')}</h1>
   </div>
</div>
    <div className='container main_de_1'>
        <div className='main_symptoms'>
            <div className='main_symptoms_img'>
                <img className='main_symptoms_img_1' src={De_img} alt="" />
            </div>
        </div>
        <div className='main_solution'>
        <h1 className='main_solution_h1'>{t('covid_1')}</h1>
            <ul className='main_solution_ul'>
                <li className='main_solution_li'>{t('feverpoint_1')}</li>
                <li className='main_solution_li'>{t('feverpoint_2')}</li>
                <li className='main_solution_li'> {t('feverpoint_3')}</li>
                <li className='main_solution_li'>{t('feverpoint_4')}</li>
                <li className='main_solution_li'>{t('feverpoint_5')}</li>
                <li className='main_solution_li'>{t('feverpoint_6')}</li>
                <li className='main_solution_li'>{t('feverpoint_7')}</li>
            </ul>

            <div className='btn-stop'>
        <button type="button" class="btn btn-light" onClick={()=>{
          speak({text:text})
        }}>{t('speak')}</button>
        <button type="button" class="btn btn-light" onClick={()=>{
          cancel({text:text})
        }}>{t('stop')}</button>
        </div>
        </div>
        
    </div>
    </div>
    <div className='container'>
      <div className='disease-2'>
      <div className='check-other'>
      <h2>
        View First aid solutions for other diseases
      </h2>
    <div class="sidebox">
    <button class="design"><Link to="/de_2"> Common Cold</Link></button>
    <button class="design"><Link to="/de_3">Malaria</Link></button>
  </div>
  <div class="sidebox">
    <button class="design"><Link to="/de_4">Cholera</Link></button>
    <button class="design"><Link to="/de_5">Covis-19</Link></button>
  </div>
  <div className='center-btn'>
  <button id="toggleButton" class="design sidebox" onClick={toggleButtons}>
    View more diseases
  </button>
  </div>
  <div id="buttonContainer" class="hidden ">
    <div class="sidebox">
      <button class="design"><Link to="/de_6">Conjunctivities</Link></button>
      <button class="design"><Link to="/de_7">Dengue</Link></button>
    </div>
    <div class="sidebox">
      <button class="design"><Link to="/de_8">Strep Throat</Link></button>
      <button class="design"><Link to="/de_9">Stomach Flu</Link></button>
    </div>
    <div className='center-btn'>
    <button class="design sidebox" onClick={toggleButtons}>View less diseases</button>
    </div>
  </div>
  </div>
  <div className='solution-video'> 
  <div class="ratio ratio-16x9"> 

  <iframe src="https://www.youtube.com/embed/mWCY2NxmfOw" title="YouTube video player"  allowfullscreen></iframe>
</div>
</div>
  </div>
  </div>
      <div><Footer/></div>
    </div>
  )
}
