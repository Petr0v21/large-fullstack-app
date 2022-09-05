import AuthContext from "../../../context/AuthContext";
import { observer } from "mobx-react";
import React from "react";
import { useContext } from "react";
import store from "../../../stores/userStore";
import { Button } from "../../styled-components/Button";
import { Link } from "react-router-dom";

const UsersPost: React.FC<{ post: any; indexPost: number }> = (props) => {
  console.log(props.post);
  const auth = useContext(AuthContext);
  return (
    <div className="post-small">
      <img src={props.post.url[0]} />
      <div className="post-small-content">
        <Link to={`${props.post._id}`}>{props.post.title}</Link>
        <div className="post-small-tags">
          <label>{props.post.category}</label>
          <label>{props.post.price}</label>
        </div>
      </div>
      <Button
        design="danger"
        onClick={async (event) => {
          event.preventDefault();
          console.log("Delete");
          await store.deletePost(auth?.token, props.post._id);
          await store.getList(auth?.token);
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default observer(UsersPost);
