import React, { useState, createContext } from 'react';

export const context = createContext();

export const ContextProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [repos, setRepos] = useState({});
  const [followers, setFollowers] = useState({});
  const [following, setFollowing] = useState({});
  const [infoFollower, setInfoFollower] = useState({});
  const [infoFollowing, setInfoFollowing] = useState({});

  return (
    <context.Provider
      value={{
        userData,
        repos,
        followers,
        following,
        infoFollower,
        infoFollowing,
        setUserData,
        setRepos,
        setFollowers,
        setFollowing,
        setInfoFollower,
        setInfoFollowing,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
