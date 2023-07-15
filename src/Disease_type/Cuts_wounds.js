import React from 'react'
import { Link } from 'react-router-dom'
import './Cuts_wounds.css'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import abra_img from './abra.png'
import inci_img from './inci.png'
import ampu_img from './ampu.png'
import lace_img from './lace.png'
import pan_img from './pan.png'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
export default function Cuts_wounds() {
      const { speak,cancel } = useSpeechSynthesis();
      const { t } = useTranslation(); 
      const [lang, setLang] = useState('');
      const text="First Aid Solution: Clean the affected area with mild soap and warm water to remove any dirt. :Apply gentle pressure with a clean cloth or bandage to stop any bleeding. :Apply an antiseptic solution, such as hydrogen peroxide or iodine, to help prevent infection. :Cover the wound with a bandage to protect it from further injury and keep it clean. :Change the bandage regularly, at least once a day or more often if it becomes dirty or wet. :Monitor the wound for signs of infection, such as redness, swelling, or pus. :Seek medical attention if the abrasion is deep, large, or shows signs of infection, or if you are unsure how to properly care for the wound.";

      const text1="First Aid Solution:Clean the affected area with mild soap and warm water to remove any dirt. :Apply gentle pressure with a clean cloth or bandage to stop any bleeding. :Apply an antiseptic solution, such as hydrogen peroxide or iodine, to help prevent infection. :Cover the wound with a bandage to protect it from further injury and keep it clean. :Change the bandage regularly, at least once a day or more often if it becomes dirty or wet. :Monitor the wound for signs of infection, such as redness, swelling, or pus. :Seek medical attention if the abrasion is deep, large, or shows signs of infection, or if you are unsure how to properly care for the wound.";

      const text2="First Aid Solution: Apply ice to the affected area to help reduce swelling and pain. :Elevate the affected area above heart level, if possible, to further reduce swelling. :Rest the affected area and avoid any strenuous activity. :Apply a compression bandage to the affected area to help reduce swelling and provide support. :Monitor the contusion for signs of worsening or infection, such as increased pain, redness, or fever. :Seek medical attention if the contusion is severe, shows signs of infection, or if you are unsure how to properly care for the injury.";

      const text3="First Aid Solution: Apply pressure to the wound with a clean cloth or bandage to stop any bleeding. :Clean the wound with mild soap and warm water to remove any dirt or debris. :Apply an antiseptic solution, such as hydrogen peroxide or iodine, to help prevent infection. :Use bandage to cover the wound to protect it from further injury and keep it clean.Change the bandage regularly, at least once a day or more often if it becomes dirty or wet. :Monitor the laceration for signs of infection, such as redness, swelling, or pus. :Seek medical attention if the laceration is deep, large, or shows signs of infection, or if you are unsure how to properly care for the wound.";

      const text4="First Aid Solution: Clean the wound with mild soap and warm water to remove any dirt or debris. :Apply gentle pressure with a clean cloth or bandage to stop any bleeding. :Apply an antiseptic solution, such as hydrogen peroxide or iodine, to help prevent infection. :Use bandage to cover the wound to protect it from further injury and keep it clean. :Change the bandage regularly, at least once a day or more often if it becomes dirty or wet. :Seek medical attention if the puncture wound is deep, large, or shows signs of infection, Additionally, if the puncture wound is caused by a dirty or rusty object, it is important to take tetanus vaccination may be required.";

      const text5="First Aid Solution: Call for emergency medical assistance immediately. :If possible, elevate the injured area above the level of the heart to help reduce bleeding and swelling. :Apply direct pressure with a clean cloth or bandage to the wound to control bleeding. :Wrap the amputated body part in a clean, damp cloth and place it in a plastic bag. :Seal the bag and place it in a container with ice. :Do not directly apply ice to the amputated body part. :Keep the injured person calm and still, and monitor their breathing and vital signs. :Do not give the person anything to eat or drink. :Follow the instructions of the emergency medical responders when they arrive on the scene.";
  return (

    <div>
      <div><Navbar/></div>
      <div className="container">
      <h1 className='main_heading_cuts'>{t('cuts')}</h1>
      <div className='cut_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={abra_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">{t('abrasions')}</h2>
      <p className="bits_p">{t('abrasions_1')}</p>

                  <li>{t('abrasions_2')}</li>
      
      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>{t('covid_1')}</h2>

      <ul className='bits_solution'
      >
            <li>{t('abrasions1')}
</li>
            <li>{t('abrasions2')}
</li>
            <li>{t('abrasions3')}
</li>
            <li>{t('abrasions4')}
</li>
            <li>{t('abrasions5')}
</li>
            <li>{t('abrasions6')}
</li>
            <li>{t('abrasions7')}</li>
            <li> video solution : <Link className='youtube' to='https://youtu.be/B6-MTYnVQ7Q '>https://youtu.be/B6-MTYnVQ7Q</Link></li>
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
      <div className='cut_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={inci_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Incisions</h2>
      <p className="bits_p">Incisions are cuts made into the skin with a sharp object, such as a knife or scalpel. They are often made intentionally during surgical procedures, but can also be accidental.</p>

            <li>A basic example of an incision can be cutting oneself with a kitchen knife while chopping vegetables.</li>
      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>

      <ul className='bits_solution'>
            <li>Clean the affected area with mild soap and warm water to remove any dirt.
</li>
            <li>  Apply gentle pressure with a clean cloth or bandage to stop any bleeding.
</li>
            <li>    Apply an antiseptic solution, such as hydrogen peroxide or iodine, to help prevent infection.
</li>
            <li>    Cover the wound with a bandage to protect it from further injury and keep it clean.
</li>
            <li>    Change the bandage regularly, at least once a day or more often if it becomes dirty or wet.
</li>
            <li>    Monitor the wound for signs of infection, such as redness, swelling, or pus.
</li>
            <li>    Seek medical attention if the abrasion is deep, large, or shows signs of infection, or if you are unsure how to properly care for the wound.</li>
            <li> video solution : <Link className='youtube' to='https://youtu.be/B6-MTYnVQ7Q '>https://youtu.be/B6-MTYnVQ7Q</Link></li>
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
      <div className='cut_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={abra_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Contusions (bruises)</h2>
      <p className="bits_p">Contusions are bruises or injuries to the skin and underlying tissue caused by blunt force trauma, such as a punch or fall. They can result in pain, swelling, and discoloration of the affected area.</p>

             <li>A basic example of a contusion can be getting hit on the arm with a baseball, causing a bruise to form.</li>
      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>

      <ul className='bits_solution'>
            <li>Apply ice to the affected area to help reduce swelling and pain.
</li>
            <li>   Elevate the affected area above heart level, if possible, to further reduce swelling.
</li>
            <li>    Rest the affected area and avoid any strenuous activity.
</li>
            <li>    Apply a compression bandage to the affected area to help reduce swelling and provide support.
</li>
            <li>   Monitor the contusion for signs of worsening or infection, such as increased pain, redness, or fever.
</li>
            <li>    Seek medical attention if the contusion is severe, shows signs of infection, or if you are unsure how to properly care for the injury.</li>
            <li> video solution : <Link className='youtube' to='https://youtu.be/B6-MTYnVQ7Q '>https://youtu.be/B6-MTYnVQ7Q</Link></li>
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
      <div className='cut_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={lace_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Lacerations</h2>
      <p className="bits_p">Lacerations are cuts or tears in the skin caused by a sharp object or trauma. They can be superficial or deep, and may result in bleeding, pain, and scarring.</p>

            <li>A basic example of a laceration can be accidentally cutting oneself with a kitchen knife while preparing food, resulting in a deep cut on the finger.</li>
      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>

      <ul className='bits_solution'>
            <li>Apply pressure to the wound with a clean cloth or bandage to stop any bleeding.
</li>
            <li>    Clean the wound with mild soap and warm water to remove any dirt or debris.
</li>
            <li>    Apply an antiseptic solution, such as hydrogen peroxide or iodine, to help prevent infection.
</li>
            <li>    Use bandage to cover the wound to protect it from further injury and keep it clean.
</li>
            <li>    Change the bandage regularly, at least once a day or more often if it becomes dirty or wet.
</li>
            <li>    Monitor the laceration for signs of infection, such as redness, swelling, or pus.
</li>
            <li>    Seek medical attention if the laceration is deep, large, or shows signs of infection, or if you are unsure how to properly care for the wound.</li>
            <li> video solution : <Link className='youtube' to='https://youtu.be/B6-MTYnVQ7Q '>https://youtu.be/B6-MTYnVQ7Q</Link></li>
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
      <div className='cut_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={pan_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Puncture wounds</h2>
      <p className="bits_p">Puncture wounds are injuries caused by a pointed object, such as a nail, needle, or animal bite.</p>

            <li>A basic example of a puncture wound can be stepping on a rusty nail, causing it to pierce through the skin and into the foot.</li>
      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>

      <ul className='bits_solution'>
            <li>Clean the wound with mild soap and warm water to remove any dirt or debris.
</li>
            <li>    Apply gentle pressure with a clean cloth or bandage to stop any bleeding.
</li>
            <li>  Apply an antiseptic solution, such as hydrogen peroxide or iodine, to help prevent infection.
</li>
            <li>    Use bandage to cover the wound to protect it from further injury and keep it clean.
</li>
            <li>    Change the bandage regularly, at least once a day or more often if it becomes dirty or wet.
</li>
            <li> Seek medical attention if the puncture wound is deep, large, or shows signs of infection, Additionally, if the puncture wound is caused by a dirty or rusty object, it is important to take tetanus vaccination may be required.</li>
            <li> video solution : <Link className='youtube' to='https://youtu.be/B6-MTYnVQ7Q '>https://youtu.be/B6-MTYnVQ7Q</Link></li>
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
      <div className='cut_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={ampu_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Amputations</h2>
      <p className="bits_p">Amputations are the removal of a body part, such as a limb, finger, or toe, often due to trauma or medical necessity.</p>

            <li>A basic example of an amputation can be losing a finger while operating heavy machinery without proper safety precautions.</li>
      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>

      <ul className='bits_solution'>
            <li>Call for emergency medical assistance immediately.
</li>
            <li>    If possible, elevate the injured area above the level of the heart to help reduce bleeding and swelling.
</li>
            <li>    Apply direct pressure with a clean cloth or bandage to the wound to control bleeding.
</li>
            <li> Wrap the amputated body part in a clean, damp cloth and place it in a plastic bag. Seal the bag and place it in a container with ice. Do not directly apply ice to the amputated body part.
</li>
            <li>Keep the injured person calm and still, and monitor their breathing and vital signs.
</li>
            <li> Do not give the person anything to eat or drink.
</li>
            <li>  Follow the instructions of the emergency medical responders when they arrive on the scene.</li>
            <li> video solution : <Link className='youtube' to='https://youtu.be/B6-MTYnVQ7Q'>https://youtu.be/B6-MTYnVQ7Q</Link></li>
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
