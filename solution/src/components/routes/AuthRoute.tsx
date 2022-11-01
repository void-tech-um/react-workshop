import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";

const AuthRoute = ({ component: Component, ...rest }: any) => {
  const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }

    try {
      const { exp } = decode(token) as { exp: number };
      if (exp < new Date().getTime() / 1000) {
        return false;
      }
    } catch (e) {
      return false;
    }

    return true;
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

export default AuthRoute;
