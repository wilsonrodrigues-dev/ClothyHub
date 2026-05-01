import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './app.routes.jsx'
const App = () => {
  return (

    <RouterProvider router={router}>App</RouterProvider>


  )
}

export default App