import { observer } from "mobx-react";
import React, { useEffect } from "react";
import store from "../../../stores/commentStore";
import { Button } from "../../styled-components/Button";
import {
  InputComponentChildren,
  TextAreaStyled,
} from "../../styled-components/Input";

const FormComment: React.FC<{ id: string }> = (props) => {
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await store.postComment(props.id);
      }}
      className="form-comment"
    >
      <InputComponentChildren>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={store.comment.email}
          onChange={(event) => store.addField(event)}
        />
      </InputComponentChildren>
      <InputComponentChildren>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={store.comment.name}
          onChange={(event) => store.addField(event)}
        />
      </InputComponentChildren>
      <InputComponentChildren>
        <input
          type="number"
          name="rating"
          min={0}
          max={5}
          placeholder="rating"
          value={store.comment.rating}
          onChange={(event) => store.addField(event)}
        />
      </InputComponentChildren>
      <TextAreaStyled>
        <textarea
          name="text"
          placeholder="text"
          value={store.comment.text}
          onChange={(event) => store.addField(event)}
        />
      </TextAreaStyled>
      <Button>Comment</Button>
    </form>
  );
};

export default observer(FormComment);
