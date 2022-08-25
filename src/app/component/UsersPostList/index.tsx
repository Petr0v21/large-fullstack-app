import AuthContext from "../../../context/AuthContext";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { useContext } from "react";
import store from "../../../stores/userStore";
import UserPost from "../UserPost";

const UsersPostList: React.FC = () => {
  const auth = useContext(AuthContext);
  useEffect(() => {
    store.getList(auth?.token);
  }, []);
  return (
    <div>
      {store.posts.map((post, index) => (
        <UserPost key={post._id + index} post={post} indexPost={index} />
      ))}
    </div>
  );
};

export default observer(UsersPostList);
