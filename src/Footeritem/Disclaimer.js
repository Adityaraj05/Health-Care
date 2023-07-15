import React from 'react'
import Navbar from '../componant/Navbar'
import './Disclaimer.css'
import Footer from '../componant/Footer'
import { useSpeechSynthesis } from 'react-speech-kit';
export default function Disclaimer() {
  const { speak,cancel } = useSpeechSynthesis();
  const text = "Disclaimer : Our website provides general information about first aid solutions for various diseases and medical conditions. However, the information on this website is not intended to be a substitute for professional medical advice, diagnosis, or treatment. :Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on our website. :We make every effort to ensure that the information on our website is accurate and up-to-date, but we do not guarantee its accuracy or completeness. We are not liable for any damages or losses arising from the use or inability to use the information on this website. :Please note that first aid solutions provided on our website are not a substitute for emergency medical care. In case of a medical emergency, please call your local emergency number or seek immediate medical attention. :By using our website, you agree to the terms of this disclaimer. If you do not agree to these terms, please do not use our website.";
  return (
    <div>
    <div><Navbar/></div>
    <section class="wave" style={{ background: "linear-gradient(90deg, rgb(195 110 175), rgb(69 5 115))"}}><h1 className='disclaimer'>Disclaimer</h1></section>
    
    <div className='container'>
    <div>
    <ul>
    <li className='list'>Our website provides general information about first aid solutions for various diseases and medical conditions. However, the information on this website is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
      </li>
      <li className='list'>Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on our website.</li> 
      <li className='list'>We make every effort to ensure that the information on our website is accurate and up-to-date, but we do not guarantee its accuracy or completeness. We are not liable for any damages or losses arising from the use or inability to use the information on this website.</li>
      <li className='list'>Please note that first aid solutions provided on our website are not a substitute for emergency medical care. In case of a medical emergency, please call your local emergency number or seek immediate medical attention.</li>
      <li className='list'>By using our website, you agree to the terms of this disclaimer. If you do not agree to these terms, please do not use our website.</li>
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
