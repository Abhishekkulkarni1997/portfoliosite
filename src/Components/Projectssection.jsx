import React from 'react'
import {Link} from "react-router-dom"

function Projectssection() {
  return (
          <section className="py-6 sm:py-12 bg-transparent text-gray-100">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">Projects & Github Links</h2>
              <p className="font-serif text-sm text-gray-400">Checkout the hosted pages along with the github code</p>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              <article className="flex flex-col bg-transparent">
                <Link rel="noopener noreferrer" to="https://github.com/Abhishekkulkarni1997/PaytmClone" aria-label="Te nulla oportere reprimique his dolorum">
                  <img alt="" className="object-cover w-full h-52 bg-gray-500" src={require('../resources/paytmclone.jpg')} />
                </Link>
                <div className="flex flex-col flex-1 p-6">
                  <Link rel="noopener noreferrer" to="https://github.com/Abhishekkulkarni1997/PaytmClone" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                  <Link rel="noopener noreferrer" to="https://github.com/Abhishekkulkarni1997/PaytmClone" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Hit me Up</Link>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Paytm Clone</h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                    <span>Live &#128308;</span>
                    <span className='hover:text-violet-400 cursor-pointer'><Link to="https://github.com/Abhishekkulkarni1997/PaytmClone">GitHub Code</Link></span>
                  </div>
                </div>
              </article>
              <article className="flex flex-col bg-gray-900">
                <Link rel="noopener noreferrer" to="https://rodeclonefsjs.netlify.app/" aria-label="Te nulla oportere reprimique his dolorum">
                  <img alt="" className="object-cover w-full h-52 bg-gray-500" src={require('../resources/rodeclone.jpg')} />
                </Link>
                <div className="flex flex-col flex-1 p-6">
                  <Link rel="noopener noreferrer" to="https://rodeclonefsjs.netlify.app/" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                  <Link rel="noopener noreferrer" to="https://rodeclonefsjs.netlify.app/" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Hit me Up</Link>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Rode Clone</h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                  <span>Live &#128994;</span>
                  <span className='hover:text-violet-400 cursor-pointer'><Link to="https://github.com/Abhishekkulkarni1997/rodeClone">GitHub Code</Link></span>
                  </div>
                </div>
              </article>
              <article className="flex flex-col bg-gray-900">
                <Link rel="noopener noreferrer" to="https://project15-productdesign-landing-page.netlify.app/" aria-label="Te nulla oportere reprimique his dolorum">
                  <img alt="" className="object-cover w-full h-52 bg-gray-500" src={require('../resources/productdesign.jpg')} />
                </Link>
                <div className="flex flex-col flex-1 p-6">
                  <Link rel="noopener noreferrer" to="https://project15-productdesign-landing-page.netlify.app/" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                  <Link rel="noopener noreferrer" to="https://project15-productdesign-landing-page.netlify.app/" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Hit me Up</Link>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Product Design Landing Page</h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                  <span>Live &#128994;</span>
                  <span className='hover:text-violet-400 cursor-pointer'><Link to="https://github.com/Abhishekkulkarni1997/project-15-Product-Design-Landing-Page">GitHub Code</Link></span>
                  </div>
                </div>
              </article>
              <article className="flex flex-col bg-gray-900">
                <Link rel="noopener noreferrer" to="https://project12-business-landingpage.netlify.app/" aria-label="Te nulla oportere reprimique his dolorum">
                  <img alt="" className="object-cover w-full h-52 bg-gray-500" src={require('../resources/SAAS.jpg')} />
                </Link>
                <div className="flex flex-col flex-1 p-6">
                  <Link rel="noopener noreferrer" to="https://project13-saaslanding-page.netlify.app/" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                  <Link rel="noopener noreferrer" to="https://project13-saaslanding-page.netlify.app/" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Hit me Up</Link>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">SAAS Landing Page</h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                  <span>Live &#128994;</span>
                  <span className='hover:text-violet-400 cursor-pointer'><Link to="https://github.com/Abhishekkulkarni1997/project-13-SAAS-landing-page">GitHub Code</Link></span>
                  </div>
                </div>
              </article>
            </div>
            <div className="space-y-2 text-center">
              <button className="font-serif text text-[#f5f5f5] hover:text-violet-400"><Link to="https://github.com/Abhishekkulkarni1997"> More Projects</Link></button>
            </div>
          </div>
        </section>
  )
}

export default Projectssection

