import {createBrowserRouter} from 'react-router-dom'
import Register from '../features/auth/pages/Register'
import Login from '../features/auth/pages/Login'
import Home from '../features/Home/home'
import Sellerdashboard from '../features/sellerdashboard/Sellerdashboard'
import Protected from '../features/auth/authcomponents/Protected'
import SelectRole from '../features/auth/authcomponents/SelectRole'

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Protected> <Home /> </Protected> 
    },
    {
        path:"/sellerdashboard",
        element:<Protected><Sellerdashboard /></Protected>
    },
    {
        path:"/register",
        element:<Register />
    },
    {
        path:"/login",
        element:<Login />
    },
    {
        path:"/select-role",
        element:<SelectRole />
    }
])

