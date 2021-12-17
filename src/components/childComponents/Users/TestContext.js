import React, { createContext, useContext, useReducer } from 'react';
import { object, func } from 'prop-types'

export const TestContext = createContext()

function TestProvider({reducer, initialState ={}, children}) {
    const value = useReducer(reducer, initialState);

    return (
        <TestContext.Provider value={value}>
            {children}
        </TestContext.Provider>
    );
}

TestProvider.propTypes = {
    reducer: func,
    initialState: object,
}


export function useTestContext() {
    return useContext(TestContext)
}
export default TestProvider;
