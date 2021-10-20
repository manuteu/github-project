import React, { useState, createContext } from 'react';

export const context = createContext();

export const ContextProvider = (props) => {
  const [userData, setUserData] = useState({});

  return (
    <context.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
