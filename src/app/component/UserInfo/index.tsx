import AuthContext from "../../../context/AuthContext";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { useContext } from "react";
import store from "../../../stores/userStore";

const FormUserInfo: React.FC = () => {
  const auth = useContext(AuthContext);
  useEffect(() => {
    store.getUser(auth?.token);
  }, []);
  return (
    <form>
      <h2>Information about User</h2>
      <input type="text" name="email" value={store.user.email} disabled />
      <input
        name="phone"
        type="text"
        value={store.user.phone}
        required
        onChange={(e) => store.addFieldUser(e)}
      />
      <input
        name="name"
        type="text"
        value={store.user.name}
        required
        onChange={(e) => store.addFieldUser(e)}
      />
      <input
        name="age"
        type="text"
        value={store.user.age}
        required
        onChange={(e) => store.addFieldUser(e)}
      />
      <input
        name="addInf"
        type="text"
        value={store.user.addInf}
        required
        onChange={(e) => store.addFieldUser(e)}
      />
      <button
        onClick={async (event) => {
          event.preventDefault();
          console.log(store.user);
          store.updateUser(auth?.token);
        }}
      >
        Update Profil
      </button>
    </form>
  );
};

export default observer(FormUserInfo);
