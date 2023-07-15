import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './De_1.css'
import { Link } from 'react-router-dom'
import de_5_img from './De_5.jpg'
import { useSpeechSynthesis } from 'react-speech-kit';
export default function De_5() {
  const { speak,cancel } = useSpeechSynthesis();
  const text="First Aid Solution: Wear a mask: Wear a mask that covers your mouth and nose in public spaces. :Practice social distancing: Stay at least 6 feet (2 meters) away from others to reduce the risk of contracting or spreading the virus. :Wash your hands: Wash your hands frequently with soap and water for at least 20 seconds or use hand sanitizer with at least 60% alcohol to kill the virus. :Cover your coughs and sneezes: Use a tissue to cover your coughs and sneezes and dispose of it immediately. :If you don't have a tissue, cough or sneeze into your elbow. :Avoid touching your face: Avoid touching your face, especially your mouth, nose, and eyes, to prevent the spread of the virus. :Monitor your symptoms: Watch for symptoms such as fever, cough, and difficulty breathing.  :If you experience these symptoms, seek medical attention and self-isolate.";
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
    <h1 className='heading_de_covid'>COVID-19</h1>
   </div>
</div>
    <div className='container main_de_1'>
        <div className='main_symptoms'>
            <div className='main_symptoms_img'>
                <img className='main_symptoms_img_1' src={de_5_img} alt="" />
            </div>
        </div>
        <div className='main_solution'>
        <h1 className='main_solution_h1'>First Aid Solution</h1>
            <ul className='main_solution_ul'>
           
                <li className='main_solution_li'>Wear a mask: Wear a mask that covers your mouth and nose in public spaces.</li>
                <li className='main_solution_li'> Practice social distancing: Stay at least 6 feet (2 meters) away from others to reduce the risk of contracting or spreading the virus.</li>
                <li className='main_solution_li'>Wash your hands: Wash your hands frequently with soap and water for at least 20 seconds or use hand sanitizer with at least 60% alcohol to kill the virus.</li>
                <li className='main_solution_li'> Cover your coughs and sneezes: Use a tissue to cover your coughs and sneezes and dispose of it immediately. If you don't have a tissue, cough or sneeze into your elbow.</li>
                <li className='main_solution_li'> Avoid touching your face: Avoid touching your face, especially your mouth, nose, and eyes, to prevent the spread of the virus.</li>
                <li className='main_solution_li'>  Monitor your symptoms: Watch for symptoms such as fever, cough, and difficulty breathing. If you experience these symptoms, seek medical attention and self-isolate.</li>

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
    <button class="design"><Link to="/de_2"> Common Cold</Link></button>
    <button class="design"><Link to="/de_3">Malaria</Link></button>
  </div>
  <div class="sidebox">
    <button class="design"><Link to="/de_4">Cholera</Link></button>
    <button class="design"><Link to="/de_1">Fever</Link></button>
  </div>
  <div className='center-btn'>
  <button id="toggleButton" class="design sidebox" onClick={toggleButtons}>
    View more diseases
  </button>
  </div>
  <div id="buttonContainer" class="hidden ">
    <div class="sidebox">
      <button class="design"><Link to="/de_6">Conjunctivities</Link></button>
      <button class="design"><Link to="/de_7">Dengue</Link></button>
    </div>
    <div class="sidebox">
      <button class="design"><Link to="/de_8">Strep Throat</Link></button>
      <button class="design"><Link to="/de_9">Stomach Flu</Link></button>
    </div>
    <div className='center-btn'>
    <button class="design sidebox" onClick={toggleButtons}>View less diseases</button>
    </div>
  </div>
  </div>
  <div className='solution-video'> 
  <div class="ratio ratio-16x9"> 

  <iframe src="https://www.youtube.com/embed/PZhtgEAHAhY" title="YouTube video player"  allowfullscreen></iframe>
</div>
</div>
  </div>
  </div>
      <div><Footer/></div>
    </div>
  )
}
