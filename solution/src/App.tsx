import React from "react";
import Login from "./components/Login";
import Market from "./components/Market";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "./global/context";
import AuthRoute from "./helper/AuthRoute";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const login = (token: string) => {
    console.log("Logging in");
    localStorage.setItem("token", token);
    return <Redirect to="/" />;
  };

  const logout = () => {
    console.log("Logging out");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <AuthRoute exact path="/" component={Market} />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
