import React from 'react'
import "./About.css";
import aboutProfile from '../../image/profile.jpeg'
import { SiCodeproject } from 'react-icons/si'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container AboutContainer'>
        <div className='aboutMe'>
          <div className='aboutImg'>
            <img src={aboutProfile} alt='profile' />
          </div>
        </div>
        <div className='aboutContent'>
          <div className='aboutCards'>
            <article className='aboutCard'>
              <SiCodeproject className='aboutIcon' />
              <h5>Projects</h5>
              <p>10+ Completed</p>
            </article>
            <article className='aboutCard'>
              <SiCodeproject className='aboutIcon' />
              <h5>Projects</h5>
            </article>
            <article className='aboutCard'>
              <SiCodeproject className='aboutIcon' />
              <h5>Projects</h5>
            </article>
          </div>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic typesetting
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;