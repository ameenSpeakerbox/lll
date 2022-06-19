import React, { createContext, useState } from 'react'

export const LanguageContext = createContext()

const LanguageSwitcher = ({ children }) => {
    const [Language, setLanguage] = useState("en")

        
    

    return <LanguageContext.Provider value={{ Language, setLanguage }}> {children} </LanguageContext.Provider>

}

export default LanguageSwitcher
