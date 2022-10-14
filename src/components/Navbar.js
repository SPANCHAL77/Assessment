import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <h1>the Student's Blog</h1>
        {/* <Home/> */}
        {/* <EmoloyeeDetails/> */}
        <Link to="/" className='link'>Home</Link>
        <Link to="/employeedetails" className='link'>StudentDetails</Link>
      </nav>
    </div>
  )
}

export default Navbar
