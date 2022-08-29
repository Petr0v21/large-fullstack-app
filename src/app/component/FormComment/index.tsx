import { observer } from "mobx-react";
import React, { useEffect } from "react";
import store from "../../../stores/commentStore";

const FormComment: React.FC<{ id: string }> = (props) => {
  return (
    <form>
      <input
        type="text"
        name="email"
        placeholder="email"
        value={store.comment.email}
        onChange={(event) => store.addField(event)}
      />
      <input
        type="text"
        name="name"
        placeholder="name"
        value={store.comment.name}
        onChange={(event) => store.addField(event)}
      />
      <input
        type="number"
        name="rating"
        min={0}
        max={5}
        placeholder="rating"
        value={store.comment.rating}
        onChange={(event) => store.addField(event)}
      />
      <textarea
        name="text"
        placeholder="text"
        value={store.comment.text}
        onChange={(event) => store.addField(event)}
      />
      <button
        onClick={(event) => {
          event.preventDefault();
          store.postComment(props.id);
        }}
      >
        Comment
      </button>
    </form>
  );
};

export default observer(FormComment);
