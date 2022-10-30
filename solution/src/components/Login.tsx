import React, { useState } from "react";
import Api from "../helper/api";

interface LoginProps {
  setToken: (token: string) => void;
}

const Login = ({ setToken }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const api = new Api();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await api.login(username, password);
      console.log(res);
      setToken(res.token);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="form-control"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block mb-4">
        Sign in
      </button>
    </form>
  );
};

export default Login;
