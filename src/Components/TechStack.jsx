import React from 'react'
import { IconContext } from 'react-icons';
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

function TechStack() {
  return (
            <section className="p-6 bg-transparent text-gray-100">
                <div className="container p-4 mx-auto text-center">
                    <h2 className="text-4xl font-bold">Tech Stack</h2>
                </div>
                <div className="container flex flex-wrap justify-center mx-auto text-gray-400">
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/5" >
                        <IconContext.Provider value={{ color: 'gray', size: '50px' }}>
                            <FaHtml5 title='HTML5'/>
                        </IconContext.Provider>
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/5" >
                        <IconContext.Provider value={{ color: 'gray', size: '50px' }}>
                            <FaCss3 title='CSS'/>
                        </IconContext.Provider>
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/5" >
                        <IconContext.Provider value={{ color: 'gray', size: '50px' }}>
                            <FaJs title='JavaScript'/>
                        </IconContext.Provider>
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/5" >
                        <IconContext.Provider value={{ color: 'gray', size: '50px' }}>
                            <DiMongodb title='MongoDB'/>
                        </IconContext.Provider>
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/5" > 
                        <IconContext.Provider value={{ color: 'gray', size: '50px' }}>
                            <FaReact title='ReactJs'/>
                        </IconContext.Provider>
                    </div>
                </div>
            </section>
  )
}

export default TechStack
