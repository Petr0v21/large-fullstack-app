import AuthContext from "../../../context/AuthContext";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { useContext } from "react";
import store from "../../../stores/userStore";
import { InputComponentChildren } from "app/styled-components/Input";
import { Button } from "app/styled-components/Button";

const FormUserInfo: React.FC = () => {
  const auth = useContext(AuthContext);
  useEffect(() => {
    store.getUser(auth?.token);
  }, []);
  return (
    <form
      className="profil-userinfo-form"
      onSubmit={async (event) => {
        event.preventDefault();
        store.updateUser(auth?.token);
      }}
    >
      <h2>Information about User</h2>
      <InputComponentChildren size="medium">
        <input type="text" name="email" value={store.user.email} disabled />
      </InputComponentChildren>
      <InputComponentChildren size="medium">
        <input
          name="phone"
          type="text"
          value={store.user.phone}
          required
          onChange={(e) => store.addFieldUser(e)}
        />
      </InputComponentChildren>
      <InputComponentChildren size="medium">
        <input
          name="name"
          type="text"
          value={store.user.name}
          required
          onChange={(e) => store.addFieldUser(e)}
        />
      </InputComponentChildren>
      <InputComponentChildren size="medium">
        <input
          name="age"
          type="text"
          value={store.user.age}
          required
          onChange={(e) => store.addFieldUser(e)}
        />
      </InputComponentChildren>
      <InputComponentChildren size="medium">
        <input
          name="addInf"
          type="text"
          value={store.user.addInf}
          required
          onChange={(e) => store.addFieldUser(e)}
        />
      </InputComponentChildren>
      <Button>Update Profil</Button>
    </form>
  );
};

export default observer(FormUserInfo);
