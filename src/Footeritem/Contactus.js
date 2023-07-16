import React from 'react'
import Navbar from '../componant/Navbar'
// import Footer from '../componant/Footer'
import './Contactus.css'
// import Form from './Form'
// import Form from './Form'


export default function Contactus() {
  return (
    <>
      <div><Navbar /></div>
      <section className='contact'>
        <div className='content'>
          <h2>Contact Us</h2>
          <p>Welcome to our "Contact Us" page! We are here to provide you with personalized health support. Simply share your name, email, and health issue, and we will connect you directly with a qualified doctor. Your health concern will be forwarded securely to the doctor who specializes in your specific condition. They will reach out to you promptly to discuss your situation and provide expert guidance. Rest assured, your privacy is our utmost priority, and your information will be handled confidentially. Take the first step towards better health by contacting us today. We're here to connect you with the right doctor who can offer the assistance you need.</p>

        </div>
        <div className="container-1">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <ion-icon name="location-outline"></ion-icon></div>
              <div className="text">
                <h3>Address</h3>
                <p>402671 Sugar Camp Road<br></br>Vadrodra Gujarat <br></br> 35761</p></div>
            </div>

            <div className="box">
              <div className="icon">
                <ion-icon name="call-outline"></ion-icon> </div>
              <div className="text">
                <h3>Phone</h3>
                <p>8210483019</p></div>
            </div>

            <div className="box">
              <div className="icon">
                <ion-icon name="mail-outline"></ion-icon> </div>
              <div className="text">
                <h3>Email</h3>
                <p>adityarajavi05@gmail.com</p></div>
            </div>
          <h2 className='txt'>Connect with us</h2>
          <ul className='sci'>
            <li><a href="/"><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href="/"><ion-icon name="logo-twitter"></ion-icon></a></li>
            <li><a href="/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
            <li><a href="/"><ion-icon name="logo-instagram"></ion-icon></a></li>
          </ul>
          </div>



          <div className="contactForm">
          <form>
            <h2>Send Queries </h2>
            <div className="inputBox">
              <input type="text" name="" required="required"/>
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required="required"/>
              <span>Email</span>
            </div>
            <div className="inputBox">
             <textarea required="required"></textarea>
              <span>Type your Queries...</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="" value = "send" />
            
            </div>
            </form>
          </div>

        </div>

      </section>
     

    </>
  )
}