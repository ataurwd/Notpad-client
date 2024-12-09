import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Route from './routes/Route.jsx'
import UserContext from './Context/UserContext.jsx'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <Route />
      <Toaster/>
    </UserContext>
  </StrictMode>,
)
