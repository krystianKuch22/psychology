import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider({children}){
    const [language, setLanguage] = useState('pl');

    const changeLanguage = (lang) => setLanguage(lang)

    return(
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)