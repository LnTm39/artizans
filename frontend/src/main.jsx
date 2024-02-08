import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './navigation/router'
import Header from './components/header/header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Router />
  </React.StrictMode>,
)
