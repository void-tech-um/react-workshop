import React from "react";
import Login from "./components/Login";
import Market from "./components/Market";
import "bootstrap/dist/css/bootstrap.min.css";

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
