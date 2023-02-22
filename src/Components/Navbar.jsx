import React, { useState } from 'react'
import {NavLink} from "react-router-dom"
import { FaBars, FaTimes} from "react-icons/fa"

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = ()=> setClick(!click);
  return (


<header className="p-4 bg-transparent text-gray-100 sticky top-0 z-40 backdrop-blur supports-backdrop-blur:bg-violet-400 bg-zinc-900 ">
    <div className="container flex justify-between h-16 mx-auto">
      <NavLink rel="noopener noreferrer" to="/home" aria-label="Back to homepage" className="flex items-center p-2" >
        <h5 className='hover:text-violet-400'>@Abhishekkulkarni1997</h5>
      </NavLink >
      {click ? <ul className="flex flex-col md:flex-row">
        <li className="flex">
          <NavLink rel="noopener noreferrer" to="/home" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-violet-400" style={({ isActive }) => ({
    color: isActive ? ' #a78bfa' : ' #ffffff',
  })}>Home</NavLink>
        </li>
        <li className="flex">
          <NavLink rel="noopener noreferrer" to="/about" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-violet-400" style={({ isActive }) => ({
    color: isActive ? ' #a78bfa' : ' #ffffff',
  })}>About</NavLink>
        </li>
        <li className="flex">
          <NavLink rel="noopener noreferrer" to="/projects" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-violet-400" style={({ isActive }) => ({
    color: isActive ? ' #a78bfa' : ' #ffffff',
  })}>Projects</NavLink>
        </li>
      </ul> : <ul className="hidden md:flex">
        <li className="flex">
          <NavLink rel="noopener noreferrer" to="/home" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-violet-400" style={({ isActive }) => ({
    color: isActive ? ' #a78bfa' : ' #ffffff',
  })}>Home</NavLink>
        </li>
        <li className="flex">
          <NavLink rel="noopener noreferrer" to="/about" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-violet-400" style={({ isActive }) => ({
    color: isActive ? ' #a78bfa' : ' #ffffff',
  })}>About</NavLink>
        </li>
        <li className="flex">
          <NavLink rel="noopener noreferrer" to="/projects" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-violet-400" style={({ isActive }) => ({
    color: isActive ? ' #a78bfa' : ' #ffffff',
  })}>Projects</NavLink>
        </li>
      </ul> }
      
      <button className="flex justify-end p-4 md:hidden" onClick={handleClick}>
        {
          click ? (<FaTimes className='w-6 h-6'/>) : (<FaBars className='w-6 h-6'/>)
        }
      </button>
    </div>
</header>

  )
}

export default Navbar
