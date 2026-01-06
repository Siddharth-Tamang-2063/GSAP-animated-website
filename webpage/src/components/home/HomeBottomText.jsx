import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='lg:-mt-10 -mt-15  mb-2 font-[font2] text-[7vw]  lg:text-[6vw] uppercase flex items-center justify-center gap-4'>
      <Link className='border-3 pb-0 lg:px-5 px-2 rounded-full hover:borer-[#D3FD50] hover:text-[#D3FD50] ' to="/projects">Projects</Link>
      <Link className='border-3 pb-0 lg:px-5 px-2  rounded-full hover:borer-[#D3FD50] hover:text-[#D3FD50] ' to="/agence">Agence</Link>
    </div>
  )
}

export default HomeBottomText
