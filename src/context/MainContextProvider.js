import React, { createContext, useState, useEffect } from "react";

const initialState = {
  selectedQuery: "",
  setSelectedQuery: () => {},
  queryResult: {},
  setQueryResult: () => {},
};

export const MainContext = createContext(initialState);

export const MainContextProvider = ({ children }) => {
  const [selectedQuery, setSelectedQuery] = useState("");
  const [queryResult, setQueryResult] = useState("");

  useEffect(() => {
    setQueryResult("");
  }, [selectedQuery]);

  return (
    <MainContext.Provider
      value={{ selectedQuery, setSelectedQuery, queryResult, setQueryResult }}
    >
      {children}
    </MainContext.Provider>
  );
};
