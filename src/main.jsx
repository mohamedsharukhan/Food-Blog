import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'

import Login from './Login'
import Footer from './Footer'
import NavComponent from './NavComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <NavComponent />
    
    <Login />
    <App />

    <Footer />

  </React.StrictMode>,
)
