import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'

const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Navbar/>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
         </Routes>
      
      
      </BrowserRouter>
    </div>
  )
}

export default App