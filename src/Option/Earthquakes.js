import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './Earthquakes.css'
import { useSpeechSynthesis } from 'react-speech-kit';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Earthquakes() {
  const { t } = useTranslation(); 
  const [lang, setLang] = useState('');
  const { speak,cancel } = useSpeechSynthesis();
  const text = "Indoor : Stay calm and take cover under a sturdy desk or table, or against an interior wall away from windows.  :Hold onto your cover and protect your head and neck. :Stay inside until the shaking stops and it is safe to exit the building. :Outdoor:Move to an open area away from trees, buildings, or power lines. :Protect your head and neck with your arms :Stay in the open until the shaking stops.";

  const text1 = "Indoor.:Don't use elevators during an earthquake. :Don't stand near windows or exterior walls. :Don't try to leave the building until the shaking stops. :Outdoor. :Don't try to enter a building during an earthquake. :Don't stand near buildings, trees, or power lines. :Don't drive your car during an earthquake, unless it is absolutely necessary";
  return (
    <div>
    <div><Navbar/></div>
    <section className='earthquake container'><h1 className='do_dont_header'>{t('earthquakes')}</h1></section>
    <div className='container earthquakes_main'>
    <div className='dos_earthquake'>
        <div className='dos_main' >
              <div >
                <h1 className='dos'>{t('do')}</h1>
              </div>
        </div>
        <div className='mt-3 dos_content_main'>
           <div className='indoor_main'>
              <h2 className='indoor_header'>{t('indoor')}</h2>
              <ul className='indoor_content'>
              <li>{t('indoor1')}</li>
                <li>{t('indoor2')}</li>
                <li>{t('indoor3')}</li>
              </ul>
              <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text})
        }}>{t('speak')}</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text})
        }}>{t('stop')}</button>
        </div>
           </div>
           <div className='mt-3 outdoor_main'>
              <h2 className='outdoor_header'>{t('outdoor')}</h2>
              <ul className='outdoor_content'>
              <li>{t('outdoor1')}
</li>
                <li>{t('outdoor2')}
</li>
                <li>{t('outdoor3')}
</li>
              </ul>
           </div>
        </div>
    </div>
    <div className='dos_earthquake_1'>
    <div className='dos_main_1'>
    <div >
        <h1 className='dont_header_1'>{t('dont')}</h1>
    </div>
    </div>
    <div className='mt-4 dont_content_main_1' >
    <div className='indoor_main_1'>
         <h2 className='indoor_header_1'>{t('indoor')}</h2>
         <ul className='indoor_content_1'>
         <li>{t('indoor_1')}

</li>
            <li>{t('indoor_2')}
</li>
            <li>{t('indoor_3')} 
</li>
         </ul>
         
         <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text1})
        }}>{t('speak')}</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text1})
        }}>{t('stop')}</button>
        </div>
</div>
<div className='mt-2 outdoor_main_1'>
         <h2 className='outdoor_header_1'>{t('outdoor')}</h2>
         <ul className='outdoor_content_1'>
         <li>{t('outdoor_1')}
</li>
            <li>{t('outdoor_2')}
</li>
            <li>{t('outdoor_3')} </li>
         </ul>
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
        
        <Link to='/Cyclone'>
        <button  className='place-box'>
        Cyclone
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
        
        <Link to='/Fire'>
        <button  className='place-box'>
          fire
          </button>
          </Link>
        </div>
    
    </div>
    <div className='disaster-solution-video'> 
    <div class="ratio ratio-16x9"> 
  <iframe src="https://www.youtube.com/embed/Q4P7ivNdGuc" title="YouTube video player"  allowfullscreen></iframe>
</div>
</div>
</div>
    </div>
      <div><Footer/></div>
    </div>
  )
}


      
