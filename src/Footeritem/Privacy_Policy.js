import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import '../componant/Carouseal_1.css'
import './Privacy.css'
import { useSpeechSynthesis } from 'react-speech-kit';
export default function Privacy_Policy() {
  const { speak,cancel } = useSpeechSynthesis();
  const text = "PRIVACY POLICY: At [Your Company Name], we prioritize the privacy and confidentiality of our users. This Privacy Policy explains how we collect, use, and protect the information you provide when using our Contact Us page. : :Information Collection. :When you submit your name, email address, and health issue on our Contact Us page, we collect and securely store this information. :We use it solely to connect you with a suitable doctor who can assist you with your health concern. :Use of Information: :Your personal information is used strictly for the purpose of facilitating communication between you and the doctor. We do not use or disclose your information for any other purposes without your explicit consent. :Data Security: : We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We maintain strict protocols to ensure the confidentiality and integrity of your data. :Data Sharing: :We do not share your personal information with any third parties, except for the doctor assigned to assist you. The doctor will only receive the necessary details related to your health issue to provide you with the appropriate medical guidance. :Data Retention: :We retain your personal information for as long as necessary to fulfill the purpose for which it was collected. Once the interaction with the doctor is complete, we securely delete your personal information, unless required otherwise by law. :User Rights: :You have the right to access, update, correct, or delete your personal information. If you wish to exercise any of these rights or have any concerns regarding your privacy, please contact us using the information provided below. :Changes to the Privacy Policy: :We reserve the right to modify or update this Privacy Policy at any time. Any changes will be posted on this page, and the revised policy will be effective immediately upon posting.";
  return (
    <div>
      <div><Navbar/></div>
      <div className="privacy_main">  
    </div>
     <div className="privacy_welcome"><h1 className='privacy_header_1'>PRIVACY POLICY</h1>
      {/* <h1 className='welcome_header_2'>SMART FIRST AID</h1> */}
     </div>
     <div className="container privacy_content_main">
      <p className='privacy_content_p'>At [Your Company Name], we prioritize the privacy and confidentiality of our users. This Privacy Policy explains how we collect, use, and protect the information you provide when using our "Contact Us" page.</p>
        <ul className="privacy_ul"><li><strong>Information Collection:</strong></li></ul>
      <p className='privacy_content_p'>When you submit your name, email address, and health issue on our "Contact Us" page, we collect and securely store this information. We use it solely to connect you with a suitable doctor who can assist you with your health concern.</p>
      <ul className="privacy_ul"><li> <strong>Use of Information:</strong></li></ul>
      <p className='privacy_content_p'>Your personal information is used strictly for the purpose of facilitating communication between you and the doctor. We do not use or disclose your information for any other purposes without your explicit consent</p>
      <ul className="privacy_ul"><li> <strong> Data Security:</strong></li></ul>
      <p className='privacy_content_p'>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We maintain strict protocols to ensure the confidentiality and integrity of your data.</p>
      <ul className="privacy_ul"><li> <strong>Data Sharing:</strong></li></ul>
      <p className='privacy_content_p'>We do not share your personal information with any third parties, except for the doctor assigned to assist you. The doctor will only receive the necessary details related to your health issue to provide you with the appropriate medical guidance.</p>
      <ul className="privacy_ul"><li> <strong>Data Retention:</strong></li></ul>
      <p className='privacy_content_p'>We retain your personal information for as long as necessary to fulfill the purpose for which it was collected. Once the interaction with the doctor is complete, we securely delete your personal information, unless required otherwise by law.
</p>
      <ul className="privacy_ul"><li> <strong>User Rights:</strong></li></ul>
      <p className='privacy_content_p'>You have the right to access, update, correct, or delete your personal information. If you wish to exercise any of these rights or have any concerns regarding your privacy, please contact us using the information provided below.</p>
      <ul className="privacy_ul"><li> <strong>Changes to the Privacy Policy:</strong></li></ul>
      <p className='privacy_content_p'>We reserve the right to modify or update this Privacy Policy at any time. Any changes will be posted on this page, and the revised policy will be effective immediately upon posting.</p>
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
