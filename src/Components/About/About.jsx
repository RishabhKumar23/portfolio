import React from 'react'
import "./About.css";
import about_pic from '../../image/about_pic.jpg'
// import { SiCodeproject } from 'react-icons/si'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container AboutContainer'>
        <div className='aboutMe'>
          <div className='aboutImg'>
            <img src={about_pic} alt='profile' />
          </div>
        </div>
        <div className='aboutContent'>
          <p>
          I have a solid technical background in web development, having worked with HTML, CSS, JavaScript, express, node.js, and frameworks such as react.js and next.js. 
          I have successfully finished a number of assignments and have strong problem-solving abilities. 
          I am dedicated to lifelong learning and keeping up with industry changes. 
          I am enthusiastic about web development and take great delight in producing high-quality results.
          I am dependable and have a great work ethic.
        </p>
        <a href='#contact' className='btn btn-primary'>Get in Touch!</a>
        </div>
      </div>
    </section>
  )
}

export default About;