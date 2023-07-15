import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import arm_img_1 from './arm.jpg'
import elbow_img from './elbow.jpg'
import fin_img from './fin.jpg'
import ankle_img from './ankle.jpg'
import cap_img from './cap.jpg'
import toes_img from './toes.jpg'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
export default function Bones_joint() {
      const { speak,cancel } = useSpeechSynthesis();
  const text="First Aid Solution: Tell the person to immobilise the affected arm by holding his arm close to his body untilhe obtains medical care. :If the person cannot support the arm, provide a sling with a triangular bandage orimprovise by turning up the lower end of the clothing and pining it above the arm toform a sling. :You might also immobilize the arm using a triangular bandage to support the wrist and arm. :Provide suitable padding between armand chest. :If the broken arm looks deformed or dislocated, do not try to reset it. :This might makethe injury worse and will cause pain. :Do not raise an injured arm to ensure that there is no further damage or increase inpain.";

  const text1="First Aid Solution: If the elbow can be bent, provide broad or narrow triangular bandage in figure of eight and strap the arm to the chest and support the forearm in a triangular sling. :Help the casualty to lie down:Place paddings under and between the elbow and the body to immobilise the elbow. :Strap the arm and forearm on the side of the body using three folded (narrow) triangular bandages. :Knots are tied on the opposite side of the body. :Transport the casualty to the nearest healthcare facility.";

  const text2="First Aid Solution: If there is a bleeding, stop the bleeding by direct pressure. :If possible, remove any rings, bangles etc. :before the hand begins to swell. :Protect and support the hand by soft padding. :Keep the hand in a suitable sling (cuff and collar). :Eventually, apply a splint to broken fingers. :Arrange transport to the nearest healthcare facility";

  const text3="First Aid Solution: Tell the injured person not to try to stand/move. :If the broken leg looks deformed or dislocated, do not try to reset it. :This might make the injury worse and will cause pain. :To transport the injured person, keep the leg still by bandaging or splinting one leg to the other non-broken/non-dislocated one. :Eventually you can apply a splint. :A splint is a rigid piece of wood, plastic or metal that is applied to the fractured limb to support it and to prevent further movement of the broken bone(s). :Ask the person to keep still. :Do not raise the injured leg as it may further worsen the injury and increase the pain";

  const text4="First Aid Solution: Help the person to lie down in the most comfortable position. :Do not attempt to straighten the knee forcibly. :Displaced cartilage or internal bleeding might make it impossible to straighten the knee joint. :Place a soft padding, like a pillow, under the knee to support it in the most comfortable position. :Apply a padded splint (if the first aider has sufficient technical knowledge to do so) under the limb from the buttocks to the heel. :The ankles should be raised from the splint by padding. :Fix the splint. :Transport the injured to the healthcare facility. :If possible, keep the injured limb a little raised, e.g. on a blanket";

  const text5="First Aid Solution: Help the person to sit down in the most comfortable position. :Raise the injured foot to reduce the blood flow. :If the casualty wear shoes and no wound is visible or expected, leave the shoes on. :If a wound is visible or expected,Apply an open triangular bandage to the injured foot.Use the other foot as a splint. :Tie both feet and legs together below the knee.";

      const { t } = useTranslation(); 
      const [lang, setLang] = useState('');
  return (
    <div>
      <div><Navbar/></div>
      <div className="container">
      <h1 className='main_heading_bonses'>{t('bones')}</h1>
      <div className='Bits_Stings_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={arm_img_1} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">{t('injuriesnew1')}</h2>
      <p className="bits_p">{t('injuriesnew2')}</p>

      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>{t('covid_1')}</h2>
            <ul className='bits_solution'>
               <li>{t('injuries1')}</li>
               <li>{t('injuries2')}</li>
               <li>{t('injuries3')}</li>
               <li>{t('injuries4')}</li>
               <li>{t('injuries5')}</li>
               <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text})
        }}>{t('speak')}</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text})
        }}>{t('stop')}</button>
        </div>
            </ul>
              
      </div>
      
      </div>
      <div className='Bits_Stings_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={elbow_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Injurious to The Elbow</h2>
      <p className="bits_p">Elbow injuries refer to any damage or trauma that occurs to the elbow joint, which connects the upper and lower arm bones. These injuries can result from overuse, sports activities, falls, or direct impact.</p>

      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
            <ul className='bits_solution'>
                  <li>If the elbow can be bent, provide broad or narrow triangular bandage in figure of
eight and strap the arm to the chest and support the forearm in a triangular sling.</li>
                  <li>Help the casualty to lie down.</li>
                  <li>Place paddings under and between the elbow and the body to immobilise the
