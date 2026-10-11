import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
      
      <nav className='flex gap-4 right-0 inline-content-center'>
        <h1 className='text-2xl font-bold'>Cinemax</h1>
        <ul className='flex gap-4 inline-content-center'>
          <li><a href="/" className='hover:text-gray-300'>Home</a></li>
          <li><a href="/movies" className='hover:text-gray-300'>Movies</a></li>
          <li><a href="/rated" className='hover:text-gray-300'>Top Rated</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
