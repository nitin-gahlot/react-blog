import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Bollywood from './components/Bollywood'
import Fitness from './components/Fitness'
import Hollywood from './components/Hollywood'
import Home from './components/Home'
import Technology from './components/Technology'
import Food from './components/Food'
import './App.css'
import Navbar from './components/Navbar'



const App = () => {
  return (

    <div>
      <BrowserRouter>
      <Navbar />
      

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/hollywood" element={<Hollywood />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/food" element={<Food />} />

        </Routes>

      </BrowserRouter>


    </div>

  )
}

export default App