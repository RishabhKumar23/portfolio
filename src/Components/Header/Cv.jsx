import React from 'react'
// import Resume from '../../Components/Resume'
// import resume from "./Components/Resume"
const Cv = () => {
  return (
    <div className='cv'>
        {/* <a href='./Resume.pdf' target="_blank" download className='btn'>Download resume</a> */}
        <a href="https://drive.google.com/file/d/1lqxL527et3yDBnWCxqnY5XYL9Gxl3vq_/view?usp=sharing"
        target="_blank" rel='noreferrer'
        className='btn'>Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cv