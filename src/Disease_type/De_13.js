import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './De_1.css'
import tub_img from './tub.jpg'
import { useSpeechSynthesis } from 'react-speech-kit';
import { Link } from 'react-router-dom'
export default function De_13() {

  const { speak,cancel } = useSpeechSynthesis();
  const text="First Aid Solution: Seek medical attention: If you suspect that you have TB, seek medical attention immediately. :Cover your mouth: Cover your mouth and nose with a tissue or a mask when coughing or sneezing to prevent the spread of TB bacteria to others. :Isolate yourself: If you have active TB, isolate yourself from others until your doctor determines that you are no longer contagious. :Take prescribed medications: Take prescribed medications as directed by your doctor for the entire length of treatment to ensure complete recovery and prevent the development of drug-resistant TB. :Follow a healthy lifestyle: Follow a healthy lifestyle that includes a balanced diet, regular exercise, and adequate rest to support your body's immune system.:Avoid smoking: Avoid smoking or exposure to secondhand smoke, as smoking weakens the lungs and increases the risk of complications from TB.";
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
    <h1 className='heading_de_tuberculosis'>Tuberculosis</h1>
   </div>
</div>
      <div className='container main_de_1'>
        <div className='main_symptoms'>
            <div className='main_symptoms_img'>
                <img className='main_symptoms_img_1' src={tub_img} alt="" />
            </div>
        </div>
        <div className='main_solution'>
        <h1 className='main_solution_h1'>First Aid Solution</h1>
      <ul className='main_solution_ul'>
                <li className='main_solution_li'>Seek medical attention: If you suspect that you have TB, seek medical attention immediately.
</li>
                <li className='main_solution_li'>
    Cover your mouth: Cover your mouth and nose with a tissue or a mask when coughing or sneezing to prevent the spread of TB bacteria to others.
</li>
                <li className='main_solution_li'>
    Isolate yourself: If you have active TB, isolate yourself from others until your doctor determines that you are no longer contagious.
</li>
                <li className='main_solution_li'>    Take prescribed medications: Take prescribed medications as directed by your doctor for the entire length of treatment to ensure complete recovery and prevent the development of drug-resistant TB.

</li>
                <li className='main_solution_li'>
    Follow a healthy lifestyle: Follow a healthy lifestyle that includes a balanced diet, regular exercise, and adequate rest to support your body's immune system</li>
                <li className='main_solution_li'>    Avoid smoking: Avoid smoking or exposure to secondhand smoke, as smoking weakens the lungs and increases the risk of complications from TB.
</li>
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
    <button class="design"><Link to="/de_10">Asthma</Link></button>
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

  <iframe src="https://www.youtube.com/embed/Nn-WlKtxSzU" title="YouTube video player"  allowfullscreen></iframe>
</div>
</div>
  </div>
  </div>
      <div><Footer/></div>
    </div>
  )
}
