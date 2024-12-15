import React from 'react'
import "./Header.css"
import Cv from './Cv'
import profile from '../../image/profile.png'
import Socials from './Socials'
const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Rishabh Kumar</h1>
        <h5 className='text-light'>Software Engineer</h5>
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