import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './Contactus.css'
import Form from './Form'
// import Form from './Form'


export default function Contactus() {
  return (
    <div>
    <div><Navbar/></div>
    <div className='container'>
      <div>
        <h1 className='contact--1'>Contact us for any health-related queries</h1>
      </div>
      <p className='contact--2'>Welcome to our "Contact Us" page! We are here to provide you with personalized health support. Simply share your name, email, and health issue, and we will connect you directly with a qualified doctor. Your health concern will be forwarded securely to the doctor who specializes in your specific condition. They will reach out to you promptly to discuss your situation and provide expert guidance. Rest assured, your privacy is our utmost priority, and your information will be handled confidentially. Take the first step towards better health by contacting us today. We're here to connect you with the right doctor who can offer the assistance you need.</p>
    </div>
    <div><Form/></div>
     <div>
     <div className='getintouch_main'>
     <h1 className='getintouch' >GET IN TOUCH</h1>

     
     <div className='container contactus_main'>
      <div className='address_main' >
      <div className='logo_1'>
      <div className='icon_1' >
      <svg   xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="currentColor" class="bi bi-geo-alt all_icon" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
      </div>
      </div>
      <div className='address'>
        <h2>ADDRESS</h2>
      </div>
      <div className='address_content'>
      <h4>Parth Patel</h4>
      <p>Mumbai</p>
      <h4>Tarang Ladumor</h4>
      <p>Surat</p>
      <h4>Shubh Tanna</h4>
      <p>Delhi</p>
      <h4>Shabbir Saiyad</h4>
      <p>Rajkot</p>
      </div>
      </div>
      <div className='phone_box' >
      <div className='logo_1'>
      <div className='icon_1' >
      <svg   xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="currentColor" class="bi bi-telephone all_icon" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
      </div>
      </div>
      <div className='phone'>
        <h2>PHONE</h2>
      </div>
      <div className='phone_content'>
      <h4>Parth Patel</h4>
      <p>+919876545869</p>
      <h4>Tarang Ladumor</h4>
      <p>+917401256894</p>
      <h4>Shubh Tanna</h4>
      <p>+919979026345</p>
      <h4>Shabbir Saiyad</h4>
      <p>+919723814652</p>
      </div>
      </div>
      <div className='email_box' >
      <div  className='logo_1'>
      <div className='icon_1' >
      <svg  xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="currentColor" class="bi bi-envelope-at all_icon" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
</svg>
      </div>
      </div>
      <div className='email_icon'>
        <h2>E-MAIL</h2>
      </div>
      <div className='email_content' >
      <h4>Parth Patel</h4>
      <p>patelparth4120@gmail.com</p>
      <h4>Tarang Ladumor</h4>
      <p>tarangladumor@gmail.com</p>
      <h4>Shubh Tanna</h4>
      <p>shubhtanna09@gmail.com</p>
      <h4>Shabbir Saiyad</h4>
      <p>shabbirsaiyed83@gmail.com</p>
      </div>
      </div>
     </div>
     </div>
     <div className='container contactus_main' >
      <div className='contactus_msg' >
      <div className='contactus_msg_1' >
        <h1>Message Us</h1>
      </div>
      <div className='contactus_msg_2' >
        <p className='contactus_msg_3' >"Thank you for visiting our website and for your interest in our first aid solutions. If you have any questions, concerns or suggestions, please do not hesitate to contact us. Our team of experts is always ready to assist you in any way we can.
You can reach us by sending us an email at [patelparth4120@gmail.com]. We will do our best to respond to your inquiry as soon as possible.
Thank you again for your interest in our first aid solutions, and we look forward to hearing from you."</p>
<p className='contactus_msg_3' >If you have a specific concern or medical emergency, please seek professional medical advice immediately. Our website is not intended to replace medical advice or treatment, but rather to serve as a helpful resource for basic first aid techniques and information.</p>
<p className='contactus_msg_3' >Thank you for choosing our website as your source for first aid solutions for various diseases. We are committed to providing you with the best possible experience and resources, and we appreciate your support.</p>
      </div>
      </div>
    </div>
      {/* <div><Form/></div> */}
      <div><Footer/></div>
    </div>
    </div>
  )
}




