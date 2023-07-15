import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './De_1.css'
import drow_img from './drow.jpg'
import { useSpeechSynthesis } from 'react-speech-kit';
import { Link } from 'react-router-dom'
export default function De_15() {

  const { speak,cancel } = useSpeechSynthesis();
  const text="First Aid Solution: Call for emergency help: Call for emergency medical help immediately if you suspect someone is drowning. :Every second counts in a drowning emergency. :Remove the person from the water: Remove the person from the water as quickly as possible while taking care to avoid injuring yourself. :Check for breathing: Check for breathing and pulse. If the person is not breathing, perform CPR immediately. :Perform rescue breathing: If the person is not breathing, perform rescue breathing by giving two breaths to the person's mouth. :Continue CPR: Continue CPR until emergency medical help arrives, or the person begins to breathe on their own. :Keep the person warm and dry: Cover the person with a blanket and keep them warm and dry to prevent hypothermia. Monitor their breathing and pulse until emergency medical help arrives.";
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
    <h1 className='heading_de_drowing'>Drowning</h1>
   </div>
</div>
      <div className='container main_de_1'>
        <div className='main_symptoms'>
            <div className='main_symptoms_img'>
                <img className='main_symptoms_img_1' src={drow_img} alt="" />
            </div>
        </div>
        <div className='main_solution'>
        <h1 className='main_solution_h1'>First Aid Solution</h1>
      
            <ul className='main_solution_ul'>
                <li className='main_solution_li'>Call for emergency help: Call for emergency medical help immediately if you suspect someone is drowning. Every second counts in a drowning emergency.

</li>
                <li className='main_solution_li'>Remove the person from the water: Remove the person from the water as quickly as possible while taking care to avoid injuring yourself.
</li>
                <li className='main_solution_li'>    Check for breathing: Check for breathing and pulse. If the person is not breathing, perform CPR immediately.
</li>
                <li className='main_solution_li'> Perform rescue breathing: If the person is not breathing, perform rescue breathing by giving two breaths to the person's mouth.
</li>
                <li className='main_solution_li'>    Continue CPR: Continue CPR until emergency medical help arrives, or the person begins to breathe on their own.

</li>
                <li className='main_solution_li'>Keep the person warm and dry: Cover the person with a blanket and keep them warm and dry to prevent hypothermia. Monitor their breathing and pulse until emergency medical help arrives.</li>
            </ul>
            <div className='btn-stop'>
        <button type="button" class="btn btn-light" onClick={()=>{
          speak({text:text})
        }}>Speak</button>
        <button type="button" class="btn btn-light" onClick={()=>{
          cancel({text:text})
        }}>Stop</button>
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
      <button class="design"><Link to="/de_10">Asthma</Link></button>
    </div>
    <div className='center-btn'>
    <button class="design sidebox" onClick={toggleButtons}>View less diseases</button>
    </div>
  </div>
  </div>
  <div className='solution-video'> 
  <div class="ratio ratio-16x9"> 

  <iframe src="https://www.youtube.com/embed/N2KZ-XLq9zg" title="YouTube video player"  allowfullscreen></iframe>
</div>
</div>
  </div>
  </div>
      <div><Footer/></div>
    </div>
  )
}
