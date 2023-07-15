import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './De_1.css'
import pne_img from './pne.jpg'
import { useSpeechSynthesis } from 'react-speech-kit';
import { Link } from 'react-router-dom'
export default function De_12() {

  const { speak,cancel } = useSpeechSynthesis();
  const text="First Aid Solution: Seek medical attention: If you suspect that you have pneumonia, seek medical attention immediately. :Get plenty of rest: Rest and avoid overexertion to allow your body to recover from the infection. :Stay hydrated: Drink plenty of fluids such as water, herbal teas, or oral rehydration solution (ORS) to prevent dehydration. :Use pain relievers: Use pain relievers such as acetaminophen to alleviate fever and chest pain. :Follow your doctor's instructions for dosing. :Use a humidifier: Use a humidifier to add moisture to the air and help ease breathing. :Take prescribed medications: Take prescribed medications such as antibiotics, antiviral medications, or bronchodilators as directed by your doctor to treat the infection and relieve symptoms. :Follow up with your doctor to ensure complete recovery.";
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
    <h1 className='heading_de_pneumonia'>Pneumonia</h1>
   </div>
</div>
      <div className='container main_de_1'>
        <div className='main_symptoms'>
            <div className='main_symptoms_img'>
                <img className='main_symptoms_img_1' src={pne_img} alt="" />
            </div>
        </div>
        <div className='main_solution'>
        <h1 className='main_solution_h1'>First Aid Solution</h1>
      <ul className='main_solution_ul'>
                <li className='main_solution_li'>Seek medical attention: If you suspect that you have pneumonia, seek medical attention immediately.
</li>
                <li className='main_solution_li'>
Get plenty of rest: Rest and avoid overexertion to allow your body to recover from the infection.
</li>
                <li className='main_solution_li'>Stay hydrated: Drink plenty of fluids such as water, herbal teas, or oral rehydration solution (ORS) to prevent dehydration.
</li>
                <li className='main_solution_li'>
Use pain relievers: Use pain relievers such as acetaminophen to alleviate fever and chest pain. Follow your doctor's instructions for dosing.
</li>
                <li className='main_solution_li'>
Use a humidifier: Use a humidifier to add moisture to the air and help ease breathing.
</li>
                <li className='main_solution_li'>Take prescribed medications: Take prescribed medications such as antibiotics, antiviral medications, or bronchodilators as directed by your doctor to treat the infection and relieve symptoms. Follow up with your doctor to ensure complete recovery.</li>
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
    <button class="design"><Link to="/de_10">Asthma</Link></button>
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

  <iframe src="https://www.youtube.com/embed/M7CLcptDZxs" title="YouTube video player"  allowfullscreen></iframe>
</div>
</div>
  </div>
  </div>
    <div><Footer/></div>
    </div>
  )
}
