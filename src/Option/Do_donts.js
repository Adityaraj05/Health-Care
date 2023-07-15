import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import mm from './air.jpg'
import nn from './cir.jpg'
import hh from './flood.jpg'
import tt from './thu.jpg'
import ff from './fire.jpg'
import ll from './land.jpg'
import './Dos_donts.css'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';


export default function Do_donts() {
  const { t } = useTranslation(); 
  const [lang, setLang] = useState('');
  const { speak,cancel } = useSpeechSynthesis();
  const text ="Earthquakes : An earthquake is a shaking of the earth's surface caused by the movement of rocks beneath the ground. :Earthquakes can be very strong and cause damage to buildings, roads, and other structures. :Earthquakes happen all over the world, and people can take steps to prepare for them and stay safe during them.";

  const text1="Cyclone: A cyclone is a type of natural disaster that occurs when there is a low-pressure system in the atmosphere, causing strong winds and heavy rainfall. :Cyclones can cause significant damage to buildings, homes, and other structures, as well as cause flooding and landslides.";

  const text2="Floods : Floods are a type of natural disaster that occur when water covers land that is usually dry, often caused by heavy rainfall, melting snow, or coastal storms. :Floods can cause significant damage to homes, buildings, and infrastructure, as well as cause landslides and lead to loss of life.";

  const text3="Landslide : A landslide is a natural disaster that occurs when rocks, soil, and other debris move downhill due to the force of gravity. :Landslides can be triggered by heavy rainfall, earthquakes, volcanic eruptions, or human activities such as construction or deforestation. :Landslides can cause significant damage to homes, buildings, and infrastructure, as well as lead to loss of life.";

  const text4="Tsunami : A tsunami is a powerful ocean wave that is typically caused by an underwater earthquake or volcanic eruption. :Tsunamis can travel across entire oceans and reach coastal areas with little warning, causing significant damage and loss of life. :People can take steps to prepare, staying informed about weather and following evacuation orders from authorities.";

  const text5="Fire : Fire is a natural disaster that occurs when a material undergoes combustion, releasing heat, light, and various gases. :Fires can be caused by a variety of factors, such as lightning strikes, human activities, or natural volcanic eruptions. :Fires can cause significant damage to property and natural resources, as well as pose a threat to human life and safety.";

  return (
    <div>
    <div><Navbar/></div>
    <div className="container mt-5 mb-5 earthquake_main "  >
      <div className='earthquake_main_1'>
        <img src={mm} className='earthquake_img' alt="" />
      </div>
      <div className='earthquake_content' >
        <p className='earthquake_content_p' >
         <ul>
         <h1>{t('earthquakes')}</h1>
          <li className="word">{t('earthquakes1')}</li>
          <li className="word">{t('earthquakes2')}</li>
          <li className="word">{t('earthquakes3')}</li>
         </ul>
         
        </p>
        <div>
        <Link to="/Earthquakes" className='dobtn'>{t('earthquakes_1')}</Link>
        
        </div>
        <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text})
        }}>{t('speak')}</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text})
        }}>{t('stop')}</button>
        </div>
      </div>
    </div>
    <div className="container cyclone_main" >
      <div className='cyclone_main_1'>
        <img src={tt} className='cyclone_img' alt="" />
      </div>
      <div className='cyclone_content'>
        <p className='cyclone_content_p' >
         <ul>
         <h1>Cyclone</h1>
          <li className="word">A cyclone is a type of natural disaster that occurs when there is a low-pressure system in the atmosphere, causing strong winds and heavy rainfall.</li>
          <li className="word"> Cyclones can cause significant damage to buildings, homes, and other structures, as well as cause flooding and landslides.</li>
         </ul>
        </p>
       
        <div>
        <Link to="/Cyclone" className='dobtn'>Do`s & Don`ts</Link>
        </div>
        <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text1})
        }}>Speak</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text1})
        }}>Stop</button>
        </div>

      </div>
    </div>
    <div className="container mt-5 mb-5 floods_main" >
      <div className='floods_main_1'>
        <img src={hh} className='floods_img' alt="" />
      </div>
      <div className='floods_content'>
        <p className='floods_content_p' >
         <ul>
         <h1>Floods</h1>
          <li className="word">Floods are a type of natural disaster that occur when water covers land that is usually dry, often caused by heavy rainfall, melting snow, or coastal storms.</li>
          <li className="word">Floods can cause significant damage to homes, buildings, and infrastructure, as well as cause landslides and lead to loss of life.</li>
          
         </ul>
        </p>
        <div>
        <Link to="/Floods" className='dobtn'>Do`s & Don`ts</Link>
        </div>
        <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text2})
        }}>Speak</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text2})
        }}>Stop</button>
        </div>
      </div>
    </div>
    <div className="container landslide_main " >
      <div className='landslide_main_1'>
        <img src={ll} className='landslide_img' alt="" />
      </div>
      <div className='landslide_content' >
        <p className='landslide_content_p' >
         <ul>
         <h1>Landslide</h1>
          <li className="word">A landslide is a natural disaster that occurs when rocks, soil, and other debris move downhill due to the force of gravity.</li>
          <li className="word">Landslides can be triggered by heavy rainfall, earthquakes, volcanic eruptions, or human activities such as construction or deforestation.</li>
          <li className="word">Landslides can cause significant damage to homes, buildings, and infrastructure, as well as lead to loss of life.</li>
         </ul>
        </p>
        
        <div>
        <Link to="/Landslide" className='dobtn'>Do`s & Don`ts</Link>
        </div>
        <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text3})
        }}>Speak</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text3})
        }}>Stop</button>
        </div>
      </div>
    </div>
    <div className="container mt-5 mb-5 tsunami_main"  >
      <div className='tsunami_main_1'>
        <img src={nn} className='tsunami_img' alt="" />
      </div>
      <div className='tsunami_content' >
        <p className='tsunami_content_p' >
         <ul>
         <h1>Tsunami</h1>
          <li className="word">A tsunami is a powerful ocean wave that is typically caused by an underwater earthquake or volcanic eruption.</li>
          <li className="word">Tsunamis can travel across entire oceans and reach coastal areas with little warning, causing significant damage and loss of life.</li>
          <li className="word">People can take steps to prepare, staying informed about weather and following evacuation orders from authorities.</li>
         </ul>
        </p>
        
        <div>
        <Link to="/Tsunami" className='dobtn'>Do`s & Don`ts</Link>
        </div>
        <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text4})
        }}>Speak</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text4})
        }}>Stop</button>
        </div>
      </div>
    </div>
    <div className="container fire_main" >
      <div className='fire_main_1'>
        <img src={ff} className='fire_img' alt="" />
      </div>
      <div className='fire_content'>
        <p className='fire_content_p' >

         <ul>
         <h1>Fire</h1>
          <li className="word">Fire is a natural disaster that occurs when a material undergoes combustion, releasing heat, light, and various gases.</li>
          <li className="word">Fires can be caused by a variety of factors, such as lightning strikes, human activities, or natural volcanic eruptions.</li>
          <li className="word">Fires can cause significant damage to property and natural resources, as well as pose a threat to human life and safety.</li>
         </ul>
        </p>
        <div>
        <Link to="/Fire" className='dobtn'>Do`s & Don`ts</Link>
        </div>
        <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text5})
        }}>Speak</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text5})
        }}>Stop</button>
        </div>
      </div>
    </div>
      <div><Footer/></div>
    </div>
  )
}
