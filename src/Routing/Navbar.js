import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../"

const Navbar = () => {
  return (
    <>
    <ul>
    <NavLink to="/" className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
  }>Home</NavLink>
    <NavLink to="/About" className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
  }>About</NavLink>
    <NavLink to="/Contact" className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
  }>Contact</NavLink>
    </ul>
    </>
  )
}

export default Navbar