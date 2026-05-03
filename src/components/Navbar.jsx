import React from 'react'
import { RiMailSendLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className='w-[80%] flex items-center justify-between p-4 '>
      <a href='mailto:dev2003.rajput@gmail.com' className='flex items-center space-x-7 hover:bg-gray-200 px-4 py-2 rounded-full cursor-pointer transition duration-300'>
        <RiMailSendLine className='text-2xl' />
        <span>dev2003.rajput@gmail.com</span>
      </a>
      <div className='flex space-x-4'>
        <button className='hover:bg-gray-200 px-4 py-2 rounded-full'>Work</button>
        <button className='hover:bg-gray-200 px-4 py-2 rounded-full'>Resume</button>
        <button className='hover:bg-gray-200 px-4 py-2 rounded-full'>Services</button>
        <button className='hover:bg-gray-200 px-4 py-2 rounded-full'>Contact</button>
      </div>
    </div>
  )
}

export default Navbar