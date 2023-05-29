import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cw7963o', 'template_yf1r8bm', form.current, 'MsbnF0k1cEw_f_CD5')

    e.target.reset()
  };

  return (
    <section id='contact'>  
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail></MdOutlineEmail>
            <h4>Email</h4>
            <h5>sumondas0404@gmail.com</h5>
            <a href="mailto:sumondas0404@gmail.com" target='_blank'>Send a mail</a>
          </article>
          <article className='contact_option'>
            <BsInstagram></BsInstagram>
            <h4>Instagram</h4>
            <h5>sumandas</h5>
            <a href="https://www.instagram.com/sumondas0404/" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp></BsWhatsapp>
            <h4>WhatsApp</h4>
            <h5>(+91)7002526882</h5>
            <a href="https://api.whatsapp.com/send?phone=+917002526882" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact