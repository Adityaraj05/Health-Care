import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation(); 
  const [lang, setLang] = useState('');
  return (
    <div className='container'>
      <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item footer_item"><Link  to="/" className="nav-link px-2 text-muted">{t('home_nav')}</Link></li>
      <li className="nav-item footer_item"><Link to="/Contactus" className="nav-link px-2 text-muted">{t('contact')}</Link></li>
      <li className="nav-item footer_item"><Link  to="/Disclaimer" className="nav-link px-2 text-muted">{t('disclamier')}</Link></li>
      <li className="nav-item footer_item"><Link  to="/Privacy_Policy" className="nav-link px-2 text-muted">{t('privacy')}</Link></li>
    </ul>
  
  </footer>
 
    </div>
  )
}
