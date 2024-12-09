import React from 'react'
import '../styles/resume.css'
import Navigation from './Navigation';
const Resume = () => {
  return (
    <div>
      <Navigation/>
      <div className="resume">
<center><img src="k.png" className='rimg' alt="sd" /></center>
<center className='a'><a href="a.pdf" download='alex_reaume.pdf'>Download</a></center>

      </div>
    </div>
  )
}

export default Resume
