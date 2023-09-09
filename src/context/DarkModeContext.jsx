import { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext()

export const DarkModeContextProvider= ({children})=>{
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false
    );

    const toggel =()=>{
        setDarkMode(!darkMode);
    }

    useEffect (() =>{
        localStorage.setItem("darkMode", darkMode)
    }, [])


    return (
        <DarkModeContext.Provider value={{darkMode, toggel}}>{children}</DarkModeContext.Provider>
    )
}