import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './Tsunami.css'
import { useSpeechSynthesis } from 'react-speech-kit';
import { Link } from 'react-router-dom';
export default function Tsunami() {
  const { speak,cancel } = useSpeechSynthesis();
  const text = " DO'S: Move to higher ground or inland as quickly as possible. :Follow evacuation notices and instructions from local authorities. :Have an emergency kit prepared with essentials like food, water, and first-aid supplies. :Stay away from beaches, harbors, and other low-lying areas. :Listen to local news or weather reports for updates and further instructions."

  const text1="DONT'S: Don't return to low-lying areas until authorities have confirmed that it is safe to do so. :Don't touch downed power lines or electrical equipment if you are standing in water. :Don't go to the coast to observe the tsunami, as it can be extremely dangerous. :Don't try to drive through floodwaters, as they can be deeper and stronger than they appear. :Don't drink or use contaminated water.";
  return (
    <div>
    <div><Navbar/></div>
     
      <div className='container' style={{width:"100%"}}> 
      <section className='tsunami'><h1 className='tsunami_header'>TSUNAMI</h1></section>
      </div>
      <div className='main_tsunami container' >
        <div className='main_tsunami_1'>
        <div className='main_tsunami_2' >
              <div >
                <h1 className='main_tsunami_heading'>DO'S</h1>
              </div>
        </div>
        <div className='main_tsunami_content'>
        <ul className='main_tsunami_content_1' >
          <li>Move to higher ground or inland as quickly as possible.</li>
          <li>Follow evacuation notices and instructions from local authorities.</li>
          <li>Have an emergency kit prepared with essentials like food, water, and first-aid supplies.</li>
          <li>Stay away from beaches, harbors, and other low-lying areas.</li>
          <li>Listen to local news or weather reports for updates and further instructions.</li>
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
        <div className='dont_tsunami_main'>
        <div className='dont_tsunami_main_1'>
    <div >
        <h1 className='dont_tsunami_heading' >DON'TS</h1>
    </div>
    </div>
    <div className='dont_tsunami_main_content' >
        <ul className='dont_tsunami_main_list' >
          <li>Don't return to low-lying areas until authorities have confirmed that it is safe to do so.</li>
          <li>Don't touch downed power lines or electrical equipment if you are standing in water.</li>
          <li>Don't go to the coast to observe the tsunami, as it can be extremely dangerous.</li>
          <li>Don't try to drive through floodwaters, as they can be deeper and stronger than they appear.</li>
          <li>Don't drink or use contaminated water.</li>
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
          <Link to='/Cyclone'>
        <button  className='place-box'>
          Cyclone
        </button>
        </Link>
        </div>

        <div className='button_group'>
        
        <Link to='/Fire'>
        <button  className='place-box'>
          fire
          </button>
          </Link>
        </div>
    
    </div>
    <div className='disaster-solution-video'> 
    <div class="ratio ratio-16x9"> 
  <iframe src="https://www.youtube.com/embed/1t72e9hlIyY" title="YouTube video player"  allowfullscreen></iframe>
</div>
</div>
</div>
    </div>
      <div><Footer/></div>
    </div>
  )
}
