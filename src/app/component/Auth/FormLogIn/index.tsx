import { observer } from "mobx-react";
import React from "react";
import store from "../../../../stores/authStore";

const FormLogIn: React.FC = () => {
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
        onClick={(event) => {
          event.preventDefault();
          store.logIn();
        }}
      >
        LogIn
      </button>
    </form>
  );
};

export default observer(FormLogIn);
