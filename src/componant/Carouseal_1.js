import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Carouseal_1.css'
import { useSpeechSynthesis } from 'react-speech-kit';

export default function Carouseal_1() {
  const { speak,cancel } = useSpeechSynthesis();
  const text = "WELCOME TO SMART FIRST AID: Welcome to our first aid solution website! We are thrilled to have you here and hope that you find our website informative and helpful. :Our website is designed to provide reliable and comprehensive first aid solutions for a wide range of diseases and medical conditions. :Our team of passionate students has worked hard to ensure that the information on our website is easy-to-understand, up-to-date, and accessible to everyone. :At our website, you will find step-by-step guides for performing basic first aid techniques, useful tips and tricks to prevent common injuries and accidents, and comprehensive information about first aid solutions for various health concerns. :We understand that timely and effective first aid can make a significant difference in medical emergencies and can even save lives. :Therefore, our goal is to create a platform that is informative, user-friendly, and accessible to everyone. :We are committed to providing accurate and up-to-date information and are continually researching and updating our content to ensure its reliability. :However, we recognize that the information on our website is not a substitute for professional medical advice, and we encourage individuals to consult their healthcare providers for personalized medical advice. :We hope that our website proves to be a valuable resource for you and your loved ones in times of need. :Please explore our website and do not hesitate to contact us if you have any questions or feedback. Thank you for visiting!";
  return (
    <div>
      <div><Navbar/></div>
      <div className="welcome_main">  
    </div>
     <div className="box_welcome"><h1 className='welcome_header_1'>WELCOME TO </h1>
      <h1 className='welcome_header_2'>SMART FIRST AID</h1>
     </div>
     <div className="container welcome_content_main">
      <p className='welcome_content_p'>Welcome to our first aid solution website! We are thrilled to have you here and hope that you find our website informative and helpful.</p>
      <p className='welcome_content_p'>Our website is designed to provide reliable and comprehensive first aid solutions for a wide range of diseases and medical conditions. Our team of passionate students has worked hard to ensure that the information on our website is easy-to-understand, up-to-date, and accessible to everyone.</p>
      <p className='welcome_content_p'>At our website, you will find step-by-step guides for performing basic first aid techniques, useful tips and tricks to prevent common injuries and accidents, and comprehensive information about first aid solutions for various health concerns. We understand that timely and effective first aid can make a significant difference in medical emergencies and can even save lives. Therefore, our goal is to create a platform that is informative, user-friendly, and accessible to everyone.</p>
      <p className='welcome_content_p'>We are committed to providing accurate and up-to-date information and are continually researching and updating our content to ensure its reliability. However, we recognize that the information on our website is not a substitute for professional medical advice, and we encourage individuals to consult their healthcare providers for personalized medical advice.</p>
      <p className='welcome_content_p'>We hope that our website proves to be a valuable resource for you and your loved ones in times of need. Please explore our website and do not hesitate to contact us if you have any questions or feedback. Thank you for visiting!"</p>
      <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text})
        }}>Speak</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text})
        }}>Stop</button>
        </div>
     </div>

      <div><Footer/></div>
    </div>
  )
}
