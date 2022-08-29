import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import FormUserInfo from "../../app/component/UserInfo";
import FormPost from "../CreatePost";
import UsersPostList from "../../app/component/UsersPostList";

const Profil = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <h2>Profil</h2>
      <div>NavBar</div>
      <button>Info</button>
      <FormUserInfo />
      <button>Posts</button>
      <UsersPostList />
      <button>Create Post</button>
      <FormPost />
      <div onClick={() => auth?.logout()}>Exit</div>
    </div>
  );
};

export default Profil;
