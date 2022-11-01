import React from "react";
import Login from "./components/Login";
import Market from "./components/Market";
import { BrowserRouter, Switch } from "react-router-dom";
import { AuthContext } from "./global/context";
import { AuthRoute, LoginRoute } from "./components/routes/CustomRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const login = (token: string) => {
    console.log("Logging in");
    localStorage.setItem("token", token);
    window.location.href = "/";
  };

  const logout = () => {
    console.log("Logging out");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      <BrowserRouter>
        <Switch>
          <LoginRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/" component={Market} />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
