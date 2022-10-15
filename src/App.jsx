import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './componentes/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        {/* <h1>App</h1> */}
        <Outlet/>
        </div>
    </div>
  )
}

export default App
