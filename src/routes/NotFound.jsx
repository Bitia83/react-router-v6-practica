import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>not found</h1>
      <Link to="/" className="btn btn-outline-primary"></Link>
    </div>
  )
}

export default NotFound
