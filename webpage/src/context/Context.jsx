import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
export const NavContext = createContext()
export const NavcolourContext = createContext()
const Context = ({children}) => {
    const [navColour, setnavColour] = useState("white")
    const [navOpen, setnavOpen] = useState(false)

    const locate= useLocation().pathname
    
   useEffect(() => {
     if(locate=="/agence" || locate=="/projects"){
       setnavColour("black")
    }else{
      setnavColour("white")
    }
    
   }, [locate])
   
  return (
    <div className=''>
        <NavContext.Provider value={[navOpen , setnavOpen]}>
        <NavcolourContext.Provider value={[navColour, setnavColour]}>
 {children}
        </NavcolourContext.Provider>
        </NavContext.Provider>
     
    </div>
  )
}

export default Context
