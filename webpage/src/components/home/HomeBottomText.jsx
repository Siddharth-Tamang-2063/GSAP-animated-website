import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] text-[6vw] uppercase flex items-center justify-center gap-4'>
      <Link className='border-3 pb-0 px-5 rounded-full hover:borer-[#D3FD50] hover:text-[#D3FD50] ' to="/projects">Projects</Link>
      <Link className='border-3 pb-0 px-5 rounded-full hover:borer-[#D3FD50] hover:text-[#D3FD50] ' to="/agence">Agence</Link>
    </div>
  )
}

export default HomeBottomText
