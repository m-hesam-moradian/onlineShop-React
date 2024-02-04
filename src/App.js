import React, { useCallback, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import AuthContext from "./context/authContext";
import routes from "./routes";
import "./App.css";
// import FirebaseDatas from "./FirebaseDatas";
import CounterContext from "./context/CounterContext";

export const API = "https://mhm-jsonserver.liara.run/";
export default function App() {
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

  return (
    <CounterContext.Provider
      value={{
        count,
        incrementCount,
      }}
    >
      {/* <FirebaseDatas></FirebaseDatas> */}
      {router}
    </CounterContext.Provider>
  );
}
