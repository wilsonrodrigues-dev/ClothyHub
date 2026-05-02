import React from 'react'
import { useauth } from '../auth/Hooks/useauth'
import { Navigate } from 'react-router-dom'


const Home = () => {
  const {user}=useauth()

  if(user.role!=="buyer"){
    return <Navigate to={"/sellerdashboard"} replace/>
  }
  return (
    <div>
        Welcome to the ClothyHub
    </div>
  )
}

export default Home