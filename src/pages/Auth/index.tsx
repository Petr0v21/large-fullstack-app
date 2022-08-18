import React from "react";
import FormLogIn from "../../app/component/Auth/FormLogIn";
import FormSignUp from "../../app/component/Auth/FormSignUp";
import FormRestorePassword from "../../app/component/Auth/FormRestorePassword";

const Auth = () => {
  return (
    <div>
      <h2>Auth</h2>
      {/* <FormLogIn />
      <FormSignUp /> */}
      <FormRestorePassword />
    </div>
  );
};

export default Auth;
