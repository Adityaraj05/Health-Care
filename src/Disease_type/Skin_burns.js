import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import first_img from './first.jpg'
import second_img from './second.jpg'
import third_img from './third.jpg'
import sun_img from './sun.jpg'
import ele_img from './ele.jpg'
import che_img from './che.jpg'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

export default function Skin_burns() {
     const { t } = useTranslation(); 
     const [lang, setLang] = useState('');
     const { speak,cancel } = useSpeechSynthesis();
     const text = "First Aid Solution: Remove the source of heat. :Cool the burn with running cool (not cold) water for at least 10-15 minutes. :Cover the burn with a sterile, non-adhesive dressing or cloth. :Avoid applying butter, oil, or any ointments on the burn. :Take over-the-counter pain relief medication, such as ibuprofen or acetaminophen.If necessary, elevate the burned area to reduce swelling. :Seek medical attention if the burn covers a large area, or if the person experiences difficulty breathing or signs of shock.";

     const text1 = "First Aid Solution: Immediately remove any clothing or jewelry near the affected area. :Run cool water over the burn for at least 10-15 minutes to reduce pain and swelling. :Cover the burn with a sterile, non-adhesive dressing to prevent infection. :Take over-the-counter pain relievers such as ibuprofen or acetaminophen to manage pain. :Seek medical attention if the burn is larger than 3 inches or on the face, hands, feet, or genitals.Avoid breaking any blisters that may have formed. :Keep the affected area elevated if possible to reduce swelling.";

     const text2 = "First Aid Solution:It's important to note that third-degree burns are a medical emergency and require immediate professional medical attention. :However, in case of a third-degree burn, you should:Call for emergency medical assistance.Cool the burn with cool water or a cool, wet compress. :Cover the burned area with a sterile, non-adhesive dressing.Do not apply ice, ointments, or butter to the burn. :Keep the person warm and comfortable. :Elevate the burned area if possible. :Monitor the person's breathing and be prepared to administer CPR if necessary. :Sunburn Sunburn is a type of burn caused by overexposure to the sun's ultraviolet (UV) rays, damaging the skin. :This can occur after spending long hours under the sun, especially during summer vacations ";

     const text3 = "First Aid Solution: Move to a cool and shaded area. :Remove tight clothing or jewelry that may irritate the skin. :Take a cool bath or shower, or apply a cool compress to the affected area. :Apply aloe vera or a moisturizing lotion to soothe the skin. :Avoid further exposure to the sun. :Drink plenty of fluids to prevent dehydration.Take over-the-counter pain medication if needed.";

     const text4 = "First Aid Solution: Call for emergency medical help immediately. :Ensure that the person is no longer in contact with the electrical source before approaching them. :Do not touch the person with your bare hands or any metal object. :If the person is unconscious, check their breathing and pulse and perform CPR if necessary. :Cover the burn area with a sterile, non-fluffy material to prevent infection. :Keep the person warm with a blanket.";

     const text5 = "First Aid Solution: Remove any contaminated clothing or jewelry. :Rinse the affected area with cool running water for at least 20 minutes. :Do not use ice, creams or ointments on the burn. :Cover the burn with a sterile gauze or clean cloth. :Seek medical attention immediately, especially if the burn is severe or covers a large area.If possible, identify the chemical involved in the burn for proper treatment. :In case of ingestion or inhalation, call poison control or seek emergency medical attention.";
  return (
    <div>
     <div><Navbar/></div>
     <div className='bits_solution_headre_h1'>
            <h1 className='bits_solution_headre_h1_content'>{t('skin')}</h1>
      </div>
     <div className="container">
      <div className='Bits_Stings_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={first_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">{t('skin_1')}</h2>
      <p className="bits_p">{t('skin_2')}</p>
     
      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>{t('covid_1')}</h2>
      <ul className='bits_solution'>
            
           <li>{t('skin-1')}</li>
           <li>{t('skin-2')}</li>
           <li>{t('skin-3')}</li>
           <li>{t('skin-4')}</li>
           <li>{t('skin-5')}</li>
           <li>{t('skin-6')}</li>
           <li>{t('skin-7')}</li> 
           <li> video solution : <Link className='youtube' to='https://youtu.be/rYEqeDgBK_w'>https://youtu.be/rYEqeDgBK_w</Link></li>
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
      <img className='img_bits' src={second_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Second Degree Burn</h2>
      <p className="bits_p">A second-degree burn is a burn that affects both the outer layer and the underlying layer of the skin, causing blistering, redness, and severe pain. An example of a second-degree burn is a scalding burn from hot liquids or steam.</p>
     
      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
      <ul className='bits_solution'>
            
           <li>Immediately remove any clothing or jewelry near the affected area.</li>
           <li>Run cool water over the burn for at least 10-15 minutes to reduce pain and swelling.</li>
           <li>Cover the burn with a sterile, non-adhesive dressing to prevent infection</li>
           <li>ake over-the-counter pain relievers such as ibuprofen or acetaminophen to manage pain.</li>
           <li>Seek medical attention if the burn is larger than 3 inches or on the face, hands, feet, or genitals.</li>
           <li>Avoid breaking any blisters that may have formed.</li>
           <li>Keep the affected area elevated if possible to reduce swelling.</li> 
           <li> video solution : <Link className='youtube' to='https://youtu.be/iMSsjel4fsQ'>https://youtu.be/iMSsjel4fsQ</Link></li>
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
      <img className='img_bits' src={third_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Third Degree Burn</h2>
      <p className="bits_p">A third-degree burn is a severe burn that affects all layers of the skin, causing deep tissue damage and potentially even nerve damage. An example of a third-degree burn is contact with a hot surface or flames for a prolonged period of time.</p>
    
      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
      <ul className='bits_solution'>
            
           <p>It's important to note that third-degree burns are a medical emergency and require immediate professional medical attention.</p>
           <p>However, in case of a third-degree burn, you should:</p>
           <li> Call for emergency medical assistance.</li>
           <li> Cool the burn with cool water or a cool, wet compress.</li>
           <li>Cover the burned area with a sterile, non-adhesive dressing.</li>
           <li> Do not apply ice, ointments, or butter to the burn.</li>
           <li>Keep the person warm and comfortable.</li>
            <li>Elevate the burned area if possible.</li>
            <li>Monitor the person's breathing and be prepared to administer CPR if necessary.</li>
            <li> video solution : <Link className='youtube' to='https://youtu.be/4qSqcgAciDs'>https://youtu.be/4qSqcgAciDs</Link></li>
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
      <img className='img_bits' src={sun_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Sunburn</h2>
      <p className="bits_p">Sunburn is a type of burn caused by overexposure to the sun's ultraviolet (UV) rays, damaging the skin. This can occur after spending long hours under the sun, especially during summer vacations</p>

      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
      <ul className='bits_solution'>
            
           <li>Move to a cool and shaded area.</li>
           <li>Remove tight clothing or jewelry that may irritate the skin.</li>
           <li> Take a cool bath or shower, or apply a cool compress to the affected area.</li>
           <li>Apply aloe vera or a moisturizing lotion to soothe the skin.</li>
           <li> Avoid further exposure to the sun.</li>
           <li>Drink plenty of fluids to prevent dehydration.</li>
           <li>Take over-the-counter pain medication if needed.</li> 
           <li> video solution : <Link className='youtube' to='https://youtu.be/2EhHUh2maGc'>https://youtu.be/2EhHUh2maGc</Link></li>
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
      <img className='img_bits' src={ele_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Electrical Burn</h2>
      <p className="bits_p">Electrical burn occurs when an electrical current passes through the body, causing tissue damage. Examples of electrical burns can include lightning strikes or contact with electrical wires or appliances.</p>

      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
      <ul className='bits_solution'>
            
           <li>Call for emergency medical help immediately.</li>
           <li>Ensure that the person is no longer in contact with the electrical source before approaching them.</li>
           <li>Do not touch the person with your bare hands or any metal object.</li>
           <li>If the person is unconscious, check their breathing and pulse and perform CPR if necessary.</li>
           <li>Cover the burn area with a sterile, non-fluffy material to prevent infection.</li>
           <li>Keep the person warm with a blanket.</li>
           <li> video solution : <Link className='youtube' to='https://youtu.be/P0cM8V1CcQU'>https://youtu.be/P0cM8V1CcQU</Link></li>
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
      <img className='img_bits' src={che_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Chemical Burn</h2>
      <p className="bits_p">A chemical burn is damage to the skin or eyes caused by exposure to a chemical substance. An example of a chemical burn is exposure to acid or alkali chemicals, such as battery acid or drain cleaner.</p>
   
      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
      <ul className='bits_solution'>
            
           <li>Remove any contaminated clothing or jewelry.</li>
           <li>Rinse the affected area with cool running water for at least 20 minutes.</li>
           <li> Do not use ice, creams or ointments on the burn.</li>
           <li>Cover the burn with a sterile gauze or clean cloth.</li>
           <li>Seek medical attention immediately, especially if the burn is severe or covers a large area.</li>
           <li>If possible, identify the chemical involved in the burn for proper treatment.</li>
           <li>In case of ingestion or inhalation, call poison control or seek emergency medical attention.</li>
           <li> video solution : <Link className='youtube' to='https://youtu.be/F9n1ARO6Dm4'>https://youtu.be/F9n1ARO6Dm4</Link></li> 
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
