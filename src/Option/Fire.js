import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './Fire.css'
import { useSpeechSynthesis } from 'react-speech-kit';
import { Link } from 'react-router-dom';
export default function Fire() {
  const { speak,cancel } = useSpeechSynthesis();
  const text = " DO'S: Call the fire department or emergency services as soon as possible. :If you can safely do so, try to extinguish small fires using a fire extinguisher or water. :Stay low to the ground to avoid smoke and heat. :Follow the evacuation procedures and emergency routes. :Have an emergency kit prepared with essentials like food, water, and first-aid supplies.";
  const text1="DONT'S: Don't attempt to put out a large or uncontrollable fire. :Don't use an elevator during a fire. :Don't touch doorknobs or metal surfaces that may be hot. :Don't return to the building until authorities have confirmed that it is safe to do so. :Don't panic, and remain calm and focused.";
  return (
    <div>
   <div><Navbar/></div>
      <div className='container' style={{width:"100%"}}> 
      <section className='fire'><h1 className='fire_header'>FIRE</h1></section>
      </div>
      <div className='main_fire container' >
        <div className='main_fire_1' >
        <div className='main_fire_2' >
              <div >
                <h1 className='main_fire_heading' >DO'S</h1>
              </div>
        </div>
        <div className='main_fire_content'>
        <ul className='main_fire_content_1'>
          <li>Call the fire department or emergency services as soon as possible.</li>
          <li>If you can safely do so, try to extinguish small fires using a fire extinguisher or water.</li>
          <li>Stay low to the ground to avoid smoke and heat.</li>
          <li>Follow the evacuation procedures and emergency routes.</li>
          <li>Have an emergency kit prepared with essentials like food, water, and first-aid supplies.</li>
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
        </div>
        <div className='dont_fire_main' >
        <div className='dont_fire_main_1' >
    <div >
        <h1 className='dont_fire_heading' >DON'TS</h1>
    </div>
    </div>
    <div className='dont_fire_main_content' >
        <ul className='dont_fire_main_list'>
          <li>Don't attempt to put out a large or uncontrollable fire.</li>
          <li> Don't use an elevator during a fire.</li>
          <li> Don't touch doorknobs or metal surfaces that may be hot.</li>
          <li>Don't return to the building until authorities have confirmed that it is safe to do so.</li>
          <li> Don't panic, and remain calm and focused.</li>
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
        </div>
      </div>
      <div className='container'>
    <div className='disaster-2'>
    <div className='check-other-disaster'>
    <h2>
          View other natural disasters
        </h2>
      <div className='button_group'>
        
        <Link to='/Earthquakes'>
        <button  className='place-box'>
        Earthquakes
          </button>
          </Link>
          <Link to='/Floods'>
        <button  className='place-box'>
          floods
        </button>
        </Link>
        </div>

        <div className='button_group'>
        
        <Link to='/Landslide'>
        <button  className='place-box'>
          landslide
          </button>
          </Link>
          <Link to='/Tsunami'>
        <button  className='place-box'>
          tsunami
        </button>
        </Link>
        </div>

        <div className='button_group'>
        
        <Link to='/Cyclone'>
        <button  className='place-box'>
          Cyclone
          </button>
          </Link>
        </div>
    
    </div>
    <div className='disaster-solution-video'> 
    <div class="ratio ratio-16x9"> 
  <iframe src="https://www.youtube.com/embed/7uBzsjIWPlA" title="YouTube video player"  allowfullscreen></iframe>
</div>
</div>
</div>
    </div>
      <div><Footer/></div>
    </div>
  )
}
