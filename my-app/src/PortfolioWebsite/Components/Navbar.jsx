import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
    
    <div className="navbar">

    <div className="nav-left">

   <div className="logo">Code Master</div>
   <span> Toogle </span>

       </div>

   <div className="nav-right">

   <div className="list">

   <ul style={{listStyle: 'none'}} >
           <li>Home</li>
           <li>Services</li>
           <li>Experience</li>
           <li>Portfolio</li>
           <li>Testimonials</li>
   </ul>
   </div>

   </div>
      <button className='button' >Contact Us</button>

 </div>
    </div>
  )
}

export default Navbar