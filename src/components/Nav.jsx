import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <ul>     
      <li>
        <NavLink to="/" exact={true} activeClassName="active" >Home</NavLink>
      </li>
      <li>
      <NavLink to="/" activeClassName="active" >Resources</NavLink>
      </li>
      <li>
      <NavLink to="/" activeClassName="active" >Pricing</NavLink>
      </li>
    </ul>
  )
}

export default Nav