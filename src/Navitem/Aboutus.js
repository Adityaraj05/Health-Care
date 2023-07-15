import React from 'react'
import Footer from '../componant/Footer'
import Navbar from '../componant/Navbar'
import './Aboutus.css'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
export default function Aboutus() {
  const { t } = useTranslation(); 
  const [lang, setLang] = useState('');
  const { speak,cancel } = useSpeechSynthesis();
  const text="Welcome to our first aid solution website! We are a group of students passionate about improving access to reliable and comprehensive first aid information for a wide range of diseases and medical conditions. :Our website aims to provide easy-to-understand first aid solutions for various health concerns, empowering individuals to take charge of their health and wellbeing. :We understand that timely and effective first aid can make a significant difference in medical emergencies and can even save lives. :Therefore, our goal is to create a platform that is informative, user-friendly, and accessible to everyone. :We have designed this website to provide: Comprehensive information about first aid solutions for various diseases and medical conditions. :Easy-to-follow step-by-step guides for performing basic first aid techniques. :Useful tips and tricks to help prevent common injuries and accidents. :A platform for individuals to ask questions and receive expert advice on first aid solutions. :As students, we are committed to providing accurate and up-to-date information, and we are continually researching and updating our content to ensure its reliability. :However, we recognize that the information on our website is not a substitute for professional medical advice, and we encourage individuals to consult their healthcare providers for personalized medical advice. :We hope that our website proves to be a valuable resource for you and your loved ones in times of need. :If you have any feedback or suggestions for improving our website, please do not hesitate to contact us. :Thank you for visiting!";
  return (
    <div>
    <div>
      <Navbar/>
    </div>
    <section className="wave" style={{ background: "linear-gradient(90deg, rgb(195 110 175), rgb(69 5 115))"}}><h1 className='disclaimer'>{t('about')}</h1></section>
    <div className='container'>
    <div>
    <ul>
    <li className='list'>{t('about1')}</li>
      <li className='list'>{t('about2')}</li> 
      <li className='list'>{t('about3')}
</li>
      <li className='list'>{t('about4')}
</li>
      <li className='list'>{t('about5')}</li>
      </ul>
      <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text})
        }}>Speak</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text})
        }}>Stop</button>
        </div>
      </div>
    </div>
      <div><Footer/></div>
    </div>
  )
}
