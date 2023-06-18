import React from 'react'
import {BsLinkedin , BsGithub, BsInstagram} from 'react-icons/bs'
const Socials = () => {
  return (
    <div className='headerSocials'>
    <a href='https://github.com/RishabhKumar23' target="_blank" rel='noreferrer'><BsGithub /></a>
    <a href='https://www.linkedin.com/in/rishabh-kumar-7b0043217/' target="_blank" rel='noreferrer'><BsLinkedin /></a>
    <a href='https://www.instagram.com/rishabh_kr__/' target="_blank" rel='noreferrer'><BsInstagram /></a>
    </div>
  )
}

export default Socials