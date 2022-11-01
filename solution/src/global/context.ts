import * as React from "react";

export const AuthContext = React.createContext({
  login: (token: string) => {},
  logout: () => {},
});
