import React from 'react'
import "./Footer.css"
import {FaGithub , FaFacebook} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footerLogo'>Rishabh Kumar</a>

      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
      </ul>
      {/* which implies rel="noopener" is a security risk in older browsers 
          this is why we use rel="noreferrer"
      */}
      <div className='socials'>
        <a href='https://www.facebook.com/' target="_blank" rel="noreferrer"><FaFacebook /></a>
        <a href='https://github.com/RishabhKumar23?tab=repositories' target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href='https://www.linkedin.com/in/rishabh-kumar-7b0043217/' target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
      </div>
      <div className='copyRight'>
        <small>&copy; Rishabh Kumar, All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer