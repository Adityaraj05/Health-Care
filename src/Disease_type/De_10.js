import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './De_1.css'
import asthma_img from './asthma.jpg'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { Link } from 'react-router-dom'
export default function De_10() {
  const { speak,cancel } = useSpeechSynthesis();
  const text="First Aid Solution: Follow your asthma action plan: Work with your doctor to create an asthma action plan that outlines the steps to take during an asthma attack. :Follow your plan closely. :Use your inhaler: Use your inhaler as prescribed by your doctor to relieve symptoms and prevent attacks. :Keep your inhaler with you at all times. :Stay calm: Stay calm during an asthma attack and focus on breathing slowly and deeply. :Sit up straight: Sit up straight or stand up during an asthma attack to help open up your airways. :Seek medical attention: If your symptoms worsen or you have difficulty breathing, seek medical attention immediately. :Identify and avoid triggers: Identify and avoid triggers such as allergens, smoke, pollution, and exercise-induced asthma to prevent attacks. :Work with your doctor to develop a plan to manage triggers.";
  const { t } = useTranslation(); 
  const [lang, setLang] = useState('');
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
    <h1 className='heading_de_asthma'>{t('breathing_1')}</h1>
   </div>
</div>
      <div className='container main_de_1'>
        <div className='main_symptoms'>
            <div className='main_symptoms_img'>
                <img className='main_symptoms_img_1' src={asthma_img} alt="" />
            </div>
        </div>
        <div className='main_solution'>
        <h1 className='main_solution_h1'>{t('covid_1')}</h1>
      <ul className='main_solution_ul'>
                <li className='main_solution_li'>{t('asthmanew1')}</li>
                <li className='main_solution_li'>{t('asthmanew2')}</li>
                <li className='main_solution_li'>{t('asthma3')}</li>
                <li className='main_solution_li'>{t('asthma4')}</li>
                <li className='main_solution_li'>{t('asthma5')}</li>
                <li className='main_solution_li'>{t('asthma6')}</li>
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
    <button class="design"><Link to="/de_11">Choking</Link></button>
    <button class="design"><Link to="/de_12">Pneumonia</Link></button>
  </div>
  
  <div className='center-btn'>
  <button id="toggleButton" class="design sidebox" onClick={toggleButtons}>
    View more diseases
  </button>
  </div>
  <div id="buttonContainer" class="hidden ">
    <div class="sidebox">
    <button class="design"><Link to="/de_13">Tuberculosis</Link></button>
    <button class="design"><Link to="/de_14">Swelling</Link></button> 
    </div>
    <div class="sidebox">
      <button class="design"><Link to="/de_15">Drowning</Link></button>
    </div>
    <div className='center-btn'>
    <button class="design sidebox" onClick={toggleButtons}>View less diseases</button>
    </div>
  </div>
  </div>
  <div className='solution-video'> 
  <div class="ratio ratio-16x9"> 

  <iframe src="https://www.youtube.com/embed/MZF1Dz7nI-4" title="YouTube video player"  allowfullscreen></iframe>
</div>
</div>
  </div>
  </div>
      <div><Footer/></div>
    </div>
  )
}
