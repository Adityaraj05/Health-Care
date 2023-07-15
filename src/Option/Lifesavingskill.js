import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './Lifesavingskill.css'
import { useSpeechSynthesis } from 'react-speech-kit';

export default function Lifesavingskill() {

  const { speak,cancel } = useSpeechSynthesis();
  const text = " Life Saving Skill: What is Life Saving Skill ?. :~Life-saving skills refer to the knowledge and techniques required to provide emergency assistance to a person who is experiencing a life-threatening situation. :These skills are used to stabilize a person's condition until professional medical help arrives, or to prevent further injury or harm. :~Examples of life-saving skills include CPR (cardiopulmonary resuscitation), treating bleeding and shock, managing choking or drowning, treating burns and scalds, managing allergic reactions and anaphylaxis, and managing head and spinal injuries, among others. :~In general, life-saving skills involve understanding the signs and symptoms of a medical emergency, assessing the situation, and taking immediate action to provide basic life support until professional help arrives. Knowing these skills can make the difference between life and death in an emergency situation. :1. CPR (Cardiopulmonary resuscitation): This technique can be used to restart a person's heart and breathing when they have gone into cardiac arrest. It involves chest compressions and rescue breathing. :2. Choking: Learn how to properly administer the Heimlich maneuver to help a person who is choking and unable to breathe. :3. Bleeding: Learn how to properly apply pressure to wounds to stop bleeding and use tourniquets if necessary. :4. Burns: Know how to treat burns of varying degrees, including removing any clothing or jewelry around the affected area and running cool water over the burn. :5. Poisoning: Know how to identify and treat poisoning, including calling emergency services and administering first aid measures such as inducing vomiting or providing activated charcoal. :6.Seizures: Understand how to help someone experiencing a seizure, including clearing any nearby objects and ensuring their safety until the seizure subsides. :7. Allergic reactions: Be able to recognize and treat severe allergic reactions such as anaphylaxis, including the use of epinephrine auto-injectors. :8. Heat stroke and hypothermia: Understand the signs and symptoms of both heat stroke and hypothermia, and be able to provide appropriate first aid measures to help the affected person. :9. Fractures and sprains: Know how to properly immobilize and support injured limbs, including using splints and slings as necessary. :10. Head injuries: Recognize the signs and symptoms of head injuries, including concussions, and understand how to provide first aid measures such as icing the affected area and monitoring for any changes in consciousness. :~ Remember that first aid skills are best learned through proper training and practice, and it's important to always prioritize your own safety and that of the person in need of first aid.";
  return (
    <div>
      <div><Navbar/></div>
      
      <section className="wave"><h1 className='disclaimer'>Life Saving Skill</h1></section>
    <div className='container'>
    <div>
    <h2 className='heading'>What is Life Saving Skill ?</h2>
    <p className='list'>~Life-saving skills refer to the knowledge and techniques required to provide emergency assistance to a person who is experiencing a life-threatening situation. These skills are used to stabilize a person's condition until professional medical help arrives, or to prevent further injury or harm.</p>
    <p className="list">~Examples of life-saving skills include CPR (cardiopulmonary resuscitation), treating bleeding and shock, managing choking or drowning, treating burns and scalds, managing allergic reactions and anaphylaxis, and managing head and spinal injuries, among others.</p>
    <p className="list">~In general, life-saving skills involve understanding the signs and symptoms of a medical emergency, assessing the situation, and taking immediate action to provide basic life support until professional help arrives. Knowing these skills can make the difference between life and death in an emergency situation.</p>
   
        <p className='list'>1. CPR (Cardiopulmonary resuscitation): This technique can be used to restart a person's heart and breathing when they have gone into cardiac arrest. It involves chest compressions and rescue breathing.</p>
         <p className='list'> 2. Choking: Learn how to properly administer the Heimlich maneuver to help a person who is choking and unable to breathe.</p>
      <p className="list">3. Bleeding: Learn how to properly apply pressure to wounds to stop bleeding and use tourniquets if necessary.</p>
      <p className="list">4. Burns: Know how to treat burns of varying degrees, including removing any clothing or jewelry around the affected area and running cool water over the burn.</p>
      <p className="list">5. Poisoning: Know how to identify and treat poisoning, including calling emergency services and administering first aid measures such as inducing vomiting or providing activated charcoal.</p>
      <p className="list"> 6. Seizures: Understand how to help someone experiencing a seizure, including clearing any nearby objects and ensuring their safety until the seizure subsides.</p>
      <p className="list">7. Allergic reactions: Be able to recognize and treat severe allergic reactions such as anaphylaxis, including the use of epinephrine auto-injectors.</p>
      <p className="list">8. Heat stroke and hypothermia: Understand the signs and symptoms of both heat stroke and hypothermia, and be able to provide appropriate first aid measures to help the affected person.</p>
      <p className="list">9. Fractures and sprains: Know how to properly immobilize and support injured limbs, including using splints and slings as necessary.</p>
      <p className="list">10. Head injuries: Recognize the signs and symptoms of head injuries, including concussions, and understand how to provide first aid measures such as icing the affected area and monitoring for any changes in consciousness.</p>
      <p className="list">~ Remember that first aid skills are best learned through proper training and practice, and it's important to always prioritize your own safety and that of the person in need of first aid.</p>
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
