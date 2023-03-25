import React, { useRef } from 'react'
import "./Contact.css";
import { AiOutlineMail, AiOutlineMessage, AiOutlineWhatsApp } from "react-icons/ai"
import emailjs from 'emailjs-com';
const Contact = () => {
  // for mail
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_203kpg9', 'template_58lgl8u', form.current, 'tyccmOmAM_Ay4UNah')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch </h5>
      <h2>Contact Me</h2>

      <div className='container contactContainer'>
        <div className='contactOptions'>
          <article className='contactOption'>
            {/* Email */}
            <AiOutlineMail className='icon' />
            <h4>Email</h4>
            <h5>rishabh.kumar2304@gmail.com</h5>
            <a href='mailto:rishabh.kumar10101@icloud.com' rel="noreferrer" target="_blank">Send a message</a>
          </article>
          {/* messenger */}
          <article className='contactOption'>
            <AiOutlineMessage className='icon' />
            <h4>messenger</h4>
            <h5>Rishabh Kumar</h5>
            <a href='https://m.me/home.php' rel="noreferrer" target="_blank">Send a message</a>
          </article>
          {/* what's app */}
          <article className='contactOption'>
            <AiOutlineWhatsApp className='icon' />
            <h4>what's app</h4>
            <h5>+91 9875704712</h5>
            <a href='https://wa.me/+919875704712' rel="noreferrer" target="_blank">Send a message</a>
          </article>
        </div>
        {/* form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='fName' placeholder='First Name' required />
          <input type="text" name='lName' placeholder='Last Name' />
          <input type="Email" name='email' placeholder='Email' required />
          <textarea name='message' rows="8" placeholder="your Message" required></textarea>
          <button type='submit' className="btn btn-primary"> Send message</button>
        </form>
      </div>
    </section>
  )
}
/**************************************Note*********************************/
// 1: whats app link for contact : href='https://wa.me/<your number with international format>'
// 2: messenger app link for contact : href='https://m.me/home.php'

export default Contact;