import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Users from './Users'
import Navbar from './Navbar'
import UserDetails from './UserDetails'

const RoutesFile = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<UserDetails/>}/>
    </Routes>
    </>
  )
}

export default RoutesFile