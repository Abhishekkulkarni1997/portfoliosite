import React from 'react'
import { Link } from 'react-router-dom'
import { SiInstagram,SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

function Aboutsection() {
  return (
<div className="p-6 sm:p-12 bg-transparent text-gray-100 h-[550px] w-[500px]">
	<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
		<img src={require('../resources/dp.jpg')} alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-700" />
		<div className="flex flex-col">
			<h4 className="text-lg font-semibold text-center md:text-left">Abhishek Kulkarni</h4>
			<p className="text-gray-400">Creative and dependable Entry Level Web Developer</p>
		</div>
	</div>
	<div className="flex justify-center pt-4 space-x-4 align-center">
		<Link rel="noopener noreferrer" to="https://github.com/Abhishekkulkarni1997" aria-label="GitHub" className="p-2 rounded-md text-gray-100 hover:text-violet-400">
		<SiGithub/>		</Link>
		<Link rel="noopener noreferrer" to="https://www.linkedin.com/in/abhishek-kulkarni-b5390a129/" aria-label="Dribble" className="p-2 rounded-md text-gray-100 hover:text-violet-400">
		<SiLinkedin/>
		</Link>
		<Link rel="noopener noreferrer" to="mailto:abhishekkulkarni1997@gmail.com" aria-label="Gmail" className="p-2 rounded-md text-gray-100 hover:text-violet-400">
		<SiGmail/>
		</Link>
		<Link rel="noopener noreferrer" to="https://www.instagram.com/_abhishekkulkarni_/" aria-label="Instagram" className="p-2 rounded-md text-gray-100 hover:text-violet-400">
		<SiInstagram/>
		</Link>
	</div>
</div>
  )
}

export default Aboutsection
