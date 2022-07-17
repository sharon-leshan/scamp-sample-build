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
    <div className="buttons">
        <button>Login</button>
        <button>Sign up</button>
    </div>
    </header>
  )
}

export default Header