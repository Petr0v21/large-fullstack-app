import { observer } from "mobx-react";
import React from "react";
import store from "../../../../stores/authStore";
import { InputComponentChildren } from "../../../styled-components/Input";
import { Button } from "../../../styled-components/Button";
import { Link } from "react-router-dom";

const FormRestorePassword: React.FC = (props) => {
  console.log(store.id);
  if (store.id) {
    return (
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await store.restorePassword();
        }}
      >
        <h2>Restore Password</h2>
        <label>Input code from mail</label>
        <InputComponentChildren size="medium">
          <input
            name="code"
            type="text"
            value={store.code}
            required
            onChange={(e) => store.addCode(e.target.value)}
          />
        </InputComponentChildren>
        <label>Input password</label>
        <InputComponentChildren size="medium">
          <input
            name="password"
            type="password"
            value={store.user.password}
            required
            onChange={(e) => store.addField(e.target.value, e.target.name)}
          />
        </InputComponentChildren>
        <Button>Sent Email</Button>
        <Link to="/profil">Go Back</Link>
      </form>
    );
  } else {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          store.checkEmail();
        }}
      >
        <h2>Restore Password</h2>
        <label>Input email</label>
        <InputComponentChildren size="medium">
          <input
            name="email"
            type="email"
            value={store.user.email}
            required
            onChange={(e) => store.addField(e.target.value, e.target.name)}
          />
        </InputComponentChildren>
        <Button>Sent Email</Button>
        <Link to="/profil">Go Back</Link>
      </form>
    );
  }
};

export default observer(FormRestorePassword);
