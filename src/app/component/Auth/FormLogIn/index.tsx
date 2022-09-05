import AuthContext from "../../../../context/AuthContext";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { useContext } from "react";
import store from "../../../../stores/authStore";
import { Button } from "app/styled-components/Button";
import { InputComponentChildren } from "app/styled-components/Input";
import eyeShow from "@/static/images/Show.svg";
import eyeHide from "@/static/images/Hide.svg";
import { Link } from "react-router-dom";

const FormLogIn: React.FC = () => {
  const auth = useContext(AuthContext);
  const [show, setShow] = useState(false);
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await store.logIn();
        if (store.token) auth?.login(store.token, store.name);
      }}
    >
      <h2>Log In</h2>
      <InputComponentChildren size="medium">
        <input
          type="email"
          name="email"
          placeholder="email"
          value={store.user.email}
          required
          onChange={(e) => store.addField(e.target.value, e.target.name)}
        />
      </InputComponentChildren>
      <InputComponentChildren size="medium">
        <input
          name="password"
          type={show ? "text" : "password"}
          placeholder="password"
          value={store.user.password}
          required
          onChange={(e) => store.addField(e.target.value, e.target.name)}
        />
        <img
          src={show ? eyeShow : eyeHide}
          alt="eye"
          onClick={() => setShow(!show)}
        />
      </InputComponentChildren>
      <Button>LogIn</Button>
      <Link to="signup">Sign Up</Link>
      <Link to="restore">Forgot password</Link>
    </form>
  );
};

export default observer(FormLogIn);
