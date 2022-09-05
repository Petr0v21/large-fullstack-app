import React, { useContext, useState } from "react";
import FormLogIn from "../../app/component/Auth/FormLogIn";
import FormSignUp from "../../app/component/Auth/FormSignUp";
import FormRestorePassword from "../../app/component/Auth/FormRestorePassword";
import AuthContext from "../../context/AuthContext";
import { Route, Routes } from "react-router-dom";

const Auth = () => {
  const [logIn, setLogIn] = useState(true);
  const [recoverPas, setRecoverPas] = useState(false);
  const auth = useContext(AuthContext);
  if (recoverPas) {
    return <FormRestorePassword />;
  }
  return (
    <div className="authpage">
      <h2>Auth</h2>
      <Routes>
        <Route path="*" element={<FormLogIn />} />
        <Route path="signup" element={<FormSignUp />} />
        <Route path="restore" element={<FormRestorePassword />} />
      </Routes>
    </div>
  );
};

export default Auth;
