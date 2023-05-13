import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


import App from './App'
import Athletes from './components/Athletes'
import Updates from './components/Updates'
import Socials from './components/Socials'

import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Link className='nav-logo' to='/'>#JiuJistics</Link>
    <nav className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/athletes'>Athletes</Link>
      <Link to='/updates'>Updates</Link>
      <Link to='/socials'>Socials</Link>
    </nav>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/athletes' element={<Athletes />} />
        <Route path='/updates' element={<Updates />} />
        <Route path='/socials' element={<Socials />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
