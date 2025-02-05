import { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import { TOKEN } from "../constants";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(Cookies.get(TOKEN))
  );

  const state = {
    isAuthenticated,
    setIsAuthenticated,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthContextProvider;
