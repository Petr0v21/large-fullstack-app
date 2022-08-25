import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import store from "../../stores/userStore";
import FormUserInfo from "../../app/component/UserInfo";
import FormPost from "../CreatePost";
import UsersPostList from "../../app/component/UsersPostList";

const Profil = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h2>Profil</h2>
      <div>NavBar</div>
      <FormUserInfo />
      <button>Info</button>
      <button>Posts</button>
      <UsersPostList />
      <button>Create Post</button>
      <FormPost />
      <div>Exit</div>
    </div>
  );
};

export default Profil;
