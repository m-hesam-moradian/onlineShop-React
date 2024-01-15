import React, { useState } from "react";
import { API } from "../../FirebaseDatas";
import { useNavigate } from "react-router-dom";

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
