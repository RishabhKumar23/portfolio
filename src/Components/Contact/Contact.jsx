import React, { useRef, useState, useEffect } from "react";
import "./Contact.css";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import emailjs from "emailjs-com";

const Contact = () => {
  // for mail
  const form = useRef();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_203kpg9",
        "template_fgtxz7k",
        form.current,
        "Vhqnvn8bHh6TyYTNt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch </h5>
      <h2>Contact Me</h2>

      <div className="container contactContainer">
        <div className="contactOptions">
          {!isSmallScreen && (
            <>
              <article className="contactOption">
                {/* <AiOutlineMail className="icon" /> */}
                {!isSmallScreen && (
                  <>
                    <AiOutlineMail className="icon" />

                    <h4>Email</h4>
                    <a
                      href="mailto:rishabh.kumar10101@icloud.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Send a message
                    </a>
                  </>
                )}
              </article>

              <article className="contactOption">
                {/* <AiFillLinkedin className="icon" /> */}
                {!isSmallScreen && (
                  <>
                    <AiFillLinkedin className="icon" />

                    <h4>LinkedIn</h4>
                    <h5>Rishabh Kumar</h5>
                    <a
                      href="https://www.linkedin.com/in/rishabh-kumar-7b0043217/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Send a message
                    </a>
                  </>
                )}
              </article>

              <article className="contactOption">
                {/* <AiOutlineWhatsApp className="icon" /> */}
                {!isSmallScreen && (
                  <>
                    <AiOutlineWhatsApp className="icon" />

                    <h4>WhatsApp</h4>
                    {/* <h5>+91 9875704712</h5> */}
                    <a
                      href="https://wa.me/+919875704712"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Send a message
                    </a>
                  </>
                )}
              </article>
            </>
          )}
        </div>

        {/* form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="fName" placeholder="First Name" required />
          <input type="text" name="lName" placeholder="Last Name" />
          <input type="Email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="8"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
