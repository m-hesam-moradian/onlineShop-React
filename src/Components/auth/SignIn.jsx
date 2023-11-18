import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "../../FirebaseDatas";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "../../pages/Login/Login";
import { decode, jwtDecode } from "jwt-decode";
import { useEffect } from "react";

export const tokenLocalhost = ''
export const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API}/registered.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          token: email + "/" + password,
        }),
      });
      localStorage.setItem("token", email + "/" + password);
      //  tokenLocalhost = localStorage.getItem("token");
      // console.log(localStorage.getItem("token"));
      navigate(`/`);


    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};
