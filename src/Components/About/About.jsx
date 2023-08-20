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
            Greetings! I'm an aspiring web developer with a zest for crafting digital experiences that blend creativity and functionality seamlessly. Proficient in HTML, CSS, and JavaScript, I'm also well-versed in cutting-edge technologies like React.js, Next.js, and TailwindCSS. My programming toolkit includes Python and C++, enhancing my problem-solving prowess.

            I'm not only at home with databases like MSSQL Server, MongoDB, and MySQL, but I'm also skilled in Bootstrap, Node.js, and Web3, infusing innovation into my projects. My adaptability extends to Computer Vision, giving me a unique perspective.

            Beyond code, I bring leadership and teamwork to the table, ensuring projects thrive in a collaborative environment. With my portfolio as a testament, let's explore the world of web development together!
          </p>
          <a href='#contact' className='btn btn-primary'>Get in Touch!</a>
        </div>
      </div>
    </section>
  )
}

export default About;