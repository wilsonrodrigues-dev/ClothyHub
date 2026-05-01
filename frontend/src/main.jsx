import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.scss"
import App from './app/App.jsx'
import { AuthContextProvider } from './features/auth/auth.context.jsx'


createRoot(document.getElementById('root')).render(

    <AuthContextProvider>
      <App />
    </AuthContextProvider>

)
