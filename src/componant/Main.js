import React, { Suspense } from 'react'

import Carousel from './Carousel'
import Content from './Content'
import Content1 from './Content1'
import Diseas from './Diseas'
import Footer from './Footer'
import Navbar from './Navbar'
import Content2 from './Content2'
import '../I18n.js'
import Chatbot_1 from '../Contactus/Chatbot_1'

export default function Main() {
  
  return (
    <div className='container'>
    <Suspense fallback="...loading">
      <div>
        <Navbar/>
      </div>
      <div>
        <Carousel/>
      </div>
      <div >
        <Diseas/>
      </div>
   
      <Content/>
      <div><Content1 /></div>
   <div><Content2/></div>
   <div><Footer/></div>
      </Suspense>
      
   
    
   
   <div><Chatbot_1/></div>
 
    </div>
  )
}
