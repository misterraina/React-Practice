import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="bg-lightest-dark dark:bg-customPurple text-black flex dark:text-white p-6 font-raleway">
      <div className="container mx-auto text-center">
        {/* <p className="mb-4">© 2024 My Website</p> */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#about" className="hover:underline">About Me</a>
          <a href="https://github.com/misterraina" target='blank' className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/aayush-raina/" target='blank' className="hover:underline">LinkedIn</a>
          <a href="https://portfolio-website-phi-one-97.vercel.app/" target='blank' className="hover:underline">Portfolio</a>
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        </div>
        <hr className="border-t-2 border-gray-500 my-4 mx-auto w-1/2" />

        <p className="text-sm">© 2024 My Website. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
