import React, { useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Agence from './Pages/Agence'
import NavPage from './Pages/NavPage'
import Navbar from './components/home/Navbar'

const App = () => {
  
  
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <NavPage/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/projects" element ={<Projects/>}></Route>
        <Route path="/agence" element ={<Agence/>}></Route>
        <Route path="/navigation" element={<NavPage/>}></Route>
    </Routes>
</div>
  
  )
}

export default App
