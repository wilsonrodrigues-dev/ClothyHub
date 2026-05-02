import React from 'react'
import { useauth } from '../auth/Hooks/useauth'
import { Navigate } from 'react-router-dom'

const Sellerdashboard = () => {
  const {user}=useauth()
    if(user.role!=="seller"){
    return <Navigate to={"/"} replace/>
  }
  return (
    <div>Sellerdashboard</div>
  )
}

export default Sellerdashboard