import React from 'react'
import { NavLink } from 'react-router-dom'
import Wallet from './Wallet'

// Components & Assets
import Logo from '../../assets/react-logo.png'

const Nav = (props) => {
  return (
    <nav className="navigation-bar">
      <NavLink to="/"><img src="logo192.png" alt="reactville logo" /></NavLink>
      <NavLink to="/burgers">Burger Shop</NavLink>
      <NavLink to="/market">Super Market</NavLink>
      <Wallet cash={props.cash} />
    </nav>
  )
}

export default Nav