import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Login.jsx'
import ResetPassword from './components/ResetPassword.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
  },
])
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
