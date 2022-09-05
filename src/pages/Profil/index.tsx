import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import FormUserInfo from "../../app/component/UserInfo";
import FormPost from "../CreatePost";
import UsersPostList from "../../app/component/UsersPostList";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Profil = () => {
  const auth = useContext(AuthContext);
  return (
    <div className="profil">
      <div className="profil-navbar">
        <h3>Menu</h3>
        {/* <div className="links-navbar"> */}
        <Link to="*">Info</Link>
        <Link to="posts">Posts</Link>
        <Link to="createpost">Create Post</Link>
        {/* </div> */}
        <div className="button_exit" onClick={() => auth?.logout()}>
          Exit
        </div>
      </div>
      <div className="profil-content">
        <h2>Profil</h2>
        <Routes>
          <Route path="*" element={<FormUserInfo />} />
          <Route path="posts/*" element={<UsersPostList />} />
          <Route path="createpost" element={<FormPost />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profil;
