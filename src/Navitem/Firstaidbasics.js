import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './Firstaidbasics.css'
import { Link } from 'react-router-dom'
import { useSpeechSynthesis } from 'react-speech-kit';

export default function Firstaidbasics() {

const { speak,cancel } = useSpeechSynthesis();
const text = " First aid basics : 1. First aid is the initial care and assistance provided to an injured or sick person before professional medical help arrives. :2.The main goal of first aid is to preserve life and prevent the condition from worsening. :3.Basic first aid techniques can make a significant difference in the outcome of an emergency situation. :4.First aid is not a substitute for professional medical treatment but a way to provide immediate assistance in emergency situations. :5.Basic first aid techniques include assessing the situation, providing basic life support, and knowing when to call for professional medical help. :First Aid Techniques: :1. Treating cuts and wounds: Clean the wound with soap and water, and then apply an antibiotic ointment and a sterile bandage to prevent infection. :2.Providing support for fractures or sprains: Use a splint to immobilize the injured area and prevent further damage. Apply ice to reduce swelling and pain. :3.Recognizing and treating shock: Symptoms of shock may include rapid breathing, weak pulse, and cool, clammy skin. To treat shock, lay the person down with their feet elevated and cover them with a blanket. :4.Dealing with nosebleeds: To stop a nosebleed, pinch the nostrils together and lean forward slightly. Apply ice to the bridge of the nose to reduce swelling. :5.Responding to allergic reactions: If someone experiences an allergic reaction, such as difficulty breathing or swelling of the face, seek medical attention immediately. If an EpiPen is available, use it as directed. :6.Managing heat exhaustion: Symptoms may include nausea, dizziness, and headache. Move the person to a cooler area and provide cool water to drink. :7.Treating eye injuries: If a foreign object is lodged in the eye, do not attempt to remove it. Instead, cover the eye with a sterile dressing and seek medical attention. :8.Providing first aid for burns: Minor burns can be treated with cool water and a sterile dressing. Seek medical attention for more severe burns. :9.Responding to seizures: If someone is having a seizure, protect them from injury by removing any nearby objects that could cause harm. Do not restrain them, and call for medical help if the seizure lasts longer than five minutes. :10.Managing a suspected heart attack: Symptoms may include chest pain, shortness of breath, and nausea. Call for emergency medical help immediately, and have the person rest comfortably while waiting for help to arrive. :11.These basic first aid techniques can help you respond appropriately in a variety of emergency situations. Remember to always prioritize your own safety and seek professional medical help if necessary.";
  return (
    <div>
      <div><Navbar/></div>
      <div style={{width:"100%"}}> 
      <section className='Firstaidbasics'><h1 className='Firstaidbasics_header'>First aid basics</h1></section>
      </div>
      <div className='container firstaidbasics_content' >
        <h2 className='firstaidbasics_heading' >First aid basics</h2>
        <p className='firstaidbasics_p'  ><strong className='firstaidbasics_strong'>1.</strong>First aid is the initial care and assistance provided to an injured or sick person before professional medical help arrives.</p>
        <p className='firstaidbasics_p' ><strong className='firstaidbasics_strong'>2.</strong>The main goal of first aid is to preserve life and prevent the condition from worsening.</p>
        <p className='firstaidbasics_p' ><strong className='firstaidbasics_strong'>3.</strong>Basic first aid techniques can make a significant difference in the outcome of an emergency situation.</p>
        <p className='firstaidbasics_p' ><strong className='firstaidbasics_strong'>4.</strong>First aid is not a substitute for professional medical treatment but a way to provide immediate assistance in emergency situations.</p>
        <p className='firstaidbasics_p' ><strong className='firstaidbasics_strong'>5.</strong>Basic first aid techniques include assessing the situation, providing basic life support, and knowing when to call for professional medical help.</p>
        <h2 className='firstaidbasics_heading'>First aid Techniques</h2>
        <p className='firstaidbasics_p' ><strong className='firstaidbasics_strong'>1.</strong>Treating cuts and wounds: Clean the wound with soap and water, and then apply an antibiotic ointment and a sterile bandage to prevent infection.</p>
        <p className='firstaidbasics_p' ><strong className='firstaidbasics_strong'>2.</strong>Providing support for fractures or sprains: Use a splint to immobilize the injured area and prevent further damage. Apply ice to reduce swelling and pain.</p>
        <p className='firstaidbasics_p' ><strong className='firstaidbasics_strong'>3.</strong>Recognizing and treating shock: Symptoms of shock may include rapid breathing, weak pulse, and cool, clammy skin. To treat shock, lay the person down with their feet elevated and cover them with a blanket.</p>
        <p className='firstaidbasics_p' ><strong className='firstaidbasics_strong'>4.</strong>Dealing with nosebleeds: To stop a nosebleed, pinch the nostrils together and lean forward slightly. Apply ice to the bridge of the nose to reduce swelling.</p>
        <p className='firstaidbasics_p' ><strong className='firstaidbasics_strong'>5.</strong>Responding to allergic reactions: If someone experiences an allergic reaction, such as difficulty breathing or swelling of the face, seek medical attention immediately. If an EpiPen is available, use it as directed.</p>
        <p className='firstaidbasics_p' ><strong className='firstaidbasics_strong'>6.</strong>Managing heat exhaustion: Symptoms may include nausea, dizziness, and headache. Move the person to a cooler area and provide cool water to drink.</p>
        <p className='firstaidbasics_p' ><strong className='firstaidbasics_strong'>7.</strong>Treating eye injuries: If a foreign object is lodged in the eye, do not attempt to remove it. Instead, cover the eye with a sterile dressing and seek medical attention.</p>
        <p className='firstaidbasics_p' ><strong className='firstaidbasics_strong'>8.</strong>Providing first aid for burns: Minor burns can be treated with cool water and a sterile dressing. Seek medical attention for more severe burns.</p>
        <p className='firstaidbasics_p' ><strong className='firstaidbasics_strong'>9.</strong>Responding to seizures: If someone is having a seizure, protect them from injury by removing any nearby objects that could cause harm. Do not restrain them, and call for medical help if the seizure lasts longer than five minutes.</p>
        <p className='firstaidbasics_p' ><strong className='firstaidbasics_strong'>10.</strong>Managing a suspected heart attack: Symptoms may include chest pain, shortness of breath, and nausea. Call for emergency medical help immediately, and have the person rest comfortably while waiting for help to arrive.</p>
        <p className='firstaidbasics_p' ><strong className='firstaidbasics_strong'>11.</strong>These basic first aid techniques can help you respond appropriately in a variety of emergency situations. Remember to always prioritize your own safety and seek professional medical help if necessary.</p>
        <ul className='aa'>
          <li> video solution : <Link className='youtube' to='https://youtu.be/DQ7JPNgU8Wg'>https://youtu.be/DQ7JPNgU8Wg</Link></li>
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
      <div><Footer/></div>
    </div>
  )
}
