import React, { useState, useContext } from "react";
import { Context } from "../context";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { API_KEY, API_URL, SESSION_ID_URL } from "../config";

import API from "../API";
//styles
import { Wrapper } from "./Login.styles";
//context

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [_user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );
      setUser({  username, sessionId: sessionId.session_id });
      navigate("/");
    } catch (error) {
      setError(true);
    }

    //make API request
  };
  const handleInput = (e) => {
    //handle input
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    if (name === "username") {
      setUsername(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <Wrapper>
        {error&&<div style={{
          color: "red",
          fontSize: "1rem",
        }}>Invalid Username or Password!</div>}
      <label>Username : </label>
      <input
      style={{
        width: "20%",
        height: "25px",
        borderRadius: "5px",
        border: "1px solid black",
        padding: "5px",
        margin: "5px",

      }}
        type="text"
        value={username}
        name="username"
        onChange={handleInput}
      />
      <input    style={{
        width: "20%",
        height: "25px",
        borderRadius: "5px",
        border: "1px solid black",
        padding: "5px",
        margin: "5px",

      }}
        type="password"
        value={password}
        name="password"
        onChange={handleInput}
      />
      <Button text="Login" callback={handleSubmit} />
    </Wrapper>
  );
};

export default Login;
