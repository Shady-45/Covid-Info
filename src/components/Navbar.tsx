import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    
    <nav className='flex items-center px-4  justify-between md:px-[5rem]  '>
      <Link to='/'>
        <h1 className='font-bold  text-2xl p-4  '>Covid-19 Tracker</h1>
      </Link>
   
   <ul className='flex items-center font-extrabold gap-4'> 
<Link to='/charts'>
<li className='cursor-pointer' >Chart</li>
</Link>
   

   <Link to='/maps'>
    <li className='cursor-pointer' >Map</li>
    </Link>
   </ul>
    </nav>
    
  )
}

export default Navbar