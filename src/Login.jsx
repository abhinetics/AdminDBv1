import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && token !== "undefined") {
      // Redirect to the dashboard page if token is already present
      window.location.href = "/dashboard";
    }
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/admin/login", { username, password });
      console.log("response is:", res);
      console.log("data is:", res.data);
      console.log("data is:", JSON.stringify(res.data));
      console.log("token is:", res.data.token);
      console.log("userID is:", res.data.userID); 
      
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.userID);
      if(res.data.token) {
      window.location.href = "/dashboard"; // Redirect to the dashboard page on successful login
      }
    } catch (err) {
      console.log(err.response.data); // Log any errors to the console
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
