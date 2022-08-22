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
        name="title"
        value={store.post.title}
        required
        onChange={(event) => store.addField(event)}
      />
      <input
        type="password"
        name="description"
        value={store.post.description}
        required
        onChange={(event) => store.addField(event)}
      />
      <input
        className="custom-file-input"
        value=""
        type="file"
        name="file"
        multiple
        accept="image/png, image/jpeg"
        onChange={(event) => {
          store.addImage(event);
          console.log(event);
        }}
      />
      <div className="GallaryChoose">
        {store.files.map((img, index) => (
          <div key={index} className="ImageChoose">
            <img alt="uploadImage" src={URL.createObjectURL(img)} />
            <div
              className="Button_Delete"
              onClick={() => {
                store.cleanSelectedImage(index);
              }}
            >
              Clear
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={async (event) => {
          event.preventDefault();
          await store.createPost(auth?.token);
        }}
      >
        Create
      </button>
      {/* <button
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
      </button> */}
      {/* {store.url.images.map((img, index) => {
        return <img key={index} alt="image" src={img} />;
      })} */}
    </form>
  );
};

export default observer(FormPost);
