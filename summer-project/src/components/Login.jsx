import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { useState } from "react";

function Login() {
  //{ getData }
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [details, setDetails] = useState([
    {
      user: "",
      pass: "",
      // loggedIn: false,
    },
  ]);

  const postData = async () => {
    await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: text,
        pass: password,
      }),
    });
  };

  const fetchData = async () => {
    const response = await fetch("/friends", {
      method: "GET",
    });

    const data = await response.json();
    setDetails(data);
    // getData(details);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    fetchData();
  };

  const handleTextSubmit = (e) => {
    setText(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Please enter your sign in details: </h2>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            className="input-group"
            onChange={handleTextSubmit}
            type="text"
            placeholder="Enter your username"
            value={text}
          />
          <br />
          <input
            className="input-group"
            onChange={handlePasswordSubmit}
            type="password"
            placeholder="Enter your password"
            value={password}
          />
          <br />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
