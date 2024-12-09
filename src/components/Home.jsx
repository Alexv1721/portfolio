import React from 'react'
import Navigation from './Navigation'
import '../styles/home.css'
const Home = () => {
  return (
<div className='n'>
    <Navigation/>
<div className='home-section'>
      <div className="intro">
      <p className='intro-text'>
      A passionate Full Stack Developer skilled in the MERN stack, creating responsive and user-friendly web applications.  
      Let's build something amazing together! <span>~ Alex V</span>
    </p>
      </div>

      <div className='pro'> 

      </div>
      {/* <img className='profileimg' src="mine.jpeg" alt="" /> */}
 
    </div>
</div>
  )
}

export default Home
