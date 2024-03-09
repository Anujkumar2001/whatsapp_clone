import React, { useState, createContext, useContext } from "react";

const MyContext = createContext();

function ContextProvider({ children }) {
  const [myState, setMyState] = useState("raju");

  return (
    <MyContext.Provider value={{ myState, setMyState }}>
      {children}
    </MyContext.Provider>
  );
}

export const useMyContext = () => {
  return useContext(MyContext);
};

export default ContextProvider;
