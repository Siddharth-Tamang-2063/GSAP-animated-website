import React, { createContext, useState } from 'react'
export const NavContext = createContext()
const Context = ({children}) => {
    
    const [navOpen, setnavOpen] = useState(false)
  return (
    <div>
        <NavContext.Provider value={[navOpen , setnavOpen]}>
             {children}
        </NavContext.Provider>
     
    </div>
  )
}

export default Context
