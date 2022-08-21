import React, { useContext } from "react";
import FormRestorePassword from "../../app/component/Auth/FormRestorePassword";
import AuthContext from "../../context/AuthContext";

const Profil = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <h2>Profil</h2>
      {localStorage.getItem("userData")}
    </div>
  );
};

export default Profil;
