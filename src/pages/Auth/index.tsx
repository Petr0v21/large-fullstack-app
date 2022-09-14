import React, { useContext, useState } from "react";
import FormLogIn from "../../app/component/Auth/FormLogIn";
import FormSignUp from "../../app/component/Auth/FormSignUp";
import FormRestorePassword from "../../app/component/Auth/FormRestorePassword";
import AuthContext from "../../context/AuthContext";
import { Route, Routes } from "react-router-dom";
import Header from "../../app/component/Header";
import Footer from "../../app/component/Footer";

const Auth = () => {
  const [logIn, setLogIn] = useState(true);
  const [recoverPas, setRecoverPas] = useState(false);
  const auth = useContext(AuthContext);
  if (recoverPas) {
    return <FormRestorePassword />;
  }
  return (
    <>
      <Header back={true} />
      <div className="authpage">
        <Routes>
          <Route path="*" element={<FormLogIn />} />
          <Route path="signup" element={<FormSignUp />} />
          <Route path="restore" element={<FormRestorePassword />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Auth;
