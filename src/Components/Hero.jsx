import React from 'react'
import TechStack from './TechStack'
import {Link} from "react-router-dom"

function Hero() {
  return (
        <section className="bg-transparent text-gray-100 h-[800px]">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h3 className="text-4xl font-bold leading-none sm:text-5xl">Abhishek Kulkarni
                </h3>
                <p className="px-8 mt-8 mb-12 text-lg">Creative and dependable Entry Level Web Developer</p>
                <div className="flex flex-wrap justify-center">
                    <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-gray-900 hover:bg-violet-300"><Link to="/projects">PROJECTS</Link></button>
                    <button className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-gray-700 hover:text-violet-400"><Link to="/about">CONTACT</Link></button>
                </div>
            </div>
            <TechStack/>
        </section>
  )
}

export default Hero
