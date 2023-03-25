import React from 'react'
import "./Experience.css";
import { HiBadgeCheck } from 'react-icons/hi'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container expContainer'>
        {/************************ FontEnd *****************************/}
        <div className='containerFontEnd'>
          <h3>Fontend Development</h3>
          <div className='expContent'>
            <article className='expDetails'>
              <HiBadgeCheck className='expDetailsIcon' />
              <div>
                <h4>HTML</h4>
                <small className='expText'>Experience</small>
              </div>
            </article>
            <article className='expDetails'>
              <HiBadgeCheck className='expDetailsIcon' />
              <div>
                <h4>CSS</h4>
                <small className='expText'>Intermediate</small>
              </div>
            </article>
            <article className='expDetails'>
              <HiBadgeCheck className='expDetailsIcon' />
              <div>
                <h4>javaScript</h4>
                <small className='expText'>Experience</small>
              </div>
            </article>
            <article className='expDetails'>
              <HiBadgeCheck className='expDetailsIcon' />
              <div>
                <h4>BootStrap</h4>
                <small className='expText'>Intermediate</small>
              </div>
            </article>
            <article className='expDetails'>
              <HiBadgeCheck className='expDetailsIcon' />
              <div>
                <h4>ejs</h4>
                <small className='expText'>Experience</small>
              </div>
            </article>
            <article className='expDetails'>
              <HiBadgeCheck className='expDetailsIcon' />
              <div>
                <h4>React</h4>
                <small className='expText'>Experience</small>
              </div>
            </article>
          </div>
        </div>
        {/************************ BackEnd *****************************/}
        <div className='containerBackEnd'>
          <h3>Backend Development</h3>
          <div className='expContent'>
            <div className='expContent'>
              <article className='expDetails'>
                <HiBadgeCheck className='expDetailsIcon' />
                <div>
                  <h4>Node.js</h4>
                  <small className='expText'>Experience</small>
                </div>
              </article>
              <article className='expDetails'>
                <HiBadgeCheck className='expDetailsIcon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className='expText'>Experience</small>
                </div>
              </article>
              <article className='expDetails'>
                <HiBadgeCheck className='expDetailsIcon' />
                <div>
                  <h4>PHP</h4>
                  <small className='expText'>Intermediate</small>
                </div>
              </article>
              <article className='expDetails'>
                <HiBadgeCheck className='expDetailsIcon' />
                <div>
                  <h4>MySql</h4>
                  <small className='expText'>Intermediate</small>
                </div>
              </article>
              <article className='expDetails'>
                <HiBadgeCheck className='expDetailsIcon' />
                <div>
                  <h4>python</h4>
                  <small className='expText'>Experience</small>
                </div>
              </article>
              <article className='expDetails'>
                <HiBadgeCheck className='expDetailsIcon' />
                <div>
                  <h4>MsSql</h4>
                  <small className='expText'>Experience</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/* Other Skills */}
      {/* <div className='Other Skills'>
        <h1>C++</h1>
      </div> */}
    </section>
  )
}

export default Experience;