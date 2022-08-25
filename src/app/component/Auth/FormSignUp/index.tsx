import { observer } from "mobx-react";
import React from "react";
import store from "../../../../stores/authStore";

const FormSignUp: React.FC = () => {
  return (
    <form>
      <h2>Sign Up</h2>
      <input
        name="email"
        type="email"
        placeholder="email"
        value={store.user.email}
        required
        onChange={(e) => store.addField(e.target.value, e.target.name)}
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        value={store.user.password}
        required
        onChange={(e) => store.addField(e.target.value, e.target.name)}
      />
      <input
        name="phone"
        type="text"
        placeholder="phone"
        value={store.user.phone}
        required
        onChange={(e) => store.addField(e.target.value, e.target.name)}
      />
      <input
        name="name"
        type="text"
        placeholder="name"
        value={store.user.name}
        required
        onChange={(e) => store.addField(e.target.value, e.target.name)}
      />
      <input type="checkbox" required />
      <button
        onClick={(event) => {
          // event.preventDefault();
          store.signUp();
        }}
      >
        SignUp
      </button>
    </form>
  );
};

export default observer(FormSignUp);
