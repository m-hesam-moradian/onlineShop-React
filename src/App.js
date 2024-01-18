import React, { useCallback, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import AuthContext from "./context/authContext";
import routes from "./routes";
import "./App.css";
// import FirebaseDatas from "./FirebaseDatas";
import CounterContext from "./context/CounterContext";



export const API = "http://localhost:3000/";
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
    setCount(JSON.parse(localStorage.getItem("cards")).length);
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
