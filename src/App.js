import React, { useCallback, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import AuthContext from "./context/authContext";
import routes from "./routes";
import "./App.css";
import FirebaseDatas from "./FirebaseDatas";
import CounterContext from "./context/CounterContext";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState({});

  const router = useRoutes(routes);
  let card = 0;
  if (JSON.parse(localStorage.getItem("cards"))) {
    card = JSON.parse(localStorage.getItem("cards")).length
      ? JSON.parse(localStorage.getItem("cards")).length
      : 0;
  }
  const [count, setCount] = useState(card);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const login = (userInfos, token) => {
    setToken(token);
    setIsLoggedIn(true);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token }));
  };

  const logout = useCallback(() => {
    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");
  });

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      fetch(`http://localhost:4000/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          setIsLoggedIn(true);
          setUserInfos(userData);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, [login, logout]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userInfos,
        login,
        logout,
      }}
    >
      <CounterContext.Provider
        value={{
          count,
          incrementCount,
        }}
      >
        {/* <FirebaseDatas></FirebaseDatas> */}
        {router}
      </CounterContext.Provider>
    </AuthContext.Provider>
  );
}
