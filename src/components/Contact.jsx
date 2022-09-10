import React, { useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { RiCloseLine } from 'react-icons/ri';

const Contact = () => {
  const [open, setOpen] = useState(true);

  return (
    <> 
      {
        !open 
          ? <></>
          : <form className='contact-form'>
              <div className="contact-header">
                <div className="contact-title">Send me a message </div>
                <button className='close-form' onClick={() => setOpen(false)}><RiCloseLine /></button>
              </div>
              <input type="text" placeholder='Email'/>
              <input type="text" placeholder='Subject'/>
              <textarea name="message" placeholder='Message' />
              <button type='submit'>Send</button>
            </form>
      }
      
      <button className="contact-button" onClick={() => setOpen(true)}><FiMail /></button>
    </>
  )
}

export default Contact;