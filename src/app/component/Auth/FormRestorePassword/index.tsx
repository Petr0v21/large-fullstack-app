import { observer } from "mobx-react";
import React from "react";
import store from "../../../../stores/authStore";

const FormRestorePassword: React.FC = () => {
  console.log(store.id);
  if (store.id) {
    return (
      <form>
        <h2>Restore Password</h2>
        <label>Input code from mail</label>
        <input
          name="code"
          type="text"
          value={store.code}
          required
          onChange={(e) => store.addCode(e.target.value)}
        />
        <label>Input password</label>
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
            store.restorePassword();
          }}
        >
          Sent Email
        </button>
      </form>
    );
  } else {
    return (
      <form>
        <h2>Restore Password</h2>
        <label>Input email</label>
        <input
          name="email"
          type="email"
          value={store.user.email}
          required
          onChange={(e) => store.addField(e.target.value, e.target.name)}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            store.checkEmail();
          }}
        >
          Sent Email
        </button>
      </form>
    );
  }
};

export default observer(FormRestorePassword);
