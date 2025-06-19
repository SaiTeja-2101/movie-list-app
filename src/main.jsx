import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/movie-list-app/">
    <App />
  </BrowserRouter>,
)
