import React, {createContext,useContext,useReducer} from 'react';

// creating a DataLayer
export const StateContext = createContext();

// Higher Order Component
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);