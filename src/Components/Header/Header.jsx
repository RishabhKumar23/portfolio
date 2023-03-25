import React from 'react'
import "./Header.css"
import Cv from './Cv'
import profile from '../../image/profile.jpeg'
import Socials from './Socials'
const Header = () => {
  return (
    <header>
      <div className='container header_container'>  
        <h5>Hello I'M</h5>
        <h1>Rishabh</h1>
        <h5 className='text-light'>Full Stact Web Developer</h5>
        <Cv />
        <Socials />
        <div className='profile'>
          <img src={profile} alt='Profile' />
        </div>
        <a href='#contact' className='scrollDown'>scroll Down</a>
      </div>
    </header>
  )
}

export default Header