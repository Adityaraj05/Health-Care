
import im from './firstaid.webp'
import './Content1.css'

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'
import { useSpeechSynthesis } from 'react-speech-kit';
  
  
// Contains the value and text for the options
const languages = [
    { value: '', text: "Options" },
    { value: 'en', text: "English" },
    { value: 'hi', text: "Hindi" },
    { value: 'bn', text: "Bengali" },
    { value: 'gu', text: "Gujarati" }
]
export default function Content1() {
  const { t } = useTranslation(); 
    const [lang, setLang] = useState('');
    const { speak,cancel } = useSpeechSynthesis();
  const text = "First Aid Kit Awarness: Be prepared: Emphasize the importance of having a well-stocked first aid kit in case of emergencies. :Know your kit: Encourage your audience to familiarize themselves with the contents of their first aid kit and know how to use each item. :Keep it accessible: Remind your audience to keep their first aid kit easily accessible and in a location where everyone in the household can find it quickly in case";
  
    // This function put query that helps to 
    // change the language
    const handleChange = e => { 
        setLang(e.target.value);
        let loc = "http://localhost:3000";
        window.location.replace(loc + "?lng=" + e.target.value);
    }
  return (
    
      <div className="container first-aid-kit" >
      <div className='img_box_2'>
        <img className='img_2' src={im} alt="" />
      </div>
      <div className='text_box_2'>
        <div className='text_2'>
        
         <ul>
         <h1>{t('firstaidawarness')}</h1>
          <li className="word">{t('awarness_1')}</li>
          <li className="word">{t('awarness_2')}</li>
          <li className="word">{t('awarness_3')}</li>
         </ul>
        </div>

        <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text})
        }}>{t('speak')}</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text})
        }}>Stop</button>
        </div>
       
      </div>
    </div>
    
  )
}
