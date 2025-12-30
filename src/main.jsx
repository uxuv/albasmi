import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home'

import { BrowserRouter, Route, Routes} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/Dashboard' element={ <Dashboard/> }/>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
