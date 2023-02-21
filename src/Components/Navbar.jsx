import React from 'react'
import {NavLink} from "react-router-dom"

function Navbar() {
  return (


<header className="p-4 bg-transparent text-gray-100 sticky top-0 z-40 backdrop-blur supports-backdrop-blur:bg-violet-400 bg-zinc-900 ">
    <div className="container flex justify-between h-16 mx-auto">
      <NavLink rel="noopener noreferrer" to="/home" aria-label="Back to homepage" className="flex items-center p-2" >
        <h5 className='hover:text-violet-400'>@Abhishekkulkarni1997</h5>
      </NavLink >
      <ul className="items-stretch hidden space-x-3 md:flex">
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
      </ul>
      <button className="flex justify-end p-4 md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
</header>

  )
}

export default Navbar
