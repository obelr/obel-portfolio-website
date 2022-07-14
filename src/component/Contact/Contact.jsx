import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import  {BsWhatsapp} from 'react-icons/bs'

import  { useRef } from 'react';
import   emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m0vpv1b', 'template_699e8ne', form.current, '8zG58jZHocR29b51x')
     e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_options-icon"/>
            <h4>Email</h4>
            <h5>Debebe.robel@gmail.com</h5>
            <a href='Debebe.robel@gmail.com' target='_blank'>Send a Message</a>
            </article>

            <article className="contact_option">
            <BsLinkedin className="contact_options-icon"/>
            <h4>Linkdin</h4>
            <h5>Robel Debebe</h5>
            <a href='https://www.linkedin.com/in/robel-debebe-607187125/' target='_blank'>Send a Message</a>
            </article>

            <article className="contact_option">
            <BsWhatsapp className="contact_options-icon"/>
            <h4>Whatsapp</h4>
            <h5>+251912995895</h5>
            <a href='https://api.whatsapp.com/send?phone=+251912995895' target='_blank'>Send a Message</a>
            </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
          <form ref={form} onSubmit={sendEmail}>

            <input type='text' name='name' placeholder='Your full Name' required/>
            <input type='email' name='email' placeholder='Your Email' required/>
            <textarea name='message' row='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>

      </div>
    </section>
      
    )
}
export  default Contact