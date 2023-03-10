import React, { createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState(true);

  return (
    <AuthContext.Provider value={{ setIsAuth, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
