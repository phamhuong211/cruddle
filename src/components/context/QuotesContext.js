import React, {useState, createContext} from 'react';

//1. Create Context
//2. Create Provider

const QuotesContext = createContext()

function QuotesProvider({children}) {
    const [data, setData] = useState('hello')

    const handleChangeQuote = (props) => {
        setData(props)
    }

    const value = {data, handleChangeQuote}

    return (
        <QuotesContext.Provider value={value}>
            {children}
        </QuotesContext.Provider>
    );
}

export {QuotesProvider, QuotesContext};