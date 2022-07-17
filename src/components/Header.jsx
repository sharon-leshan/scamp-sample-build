import React from 'react'
import Nav from './Nav'
import './header.css'

const Header = () => {
  return (
    <header>
         <div className="left">
         <div>
        Untitled UI
      </div>
        <Nav/>
         </div>
    </header>
  )
}

export default Header