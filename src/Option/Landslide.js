import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './Landslide.css'
import { Link } from 'react-router-dom'
import { useSpeechSynthesis } from 'react-speech-kit';
export default function Landslide() {
  const { speak,cancel } = useSpeechSynthesis();
  const text = " DO'S: Move away from the area of the landslide as quickly as possible. :Follow evacuation notices and instructions from local authorities. :Have an emergency kit prepared with essentials like food, water, and first-aid supplies. :Listen to local news or weather reports for updates and further instructions. :Stay away from steep slopes and unstable terrain."

  const text1="DONT'S: Don't try to outrun a landslide or stay in the path of the debris. :Don't touch downed power lines or electrical equipment if you are standing in water. :Don't return to the affected area until authorities have confirmed that it is safe to do so. :Don't use water from wells or other sources that may have been contaminated by the landslide. :Don't spread rumors or panic.";
  return (
    <div>
    <div><Navbar/></div>
    <div className='container' style={{width:"100%"}}> 
      <section className='landslide'><h1 className='landslide_header'>LANDSLIDE</h1></section>
      </div>
      <div className='container main_landslide'>
        <div className='main_landslide_1' >
        <div className='main_landslide_2'  >
              <div >
                <h1 className='main_landslide_heading'>DO'S</h1>
              </div>
        </div>
        <div className='main_landslide_content'>
        <ul className='main_landslide_content_1'>
          <li>Move away from the area of the landslide as quickly as possible.</li>
          <li>Follow evacuation notices and instructions from local authorities.</li>
          <li>Have an emergency kit prepared with essentials like food, water, and first-aid supplies.</li>
          <li>Listen to local news or weather reports for updates and further instructions.</li>
          <li>Stay away from steep slopes and unstable terrain.</li>
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
        <div className='dont_landslide_main' >
        <div className='dont_landslide_main_1'>
    <div >
        <h1 className='dont_landslide_heading'>DON'TS</h1>
    </div>
    </div>
    <div className='dont_landslide_main_content' >
        <ul className='dont_landslide_main_list'>
          <li>Don't try to outrun a landslide or stay in the path of the debris.</li>
          <li> Don't touch downed power lines or electrical equipment if you are standing in water.</li>
          <li>Don't return to the affected area until authorities have confirmed that it is safe to do so.</li>
          <li>Don't use water from wells or other sources that may have been contaminated by the landslide.</li>
          <li>Don't spread rumors or panic.</li>
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
        
        <Link to='/Cyclone'>
        <button  className='place-box'>
          Cyclone
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
  <iframe src="https://www.youtube.com/embed/0DYeyrYAh40" title="YouTube video player"  allowfullscreen></iframe>
</div>
</div>
</div>
    </div>
      <div><Footer/></div>
    </div>
  )
}
