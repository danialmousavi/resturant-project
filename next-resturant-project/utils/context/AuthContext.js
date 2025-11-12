"use client"

import { me } from "../actions/Auth";

const { createContext, useState, useEffect } = require("react");

const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [user,setUser]=useState();
    useEffect(() => {
        const checkUserLoggedIn = async () => {
            const data = await me();
            console.log("data",data);
            
            if (data?.error) {
                setUser(null)
            } else {
                setUser(data.user)
            }
        }

        checkUserLoggedIn();
    }, [])

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