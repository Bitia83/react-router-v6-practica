import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'


const Inicio = () => {

  const {user, signIn, signOut}=useContext(UserContext)
  return (
    <div>
      <h1>inicio</h1>
      <h2>{user ? "conectado" : "desconectado"}</h2>
      {
        user ? (
          <>
          <button className='btn btn-primary' onClick={signOut}>Desconectar</button>
          <Link to="/protegida" className="btn btn-warning" >Ruta Protegida</Link>
          </>
            ) : (
      
            <button className = 'btn btn-primary' onClick = {signIn}>acceder</button>
  )
}
    </div>
  )
}

export default Inicio
