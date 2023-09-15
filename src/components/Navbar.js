import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import logo2 from '../assets/logo2.png'
import osp from '../assets/osp.pdf'

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1c3d6d] text-gray-300'>

        <div className='w-[400px] h-[10px] text-4xl text-[#d242ec] font-serif font-bold'>
            Oscar Santos
        </div>
  

        {/* menu */}
       
          <ul className='hidden md:flex text-2xl'>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* middle menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1c3d6d] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-200' href="https://www.linkedin.com/in/oscar-santos-perez/" target='_blank'>
                Linkedin <FaLinkedin size={30}/>
              </a>
            </li>

            <br />
            <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-200' href="https://github.com/Oscar-Santos" target='_blank'>
                Github <FaGithub size={30}/>
              </a>
            </li>
            <br />

            <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'>
              <a className='flex justify-between items-center w-full text-gray-200' href="">
                Email <HiOutlineMail size={30}/>
              </a>
            </li>
            <br />

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a
                className='flex justify-between items-center w-full text-gray-200'
                href={osp} 
                target='_blank' 
                rel='noopener noreferrer' 
              >
                Resume <BsFillPersonLinesFill size={30} />
               </a>
                </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar