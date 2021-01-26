import { createContext } from "react";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  return (
    <DataContext.Provider
      value={{
        name: "Arjun Ghimire",
        address: "Butwal Rupandehi",
        phone: 9840122530,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext };

export default DataContextProvider;
