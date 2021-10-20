import React, { useState, createContext } from 'react';

export const context = createContext();

export const ContextProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [repos, setRepos] = useState({});
  const [followers, setFollowers] = useState({});
  const [following, setFollowing] = useState({});

  return (
    <context.Provider
      value={{
        userData,
        repos,
        followers,
        following,
        setUserData,
        setRepos,
        setFollowers,
        setFollowing,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
