import AuthContext from "../../../context/AuthContext";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import store from "../../../stores/updatePostStore";

const UserUpdatePost: React.FC<{
  id: string;
  setUpdate: any;
}> = (props) => {
  useEffect(() => {
    store.getPost(auth?.token, props.id);
    console.log(store.updatedPost);
  }, []);
  const auth = useContext(AuthContext);
  return (
    <form>
      <button onClick={() => props.setUpdate(false)}>Update</button>
      <input
        name="title"
        value={store.updatedPost.title}
        onChange={(e) => store.addField(e)}
      />
      {store.updatedPost.url.map((link: any, index: number) => (
        <div>
          <img key={store.updatedPost.images[index] + index} src={link} />
          <button
            onClick={() =>
              store.addDeleteImage(store.updatedPost.images[index])
            }
          >
            Delete
          </button>
        </div>
      ))}
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
      {store.files.map((img, index) => (
        <div key={"Images" + index} className="ImageChoose">
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
      <button
        onClick={() => {
          store.updatePost(auth?.token, props.id);
        }}
      >
        Update Post
      </button>
    </form>
  );
};

export default observer(UserUpdatePost);
