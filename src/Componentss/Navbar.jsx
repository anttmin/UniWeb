import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import IMG from '../IMG/logo.png'

const Navbar = () => {
  const[sticky,setsticky] = useState(false);
  
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setsticky(true) : setsticky(false)
    })
  },[])

  return (
    <div>
        <nav className={`Navbar ${sticky ? 'darknav' : ''}`}>
            <img src={IMG} className='Img' alt='title'/>
            <ul className='List'>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/Program"}>Programs</NavLink>
                <NavLink to={"/Aboutus"}>About Us</NavLink>
                <NavLink to={"/Campus"}>Campus</NavLink>
                <NavLink to={"/Testi"}>Testimonials</NavLink>
                <NavLink to={"/Contactus"}>Contact Us</NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar

