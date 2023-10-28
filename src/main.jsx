import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import WebRoutes from './routes/index.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <WebRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
