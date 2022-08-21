import React, { useContext } from "react";

import FormLogIn from "../../app/component/Auth/FormLogIn";
import FormSignUp from "../../app/component/Auth/FormSignUp";
import FormRestorePassword from "../../app/component/Auth/FormRestorePassword";
import AuthContext from "../../context/AuthContext";

const Auth = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <h2>Auth</h2>
      <FormLogIn />
      {/* <FormRestorePassword /> */}
    </div>
  );
};

export default Auth;
