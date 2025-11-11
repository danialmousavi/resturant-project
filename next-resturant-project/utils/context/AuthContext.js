"use client"
const { createContext, useState } = require("react");

const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [user,setUser]=useState();
    const loginContext=(value)=>{
        setUser(value)
    }
    return(
            <AuthContext.Provider value={{user , loginContext}}>
                {children}
            </AuthContext.Provider>
    )
}
export default AuthContext