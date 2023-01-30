import React from 'react'
import icon from '../react-icon-small.png'

export default function Navbar() {
  return (
    <nav>
      <img src={icon} alt="React Logo" className='nav-logo'/>
      <h3 className='nav-logo-text'>ReactFacts</h3>
      <h4 className='nav-project-name'>React Course - Project 1</h4>
    </nav>
  )
}
