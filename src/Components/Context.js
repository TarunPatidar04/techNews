import React, { useContext } from "react";

//1 context creation✅
const AppContext = React.createContext();

//2  create a provider function ✅
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={"Tarun Patidar"}>
      {children}
    </AppContext.Provider>
  );
};

//customm hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
//3 consumer lengthy remove ❌ replace to useContext hook ✅
//3 useContext hook
