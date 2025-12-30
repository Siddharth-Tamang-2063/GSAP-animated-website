import React, { useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Agence from './Pages/Agence'

const App = () => {
  
  
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/projects" element ={<Projects/>}></Route>
        <Route path="/agence" element ={<Agence/>}></Route>
    </Routes>
</div>
  
  )
}

export default App
