import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
  return (
    <div className="fixed flex flex-col top-1/2 left-20 bg-gray-900 gap-5 p-3 rounded-full">
                <a href="#" className="text-white cursor-pointer hover:text-sky-300 transition delay-150
                duration-300 ease-in-out">
                <FontAwesomeIcon icon={faHome} /> 
                </a>
                <a href="#" className="text-white cursor-pointer hover:text-sky-300 transition delay-150
                duration-300 ease-in-out">
                <FontAwesomeIcon icon={faHome} /> 
                </a>
                <a href="#" className="text-white cursor-pointer hover:text-sky-300 transition delay-150
                duration-300 ease-in-out">
                <FontAwesomeIcon icon={faHome} /> 
                </a>
              
               
              
       
    </div>
  )
}
