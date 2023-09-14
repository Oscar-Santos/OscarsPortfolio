import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo2 from '../assets/logo2.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1c3d6d] text-gray-300'>
        <div>
            <img src={logo2} alt="logo image" style={{width: '50px'}}/>
        </div>

        {/* menu */}
        <div>
          <ul className='flex'>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* hamburger */}
        <div className='hidden'>
          <FaBars />
        </div>

        {/* middle menu */}
        <ul className='hidden'>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>

        {/* social icons */}
        <div className='hidden'>

        </div>
    </div>
  )
}

export default Navbar