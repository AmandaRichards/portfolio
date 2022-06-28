import React from 'react'
import { useRef } from 'react';
import BurgerMenu from '../../animations/burgerMenu'
import css from './index.module.scss'
import emailjs from '@emailjs/browser';
import ContactDetails from '../../components/ContactDetails';
import wave from '../../Assets/icons8-waving-hand-emoji-96.png'



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
    <div >
        <BurgerMenu />
        <h1 className={css.h1}>Say Hello! <img src={wave} alt='wave emoji' className={css.emoji} /></h1>
        
        <ContactDetails />
        

  

  <div className={css.formContainer}>
    <form ref={form} onSubmit={sendEmail} className={css.form}>
      <label className={css.label}>Name</label>
      <input type="text" name="user_name" className={css.input}/>
      <label className={css.label}>Email</label>
      <input type="email" name="user_email"className={css.input} />
      <label className={css.label}>Message</label>
      <textarea name="message" className={css.textarea}/>
      <input type="submit" value="Send" className={css.sendButton}/>
    </form>
    </div>
  

    </div>
  )
}

export default ContactPage