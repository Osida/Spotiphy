import React, { createContext, useContext, useReducer } from "react";

// prepares the data layer
export const DataLayerContext = createContext();

// this is the actual data layer
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

// method of getting or dispatching to the data layer (gaining access to the data layer)
export const useDataLayerValue = () => useContext(DataLayerContext);
