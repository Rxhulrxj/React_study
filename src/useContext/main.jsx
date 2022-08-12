import React, { useState } from "react";
import Auth from "./auth";
import AuthContext from "./auth-context";
 
const Contextmain = () => {
  //using the state to dynamicallly pass the values to the context
 
  const [authstatus, setauthstatus] = useState(false);
  const login = () => {
    setauthstatus(true);
  };
  return (
    <React.Fragment>
      <AuthContext.Provider value={{ status: authstatus, login: login }}>
        <Auth />
      </AuthContext.Provider>
    </React.Fragment>
  );
};
export default Contextmain;