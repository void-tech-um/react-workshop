import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Market from "./components/Market";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const setToken = (token: string) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return isLoggedIn ? (
    <Market logout={logout} />
  ) : (
    <Login setToken={setToken} />
  );
}

export default App;
