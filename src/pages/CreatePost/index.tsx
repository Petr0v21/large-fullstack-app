import AuthContext from "../../context/AuthContext";
import { observer } from "mobx-react";
import React from "react";
import { useContext } from "react";
import store from "../../stores/postStore";

const FormPost: React.FC = () => {
  const auth = useContext(AuthContext);
  return (
    <form>
      <h2>Create Post</h2>
      <input
        type="text"
        name="email"
        value={store.post.title}
        required
        onChange={(e) => store.addField(e.target.value, e.target.name)}
      />
      <input
        name="password"
        type="password"
        value={store.post.description}
        required
        onChange={(e) => store.addField(e.target.value, e.target.name)}
      />
      <input
        className="custom-file-input"
        type="file"
        name="file"
        multiple
        accept="image/png, image/jpeg"
        onChange={(event) => {
          store.addImage(event);
        }}
      />
      <button
        onClick={async (event) => {
          event.preventDefault();
          await store.createPost(auth?.token);
        }}
      >
        Create
      </button>
      <button
        onClick={async (event) => {
          event.preventDefault();
          await store.getList();
        }}
      >
        Get
      </button>
      <button
        onClick={async (event) => {
          event.preventDefault();
          await store.updatePost(auth?.token);
        }}
      >
        Delete
      </button>
      {store.url.images.map((img, index) => {
        return <img key={index} alt="image" src={img} />;
      })}
    </form>
  );
};

export default observer(FormPost);