elbow. </li>
                  <li>Strap the arm and forearm on the side of the body using three folded (narrow)
triangular bandages. Knots are tied on the opposite side of the body. </li>
                  <li>Transport the casualty to the nearest healthcare facility. </li>
                  <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text1})
        }}>Speak</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text1})
        }}>Stop</button>
        </div>
            </ul>
      </div>
      </div>
      <div className='Bits_Stings_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={fin_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Injuries To The Hands or Finger</h2>
      <p className="bits_p">Hand or finger injuries refer to any damage or trauma that occurs to the structures of the hand or fingers, including the bones, muscles, tendons, and nerves. These injuries can result from accidents, sports activities, repetitive motions, or medical conditions.</p>

      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
            <ul className='bits_solution'>
                  <li>If there is a bleeding, stop the bleeding by direct pressure.</li>
                  <li>If possible, remove any rings, bangles etc. before the hand begins to swell. </li>
                  <li>Protect and support the hand by soft padding</li>
                  <li>Keep the hand in a suitable sling (cuff and collar). 
</li>
                  <li>Eventually, apply a splint to broken fingers. </li>
                  <li>Arrange transport to the nearest healthcare facility</li>
                  <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text2})
        }}>Speak</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text2})
        }}>Stop</button>
        </div>
            </ul>
      </div>
      </div>
      <div className='Bits_Stings_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={ankle_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Injuries To The Leg or Broken Ankle</h2>
      <p className="bits_p">Leg or ankle injuries refer to any damage or trauma that occurs to the structures of the leg or ankle, including the bones, muscles, tendons, and ligaments. These injuries can result from sports activities, falls, accidents, or overuse.</p>

      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
           <ul className='bits_solution'>
            <li>Tell the injured person not to try to stand/move. 
</li>
            <li>If the broken leg looks deformed or dislocated, do not try to reset it. This might make
the injury worse and will cause pain. </li>
            <li>To transport the injured person, keep the leg still by bandaging or splinting one leg to
the other non-broken/non-dislocated one. </li>
            <li>Eventually you can apply a splint.A splint is a rigid piece of wood, plastic or metal that is applied to the
fractured limb to support it and to prevent further movement of the broken
bone(s). </li>
            <li>Ask the person to keep still.</li>
            <li>Do not raise the injured leg as it may further worsen the injury and increase the pain</li>
            <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text3})
        }}>Speak</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text3})
        }}>Stop</button>
        </div>
           </ul>
      </div>
      </div>
      <div className='Bits_Stings_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={cap_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Injurious To The Knee or Cap</h2>
      <p className="bits_p">Knee cap injuries refer to any damage or trauma that occurs to the patella or kneecap, which is a bone that covers the knee joint. These injuries can result from direct impact, overuse, or degenerative conditions.</p>

      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
            <ul className='bits_solution'>
                  <li>Help the person to lie down in the most comfortable position. 
</li>
                  <li>Do not attempt to straighten the knee forcibly. Displaced cartilage or internal
bleeding might make it impossible to straighten the knee joint. </li>
                  <li>Place a soft padding, like a pillow, under the knee to support it in the most
comfortable position. </li>
                  <li>Apply a padded splint (if the first aider has sufficient technical knowledge to do so)
under the limb from the buttocks to the heel. The ankles should be raised from the
splint by padding</li>
                  <li>Fix the splint</li>
                  <li>Transport the injured to the healthcare facility.</li>
                  <li>If possible, keep the injured limb a little raised, e.g. on a blanket</li>
                  <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text4})
        }}>Speak</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text4})
        }}>Stop</button>
        </div>
            </ul>
      </div>
      </div>
      <div className='Bits_Stings_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={toes_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Broken Foot or Toes</h2>
      <p className="bits_p">Foot or toe injuries refer to any damage or trauma that occurs to the structures of the foot or toes, including the bones, muscles, tendons, and ligaments. These injuries can result from accidents, sports activities, overuse, or medical conditions.</p>

      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
            <ul className='bits_solution'>
                  <li>Help the person to sit down in the most comfortable position. </li>
                  <li>Raise the injured foot to reduce the blood flow. </li>
                  <li>If the casualty wear shoes and no wound is visible or expected, leave the shoes on. </li>
                  <li>If a wound is visible or expected,</li>
                  <li>Apply an open triangular bandage to the injured foot.</li>
                  <li>Use the other foot as a splint. Tie both feet and legs together below the knee using
figure of 8. </li>
<div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text5})
        }}>Speak</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text5})
        }}>Stop</button>
        </div>
            </ul>
      </div>
      </div>
      
      </div>
      <div><Footer/></div>
    </div>
  )
}
