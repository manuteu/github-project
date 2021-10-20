import React, { useState, createContext } from 'react';

export const context = createContext();

export const ContextProvider = (props) => {
  const [userData, setUsetData] = useState({});

  return (
    <context.Provider
      value={{
        userData,
        setUsetData,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
