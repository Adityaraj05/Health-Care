import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Carouseal__2.css'
import { useSpeechSynthesis } from 'react-speech-kit';

export default function Carouseal_2() {
  const { speak,cancel } = useSpeechSynthesis();
  const text = " IMPORTANCE OF FIRST AID KIT : Provides immediate treatment: A first aid kit contains essential supplies and equipment to provide immediate treatment for injuries and illnesses, which can prevent the condition from worsening. :Reduces the risk of infection: Using first aid supplies such as antiseptic wipes and bandages can reduce the risk of infection and promote proper wound healing. :Saves lives: In emergency situations, a first aid kit can provide life-saving care until medical help arrives. :Promotes safety: Having a first aid kit easily accessible in your home, workplace, or vehicle promotes safety and preparedness for unexpected emergencies. :Versatile: A well-stocked first aid kit can be used to treat a wide range of injuries and illnesses, from minor cuts and bruises to more serious conditions.Convenient: Having a first aid kit on hand saves time and reduces stress in emergency situations, as all necessary supplies are readily available. :Cost-effective: Treating injuries and illnesses with a first aid kit can be cost-effective compared to seeking medical attention for minor conditions. :Provides peace of mind: Having a first aid kit on hand can provide peace of mind, knowing that you are prepared to handle unexpected emergencies. :Helps to comply with health and safety regulations: Many workplaces and public spaces are required by law to have a first aid kit on hand to comply with health and safety regulations. :Can be customized to fit specific needs: First aid kits can be customized to fit the specific needs of different environments, such as workplaces, homes, and outdoor activities.";
  return (
    <div>
    <div><Navbar/></div>
    <div className="important_main">  
    </div>
     <div className="box_important"><h1 className='important_header_1'>IMPORTANCE OF</h1>
      <h1 className='important_header_2'>FIRST AID KIT</h1>
     </div>
     <div className="container important_content_main">
      <ul className='important_content_ul'>
        <li className='important_content_li'>Provides immediate treatment: A first aid kit contains essential supplies and equipment to provide immediate treatment for injuries and illnesses, which can prevent the condition from worsening.</li>
        <li className='important_content_li'> Reduces the risk of infection: Using first aid supplies such as antiseptic wipes and bandages can reduce the risk of infection and promote proper wound healing.</li>
        <li className='important_content_li'>Saves lives: In emergency situations, a first aid kit can provide life-saving care until medical help arrives.</li>
        <li className='important_content_li'>Promotes safety: Having a first aid kit easily accessible in your home, workplace, or vehicle promotes safety and preparedness for unexpected emergencies.</li>
        <li className='important_content_li'> Versatile: A well-stocked first aid kit can be used to treat a wide range of injuries and illnesses, from minor cuts and bruises to more serious conditions.</li>
        <li className='important_content_li'>Convenient: Having a first aid kit on hand saves time and reduces stress in emergency situations, as all necessary supplies are readily available.</li>
        <li className='important_content_li'> Cost-effective: Treating injuries and illnesses with a first aid kit can be cost-effective compared to seeking medical attention for minor conditions.</li>
        <li className='important_content_li'>Provides peace of mind: Having a first aid kit on hand can provide peace of mind, knowing that you are prepared to handle unexpected emergencies.</li>
        <li className='important_content_li'>Helps to comply with health and safety regulations: Many workplaces and public spaces are required by law to have a first aid kit on hand to comply with health and safety regulations.</li>
        <li className='important_content_li'> Can be customized to fit specific needs: First aid kits can be customized to fit the specific needs of different environments, such as workplaces, homes, and outdoor activities.</li>
        <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text})
        }}>Speak</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text})
        }}>Stop</button>
         </div>
      </ul>
     </div>
      <div><Footer/></div>
    </div>
  )
}
