import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './De_1.css'
import choking_img from './choking.jpg'
import { useSpeechSynthesis } from 'react-speech-kit';
import { Link } from 'react-router-dom'
export default function De_11() {

  const { speak,cancel } = useSpeechSynthesis();
  const text="First Aid Solution: Perform the Heimlich maneuver: The Heimlich maneuver is a technique that can be used to dislodge an object from the airway. :Stand behind the person and wrap your arms around their waist. :Make a fist with one hand and place it just above their belly button. :Grasp your fist with your other hand and pull inward and upward with quick, forceful thrusts until the object is dislodged. :Call for help: Call for emergency medical help immediately if the person is unable to breathe or cough, or if they turn blue. :Encourage coughing: If the person is coughing, encourage them to continue coughing to try and dislodge the object. :Stay with the person: Stay with the person until medical help arrives. :Monitor their breathing and be prepared to perform CPR if necessary.";
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
    <h1 className='heading_de_choking'>Choking</h1>
   </div>
</div>
      <div className='container main_de_1'>
        <div className='main_symptoms'>
            <div className='main_symptoms_img'>
                <img className='main_symptoms_img_1' src={choking_img} alt="" />
            </div>
        </div>
        <div className='main_solution'>
        <h1 className='main_solution_h1'>First Aid Solution</h1>
      <ul className='main_solution_ul'>
                <li className='main_solution_li'>Perform the Heimlich maneuver: The Heimlich maneuver is a technique that can be used to dislodge an object from the airway. Stand behind the person and wrap your arms around their waist. Make a fist with one hand and place it just above their belly button. Grasp your fist with your other hand and pull inward and upward with quick, forceful thrusts until the object is dislodged.
</li>
                <li className='main_solution_li'>Call for help: Call for emergency medical help immediately if the person is unable to breathe or cough, or if they turn blue.
</li>
                <li className='main_solution_li'>Encourage coughing: If the person is coughing, encourage them to continue coughing to try and dislodge the object.
</li>
                <li className='main_solution_li'>Stay with the person: Stay with the person until medical help arrives. Monitor their breathing and be prepared to perform CPR if necessary.</li>
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
    <button class="design"><Link to="/de_10">Asthma</Link></button>
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
      <button class="design"><Link to="/de_15">Drowning</Link></button>
    </div>
    <div className='center-btn'>
    <button class="design sidebox" onClick={toggleButtons}>View less diseases</button>
    </div>
  </div>
  </div>
  <div className='solution-video'> 
  <div class="ratio ratio-16x9"> 

  <iframe src="https://www.youtube.com/embed/YlW_hDz87xc" title="YouTube video player"  allowfullscreen></iframe>
</div>
</div>
  </div>
  </div>
    <div><Footer/></div>
    </div>
  )
}
