import React, {useState, createContext} from 'react';

//1. Create Context
//2. Create Provider

const ThemeContext = createContext()

function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    const value = {theme, toggleTheme}

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export {ThemeProvider, ThemeContext};