
import il from './health.jpg'
import './Cntent.css'

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useSpeechSynthesis } from 'react-speech-kit';

  
// Contains the value and text for the options
const languages = [
    { value: 'op', text: "Options" },
    { value: 'en', text: "English" },
    { value: 'hi', text: "Hindi" },
    { value: 'bn', text: "Bengali" },
    { value: 'gu', text: "Gujarati" }
]


export default function Content(props) {


  const { speak,cancel } = useSpeechSynthesis();
  const text = "Health Awarness Stay informed: Encourage your audience to stay informed about their health and seek professional medical advice when necessary. :Be prepared: Emphasize the importance of being prepared for emergencies, such as having a well-stocked first aid kit and knowing basic first aid techniques. :Prioritize self-care: Encourage your audience to prioritize their physical and mental health through healthy habits, such as exercise, good nutrition, stress management, and self-care.";
  const { t } = useTranslation(); 
const [lang, setLang] = useState('');


  
  
  return (
    <div className="container mt-5 mb-5 health-awareness">
      <div className="img_box_1">
        <img src={il}  alt="" className="img_1"/>
      </div>
      <div className="text_box_1" >
        <p  className="text_1">
         <ul>
         <h1>{t('health')}</h1>
          <li className="word">{t('point_1')}</li>
          <li className="word">{t('point_2')}</li>
          <li className="word">{t('point_3')}</li>
         </ul>
        </p>
        
        <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text})
        }}>{t('speak')}</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text})
        }}>{t('stop')}</button>
        </div>

      </div>
    </div>
  )
}
