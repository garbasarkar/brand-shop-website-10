import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './PrivateRouter/PrivateRouter.jsx'
import PrivateAuth from './PrivateAuth/PrivateAuth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrivateAuth>
    <RouterProvider router={router} />
    </PrivateAuth>
  </React.StrictMode>,
)
