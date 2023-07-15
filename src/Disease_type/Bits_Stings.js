import React from 'react'
import './Bits_Stings.css'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import bee_img from './bee.jpg'
import snake_img from './snake.jpg'
import animal_img from './animal.jpg'
import spider_img from './spider.jpg'
import ant_img from './ant.jpg'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { Link } from 'react-router-dom'
export default function Bits_Stings() {
      const { speak,cancel } = useSpeechSynthesis();
      const { t } = useTranslation(); 
      const [lang, setLang] = useState('');
      const text = "First Aid Solution: Remove the stinger if it is still in the skin using a flat object such as a card. :Wash the affected area with soap and water. :Apply a cold compress or ice pack to reduce swelling and pain. :Elevate the affected area if possible to reduce swelling. :Take over-the-counter pain relievers if necessary to manage pain. :Apply a paste of baking soda and water, or a solution of vinegar and water, to the affected area to relieve itching and pain. :Seek medical attention if symptoms worsen or persist, or if there is a known allergy to bee or wasp stings.";

      const text1 = "First Aid Solution: Call emergency services immediately. :Keep the affected limb immobilized and positioned below the level of the heart to slow the spread of venom. :Remove any tight clothing or jewelry from the affected area. :Wash the affected area with soap and water, if possible. :Do not apply ice or a tourniquet to the affected area, as this can worsen the spread of venomMonitor the victim's breathing and other vital signs. :Seek medical attention immediately as antivenom treatment is needed to neutralize the venom. ";
 
      const text2 = "First Aid Solution: Wash the wound thoroughly with soap and water to reduce the risk of infection.Control bleeding by applying pressure to the wound with a clean cloth or bandage. :Elevate the affected area if possible to reduce swelling. :Cover the wound with a sterile bandage or dressing. :Apply an antibiotic ointment to the wound to prevent infection. :Watch for signs of infection such as redness, swelling, or pus. :Seek medical attention if the wound is deep, bleeding profusely, or shows signs of infection.";
 
      const text3 = "First Aid Solution: Wash the affected area with soap and water to reduce the risk of infection. :Apply a cold compress or ice pack to reduce swelling and pain. :Elevate the affected area to reduce swelling. :Apply an over-the-counter anti-itch cream or calamine lotion to reduce itching. :Avoid scratching the bite area to prevent infection and further irritation. :Use an insect repellent to prevent future mosquito bites. :Seek medical attention if the bite area shows signs of infection, such as redness, warmth, or pus, or if symptoms persist or worsen.";
 
      const text4 = "First Aid Solution: Wash the bite area with soap and water. :Apply a cool compress or ice pack to reduce swelling and pain. :Elevate the affected area to reduce swelling. :Use over-the-counter pain medication, such as acetaminophen or ibuprofen, to reduce pain and inflammation. :Watch for signs of an allergic reaction, such as difficulty breathing, hives, or swelling of the face and throat. :Seek medical attention immediately if the spider is venomous or the bite area shows signs of infection, such as redness, warmth, or pus. :If possible, try to capture the spider for identification purposes.";
 
      const text5 = "First Aid Solution: Remove any clothing or jewelry around the affected area. :Wash the bite area with soap and water to reduce the risk of infection. :Apply a cold compress or ice pack to reduce swelling and pain. :Elevate the affected area to reduce swelling. :Apply an over-the-counter anti-itch cream or calamine lotion to reduce itching. :Watch for signs of a severe allergic reaction, such as difficulty breathing or swelling of the face and throat. :Seek medical attention if the bite area shows signs of infection, such as redness, warmth, or pus, or if symptoms persist or worsen.";
  return (
    <div>
      <div><Navbar/></div>
      <div className='bits_solution_headre_h1'>
            <h1 className='bits_solution_headre_h1_content'>{t('bites')}</h1>
      </div>
      <div className="container">
      <div className='Bits_Stings_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={bee_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">{t('Bee_1')}</h2>
      <p className="bits_p">{t('Bee_2')}</p>

      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>{t('covid_1')}</h2>
      <ul className='bits_solution'>
            
           <li>{t('a1')}</li>
           <li>{t('a2')}</li>
           <li>{t('a3')}</li>
           <li>{t('a4')}</li>
           <li>{t('a5')}</li>
           <li>{t('a6')}</li>
           <li>{t('a7')}</li> 
           <li> video solution : <Link className='youtube' to='https://youtu.be/A7KE9_HE8-M'>https://youtu.be/A7KE9_HE8-M</Link></li>

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
      <img className='img_bits' src={snake_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Snake Bites</h2>
      <p className="bits_p">Snake bites occur when venomous snakes inject venom into the skin through their fangs, causing pain, swelling, and redness at the site of the bite. They can also cause more severe symptoms such as breathing difficulties, paralysis, and shock.</p>

      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
      <ul className='bits_solution'>
           <li>Call emergency services immediately.</li>
           <li>Keep the affected limb immobilized and positioned below the level of the heart to slow the spread of venom.</li>
           <li>Remove any tight clothing or jewelry from the affected area.</li>
           <li> Wash the affected area with soap and water, if possible.</li>
           <li>Do not apply ice or a tourniquet to the affected area, as this can worsen the spread of venom</li>
           <li>Monitor the victim's breathing and other vital signs.</li>
           <li>Seek medical attention immediately as antivenom treatment is needed to neutralize the venom.</li> 
           <li> video solution : <Link className='youtube' to='https://youtu.be/wq-QZ-iPG7o'>https://youtu.be/wq-QZ-iPG7o</Link></li>

           <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text})
        }}>Speak</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text})
        }}>Stop</button>
        </div>
           </ul>
      </div>
      </div>
      <div className='Bits_Stings_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={animal_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Animal Bites</h2>
      <p className="bits_p">Animal bites occur when an animal bites into the skin, breaking the skin and causing pain, swelling, and risk of infection. They can also transmit diseases such as rabies, making prompt treatment important.</p>

      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
    <ul className='bits_solution'>
      <li>Wash the wound thoroughly with soap and water to reduce the risk of infection.</li>
      <li>Control bleeding by applying pressure to the wound with a clean cloth or bandage.
