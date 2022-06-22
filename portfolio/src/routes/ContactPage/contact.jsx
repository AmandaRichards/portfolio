import React from 'react'
import { useRef } from 'react';
import BurgerMenu from '../../animations/burgerMenu'
import css from './index.module.scss'
import emailjs from '@emailjs/browser';



const ContactPage = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, 'Zev9aTmvv-poZFpsR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
        <BurgerMenu />
        <h1 className={css.h1}>Get in Touch</h1>
        import React, { useRef } from 'react';

  

  
    <form ref={form} onSubmit={sendEmail} className={css.form}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  

    </div>
  )
}

export default ContactPage