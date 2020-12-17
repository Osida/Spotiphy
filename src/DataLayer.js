import React, { createContext, useContext, useReducer } from "react";

// prepares the data layer (state provider)
export const DataLayerContext = createContext();

// this creates the ACTUAL data layer
export const DataLayer = ({ reducer, initialState, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

// method of getting/dispatching to the data layer
// (basically method to gain access to the data layer)
export const useDataLayerValue = () => useContext(DataLayerContext);