</li>
      <li> Elevate the affected area if possible to reduce swelling.
</li>
      <li>Cover the wound with a sterile bandage or dressing.
</li>
      <li> Apply an antibiotic ointment to the wound to prevent infection.
</li>
      <li> Watch for signs of infection such as redness, swelling, or pus.
</li>
      <li> Seek medical attention if the wound is deep, bleeding profusely, or shows signs of infection.</li>
      <li> video solution : <Link className='youtube' to='https://youtu.be/WXT29jj1eN4'>https://youtu.be/WXT29jj1eN4</Link></li>
      <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text})
        }}>Speak</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text})
        }}>Stop</button>
        </div>
    </ul>
      </div>
      </div>
      <div className='Bits_Stings_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={bee_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Mosquito Bites</h2>
      <p className="bits_p">Mosquito bites occur when female mosquitoes feed on human blood, leaving behind a raised, itchy bump on the skin. They can also transmit diseases such as malaria, dengue fever, and Zika virus.</p>

      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
      <ul className='bits_solution'>
            <li>Wash the affected area with soap and water to reduce the risk of infection.
</li>
            <li>Apply a cold compress or ice pack to reduce swelling and pain.
</li>
            <li> Elevate the affected area to reduce swelling.
</li>
            <li> Apply an over-the-counter anti-itch cream or calamine lotion to reduce itching.
</li>
            <li> Avoid scratching the bite area to prevent infection and further irritation.
</li>
            <li>Use an insect repellent to prevent future mosquito bites.
</li>
            <li>Seek medical attention if the bite area shows signs of infection, such as redness, warmth, or pus, or if symptoms persist or worsen.</li>
            <li> video solution : <Link className='youtube' to='https://youtu.be/9Xfm2tLXxTY'>https://youtu.be/9Xfm2tLXxTY</Link></li>

            <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text})
        }}>Speak</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text})
        }}>Stop</button>
        </div>
            </ul>
      </div>
      </div>
      <div className='Bits_Stings_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={spider_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Spider Bites</h2>
      <p className="bits_p">Spider bites occur when a spider injects venom into the skin through its fangs, causing pain, swelling, and redness. Some spider bites can lead to more severe symptoms such as muscle cramps, fever, and difficulty breathing.</p>

      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
      <ul className='bits_solution'>
           <li>Wash the bite area with soap and water.
</li>
           <li>  Apply a cool compress or ice pack to reduce swelling and pain.
</li>
           <li> Elevate the affected area to reduce swelling.
</li>
           <li> Use over-the-counter pain medication, such as acetaminophen or ibuprofen, to reduce pain and inflammation.
</li>
           <li>Watch for signs of an allergic reaction, such as difficulty breathing, hives, or swelling of the face and throat.
</li>
           <li>Seek medical attention immediately if the spider is venomous or the bite area shows signs of infection, such as redness, warmth, or pus.
</li>
           <li> If possible, try to capture the spider for identification purposes.</li> 
           <li> video solution : <Link className='youtube' to='https://youtu.be/Qe_hbLy5Qvc'>https://youtu.be/Qe_hbLy5Qvc</Link></li>

           
           <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text})
        }}>Speak</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text})
        }}>Stop</button>
        </div> 
        
           </ul>
      </div>
      </div>
      <div className='Bits_Stings_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={ant_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Ant Bites</h2>
      <p className="bits_p">Ant bites occur when ants bite into the skin with their mandibles, causing redness, pain, and swelling. Some ant species can also inject venom into the skin, leading to more severe symptoms such as allergic reactions and anaphylaxis.</p>
   
      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
      <ul className='bits_solution'>
           <li>Remove any clothing or jewelry around the affected area.
</li>
           <li> Wash the bite area with soap and water to reduce the risk of infection.
</li>
           <li>Apply a cold compress or ice pack to reduce swelling and pain.
</li>
           <li> Elevate the affected area to reduce swelling.
</li>
           <li> Apply an over-the-counter anti-itch cream or calamine lotion to reduce itching.
</li>
           <li>Watch for signs of a severe allergic reaction, such as difficulty breathing or swelling of the face and throat.
</li>
           <li>Seek medical attention if the bite area shows signs of infection, such as redness, warmth, or pus, or if symptoms persist or worsen.</li> 
           <div className='btn-stop'>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          speak({text:text})
        }}>Speak</button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{
          cancel({text:text})
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
