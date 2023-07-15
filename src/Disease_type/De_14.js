import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './De_1.css'
import swi_img from './swi.jpg'
import { useSpeechSynthesis } from 'react-speech-kit';
import { Link } from 'react-router-dom'
export default function De_14() {
  const { speak,cancel } = useSpeechSynthesis();
  const text="First Aid Solution: Seek medical attention: If you are experiencing swelling of the throat, seek medical attention immediately. :This is especially important if you are having difficulty breathing or swallowing: Stay calm: Stay calm and try not to panic. :This can help reduce anxiety and make it easier to breathe. :Drink water: Drink plenty of water to keep your throat moist and help reduce inflammation. :Use a cool compress: Use a cool compress or ice pack wrapped in a cloth to reduce swelling and relieve painDo gargle. :Use throat lozenges or gargle with salt water to soothe the throat and reduce inflammation. :Avoid irritants: Avoid irritants such as smoke, pollution, and allergens that can worsen throat swelling. :If you have allergies, take your prescribed medication to prevent symptoms.";
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
    <h1 className='heading_de_swelling'>Swelling</h1>
   </div>
</div>
      <div className='container main_de_1'>
        <div className='main_symptoms'>
            <div className='main_symptoms_img'>
                <img className='main_symptoms_img_1' src={swi_img} alt="" />
            </div>
        </div>
        <div className='main_solution'>
        <h1 className='main_solution_h1'>First Aid Solution</h1>
        <ul className='main_solution_ul'>
                <li className='main_solution_li'>Seek medical attention: If you are experiencing swelling of the throat, seek medical attention immediately. This is especially important if you are having difficulty breathing or swallowing.
</li>
                <li className='main_solution_li'>    Stay calm: Stay calm and try not to panic. This can help reduce anxiety and make it easier to breathe.
</li>
                <li className='main_solution_li'>    Drink water: Drink plenty of water to keep your throat moist and help reduce inflammation.
</li>
                <li className='main_solution_li'> Use a cool compress: Use a cool compress or ice pack wrapped in a cloth to reduce swelling and relieve pain.
</li>
                <li className='main_solution_li'>
    Do gargle: Use throat lozenges or gargle with salt water to soothe the throat and reduce inflammation.
</li>
                <li className='main_solution_li'>    Avoid irritants: Avoid irritants such as smoke, pollution, and allergens that can worsen throat swelling. If you have allergies, take your prescribed medication to prevent symptoms.</li>
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
    <button class="design"><Link to="/de_10">Asthma</Link></button> 
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

  <iframe src="https://www.youtube.com/embed/KJCu3o4U3eQ" title="YouTube video player"  allowfullscreen></iframe>
</div>
</div>
  </div>
  </div>
      <div><Footer/></div>
    </div>
  )
}
