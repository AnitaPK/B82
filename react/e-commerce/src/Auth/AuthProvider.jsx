import React, { createContext } from 'react'


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    // complete the code 
  return (
    <AuthContext.Provider value={{user, setUser, login, logout}}>
        {children}</AuthContext.Provider>
  )
}

export default AuthProvider