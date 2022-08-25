import AuthContext from "../../../../context/AuthContext";
import { observer } from "mobx-react";
import React from "react";
import { useContext } from "react";
import store from "../../../../stores/authStore";

const FormLogIn: React.FC = () => {
  const auth = useContext(AuthContext);
  return (
    <form>
      <h2>Log In</h2>
      <input
        type="text"
        name="email"
        value={store.user.email}
        required
        onChange={(e) => store.addField(e.target.value, e.target.name)}
      />
      <input
        name="password"
        type="password"
        value={store.user.password}
        required
        onChange={(e) => store.addField(e.target.value, e.target.name)}
      />
      <button
        onClick={async (event) => {
          event.preventDefault();
          await store.logIn();
          if (store.token) auth?.login(store.token, store.name);
        }}
      >
        LogIn
      </button>
    </form>
  );
};

export default observer(FormLogIn);
