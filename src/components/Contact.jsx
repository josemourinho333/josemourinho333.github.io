import React, { useState, useRef } from 'react';
import { FiMail } from 'react-icons/fi';
import { RiCloseLine } from 'react-icons/ri';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
      .then((result) => {
        form.current.value = '';
        setOpen(false);
      })
  };

  return (
    <> 
      {
        !open 
          ? <></>
          : 
          <div id="form-container">
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
              <div className="contact-header">
                <div className="contact-title">Send me a message </div>
                <button className='close-form' onClick={() => setOpen(false)}><RiCloseLine /></button>
              </div>
              <input type="text" name='reply_to' placeholder='Email' />
              <input type="text" name='subject' placeholder='Subject'/>
              <textarea name="message" placeholder='Say hello!' />
              <button type='submit'>Send</button>
            </form>
          </div>
      }
      
      <button className="contact-button" onClick={() => setOpen(true)}><FiMail /></button>
    </>
  )
}

export default Contact;