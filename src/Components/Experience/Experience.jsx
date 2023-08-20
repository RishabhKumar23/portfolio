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
                <small className='expText'>Experience</small>
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
            <article className='expDetails'>
              <HiBadgeCheck className='expDetailsIcon' />
              <div>
                <h4>Next.js</h4>
                <small className='expText'>Experience</small>
              </div>
            </article>
            <article className='expDetails'>
              <HiBadgeCheck className='expDetailsIcon' />
              <div>
                <h4>TailwindCSS</h4>
                <small className='expText'>Experience</small>
              </div>
            </article>
          </div>
        </div>
        {/************************ BackEnd *****************************/}
        <div className='containerBackEnd'>
          <h3>Backend Development</h3>
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
                <h4>MySQL</h4>
                <small className='expText'>Experience</small>
              </div>
            </article>
            <article className='expDetails'>
              <HiBadgeCheck className='expDetailsIcon' />
              <div>
                <h4>MSSQL</h4>
                <small className='expText'>Experience</small>
              </div>
            </article>
          </div>
        </div>
        {/************************* Core Skills ****************************/}
        <div className='containerBackEnd'>
            <h3>Core Skills</h3>
          <div className='expContent'>
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
                <h4>C++</h4>
                <small className='expText'>Intermediate</small>
              </div>
            </article>
            <article className='expDetails'>
              <HiBadgeCheck className='expDetailsIcon' />
              <div>
                <h4>DSA</h4>
                <small className='expText'>Intermediate</small>
              </div>
            </article>
            <article className='expDetails'>
              <HiBadgeCheck className='expDetailsIcon' />
              <div>
                <h4>Web3</h4>
                <small className='expText'>Intermediate</small>
              </div>
            </article>
            {/* <article className='expDetails'>
              <HiBadgeCheck className='expDetailsIcon' />
              <div style={{cursor: 'pointer'}}>
                <h4><a href=''>Certificate</a></h4>
              </div>
            </article> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;