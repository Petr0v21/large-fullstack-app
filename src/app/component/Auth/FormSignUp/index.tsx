import { observer } from "mobx-react";
import React, { useState } from "react";
import store from "../../../../stores/authStore";
import CheckBoxComponet from "../../../styled-components/SmallChecks";
import { Button } from "../../../styled-components/Button";
import { InputComponentChildren } from "../../../styled-components/Input";
import { Link } from "react-router-dom";

const FormSignUp: React.FC = (props) => {
  const [valid, setValid] = useState(false);
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        if (store.user.password.length >= 6) {
          await store.signUp();
        } else {
          setValid(true);
        }
      }}
    >
      <h2>Sign Up</h2>
      <InputComponentChildren size="medium">
        <input
          name="email"
          type="email"
          placeholder="email"
          value={store.user.email}
          required
          onChange={(e) => store.addField(e.target.value, e.target.name)}
        />
      </InputComponentChildren>
      <InputComponentChildren size="medium" invalid={valid}>
        <input
          name="password"
          type="password"
          placeholder="password"
          value={store.user.password}
          required
          onChange={(e) => {
            store.addField(e.target.value, e.target.name);
            setValid(false);
          }}
        />
      </InputComponentChildren>
      {valid && <label>Довжина пароля повинна бути більше за 6 символів</label>}
      <InputComponentChildren size="medium">
        <input
          name="phone"
          type="number"
          placeholder="phone"
          value={store.user.phone}
          required
          autoComplete="off"
          onChange={(e) => store.addField(e.target.value, e.target.name)}
        />
      </InputComponentChildren>
      <InputComponentChildren size="medium">
        <input
          name="name"
          type="text"
          placeholder="name"
          value={store.user.name}
          required
          onChange={(e) => store.addField(e.target.value, e.target.name)}
        />
      </InputComponentChildren>
      <div className="checkbox">
        <CheckBoxComponet size="medium" effect="bounce">
          <input type="checkbox" required />
        </CheckBoxComponet>
        <label>Agree with Politic Information</label>
      </div>
      <Button>SignUp</Button>
      <Link to="/profil">Go Back</Link>
    </form>
  );
};

export default observer(FormSignUp);
