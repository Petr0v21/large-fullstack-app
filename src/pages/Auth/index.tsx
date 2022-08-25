import React, { useContext, useState } from "react";

import FormLogIn from "../../app/component/Auth/FormLogIn";
import FormSignUp from "../../app/component/Auth/FormSignUp";
import FormRestorePassword from "../../app/component/Auth/FormRestorePassword";
import AuthContext from "../../context/AuthContext";

const Auth = () => {
  const [logIn, setLogIn] = useState(true);
  const auth = useContext(AuthContext);
  return (
    <div>
      <h2>Auth</h2>
      {logIn ? <FormLogIn /> : <FormSignUp />}
      <label onClick={() => setLogIn(!logIn)}>
        {logIn ? "Sign Up" : "Log In"}
      </label>

      {/* <FormRestorePassword /> */}
    </div>
  );
};

export default Auth;
