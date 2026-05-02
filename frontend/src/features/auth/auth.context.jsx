import { createContext, useState } from "react";

export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    return (<AuthContext.Provider value={{loading,setLoading,user,setUser}}>{children}</AuthContext.Provider>)
}