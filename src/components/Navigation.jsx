import React from 'react'
import '../styles/nav.css'
import { Navigate, useNavigate } from 'react-router-dom'
const Navigation = () => {
  const nav=useNavigate()
  return (
    <div className='navigation-container'>
      <div className='nav' onClick={()=>nav('/')}>
        Home

      </div>

      <div className='nav' onClick={()=>nav('/project')}>
        Project
        </div>

        <div className='nav' onClick={()=>nav('/resume')}>
        Resume
        </div>
        <div className='nav' onClick={()=>nav('/conduct')}>
        Conduct
        </div>
    </div>
  )
}

export default Navigation
