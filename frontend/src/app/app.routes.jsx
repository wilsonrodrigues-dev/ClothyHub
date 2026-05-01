import {createBrowserRouter} from 'react-router-dom'
import Register from '../features/auth/pages/Register'
import Login from '../features/auth/pages/Login'
import Home from '../features/Home/home'
import Sellerdashboard from '../features/sellerdashboard/Sellerdashboard'

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Home />
    },
    {
        path:"/sellerdashboard",
        element:<Sellerdashboard />
    },
    {
        path:"/register",
        element:<Register />
    },
    {
        path:"/login",
        element:<Login />
    },
])

