import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './Floods.css'
import { Link } from 'react-router-dom'
import { useSpeechSynthesis } from 'react-speech-kit';
export default function Floods() {
  const { speak,cancel } = useSpeechSynthesis();
  const text = " DO'S: Move to higher ground or an elevated area if possible. :Listen to local news or weather reports for updates and evacuation notices. :Have an emergency kit prepared with essentials like food, water, and first-aid supplies. :Turn off all electrical appliances and gas supply before evacuating. :Follow the instructions of emergency personnel and authorities."

  const text1= "DONT'S: Don't try to drive or walk through floodwaters, as they can be deeper and stronger than they appear. :Don't touch electrical equipment or appliances if you are standing in water. :Don't stay in low-lying areas or near bodies of water during a flood. :Don't drink floodwater, as it can be contaminated with bacteria and other harmful substances. :Don't return home until authorities have confirmed that it is safe to do so.";
  return (
    // this is main div
    <div>
    <div><Navbar/></div>
    <div className='container' style={{width:"100%"}}> 
      <section className='Floods'><h1 className='Floods_header'>FLOODS</h1></section>
      </div>
      <div className='container main_flood'>
        <div className='main_flood_1' >
        <div className='main_flood_2' >
        
              <div >
                <h1 className='main_flood_heading' >DO'S</h1>
              </div>
        </div>
        <div className='main_flood_content' >
        <ul className='main_flood_content_1'>
          <li>Move to higher ground or an elevated area if possible.</li>
          <li>Listen to local news or weather reports for updates and evacuation notices.</li>
          <li>Have an emergency kit prepared with essentials like food, water, and first-aid supplies.</li>
          <li>Turn off all electrical appliances and gas supply before evacuating.</li>
          <li>Follow the instructions of emergency personnel and authorities.</li>
        </ul>
        <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text})
        }}>Speak</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text1})
        }}>Stop</button>
        </div>
        </div>
        </div>
        <div className='dont_flood_main' >
        <div className='dont_flood_main_1'>
    <div >
        <h1 className='dont_flood_heading' >DON'TS</h1>
    </div>
    </div>
    <div className='dont_flood_main_content'>
        <ul className='dont_flood_main_list' >
          <li>Don't try to drive or walk through floodwaters, as they can be deeper and stronger than they appear.</li>
          <li>Don't touch electrical equipment or appliances if you are standing in water.</li>
          <li>Don't stay in low-lying areas or near bodies of water during a flood.</li>
          <li> Don't drink floodwater, as it can be contaminated with bacteria and other harmful substances.</li>
          <li>Don't return home until authorities have confirmed that it is safe to do so.</li>
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
          <Link to='/Cyclone'>
        <button  className='place-box'>
          Cyclone
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
        
        <Link to='/Fire'>
        <button  className='place-box'>
          fire
          </button>
          </Link>
        </div>
    
    </div>
    <div className='disaster-solution-video'> 
    <div class="ratio ratio-16x9"> 
  <iframe src="https://www.youtube.com/embed/Pk9KJ17O32U" title="YouTube video player"  allowfullscreen></iframe>
</div>
</div>
</div>
    </div>
      <div><Footer/></div>
    </div>
   
   
  )
}
