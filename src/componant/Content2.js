import React from 'react'
import './Content2.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
export default function Content2() {
   const { t } = useTranslation(); 
   const [lang, setLang] = useState('');
  return (
<>
<div className='all'>
<div className="c">
         <div className="l">
            <div className="plus"></div>
            <div className="plus1"></div>
         </div>
         <Link to="/Cuts_wounds" className="msg">{t('cuts')}</Link>
         
    </div> 
<div className="c">
         <div className="l">
            <div className="plus"></div>
            <div className="plus1"></div>
         </div>
         <Link to="/Skin_burns" className="msg">{t('skin')}</Link>
    </div> 
</div>
<div className='all'>
<div className="c">
         <div className="l">
            <div className="plus"></div>
            <div className="plus1"></div>
         </div>
         <Link to="/Bits_Stings" className="msg">{t('bites')}</Link>
    </div> 
<div className="c">
         <div className="l">
            <div className="plus"></div>
            <div className="plus1"></div>
         </div>
         <Link to="/Lifesavingskill" className="msg">{t('life')}</Link>
    </div> 
</div>
<div className='all'>
<div className="c">
         <div className="l">
            <div className="plus"></div>
            <div className="plus1"></div>
         </div>
         <Link to="/Emergencycontacts" className="msg">{t('emergency')}</Link>
    </div> 
<div className="c">
         <div className="l">
            <div className="plus"></div>
            <div className="plus1"></div>
         </div>
         <Link to="/Do&Dont" className="msg">{t('natural')}</Link>
    </div> 
</div>
</>
  )
}






