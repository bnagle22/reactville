import React from 'react'
import { NavLink } from 'react-router-dom'

// Components & Assets
import Logo from '../../assets/react-logo.png'

const Nav = () => {
  console.log(Logo)
  return (
    <nav className="navigation-bar">
      <NavLink to="/"><img src="logo192.png" alt="reactville logo" /></NavLink>
      <NavLink to="/burgers">Burger Shop</NavLink>
      <NavLink to="/market">Super Market</NavLink>
    </nav>
  )
}

export default Nav