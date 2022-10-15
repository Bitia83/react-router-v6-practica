import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <Link to="/" className='btn btn-outline-primary'>inicio</Link>
      <Link to="/blog" className='btn btn-outline-primary'>blog</Link>
      <Link to="/contacto" className='btn btn-outline-primary'>contacto</Link>
      
    </nav>
  )
}

export default Navbar
