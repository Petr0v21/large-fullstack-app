import AuthContext from "../../../context/AuthContext";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import store from "../../../stores/userStore";
import UserUpdatepost from "../UserUpdatePost";

const UsersPost: React.FC<{ post: any; indexPost: number }> = (props) => {
  console.log(props.post);
  const auth = useContext(AuthContext);
  const [update, setUpdate] = useState(false);
  if (update) {
    return <UserUpdatepost id={props.post._id} setUpdate={setUpdate} />;
  } else {
    return (
      <div>
        <button
          onClick={() => {
            store.deletePost(auth?.token, props.post._id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            setUpdate(!update);
            store.setDeltedId(props.post._id);
          }}
        >
          Update
        </button>
        <input value={props.post.title} disabled />
        {props.post.url.map((link: any, index: number) => (
          <div>
            <img key={index + link} src={link} />
          </div>
        ))}
      </div>
    );
  }
};

export default observer(UsersPost);
