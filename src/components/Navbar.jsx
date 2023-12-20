import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>

      <Link to="/dashboard"><img className='home' src="/src/assets/home (1).png" height={25} width={25}></img><span className='link'>Home</span></Link>
      <Link to="/employees"><img className='home' src="/src/assets/user (1).png" height={25} width={25}></img><span className='link'>Employees</span></Link>
      <img className='profile' src="/src/assets/Group 46@2x.png" alt='profile' height={60} width={60}></img>
    </div>
  )
}

export default Navbar
