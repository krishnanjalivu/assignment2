import React from 'react'
import { Link } from 'react-router-dom'
import Home from "../assets/home (1).png";
import User from "../assets/user (1).png";
import Profile from "../assets/Group 46@2x.png";

const Navbar = () => {
  return (
    <div className='navbar'>

      <Link to="/dashboard"><img className='home' src={Home} height={25} width={25}></img><span className='link'>Home</span></Link>
      <Link to="/employees"><img className='home' src={User} height={25} width={25}></img><span className='link'>Employees</span></Link>
      <img className='profile' src={Profile} alt='profile' height={60} width={60}></img>
    </div>
  )
}

export default Navbar
