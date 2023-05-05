import React, { createContext, useState } from "react";

export const ThemeContext = createContext()

export default function ThemeContextProvider({children}) {
    const [isDark, setIsDark] = useState(true);
    const toggleMode = (() => {
        setIsDark((mode) => !mode)
    });

    return (
        <ThemeContext.Provider value={{isDark, toggleMode}}>
            {children}
        </ThemeContext.Provider>
    )
}