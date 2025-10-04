import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './assets/Navbar'
import Live from './assets/Link'
import './index.css'
import Slides from './assets/Slides'
import Homepage from './assets/Homepage'
import Player from './assets/Player'



const App = () => {
  return (
    <div>




      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/play' element={<Player />} />
        <Route path='/link' element={<Live />} />
        <Route path='/slide' element={<Slides/>} />
      


      </Routes>
    </div>
  )
}

export default App
