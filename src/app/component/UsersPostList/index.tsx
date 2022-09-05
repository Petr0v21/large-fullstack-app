import AuthContext from "../../../context/AuthContext";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { useContext } from "react";
import store from "../../../stores/userStore";
import UserUpdatepost from "../UserUpdatePost";
import UserPost from "../UserPost";
import { Routes, Route } from "react-router-dom";

const UsersPostList: React.FC = () => {
  const auth = useContext(AuthContext);
  useEffect(() => {
    store.getList(auth?.token);
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="*"
          element={
            <>
              {store.posts.length >= 1
                ? store.posts.map((post, index) => (
                    <UserPost
                      key={post._id + index}
                      post={post}
                      indexPost={index}
                    />
                  ))
                : "List is Empty"}
            </>
          }
        />
        <Route path=":id" element={<UserUpdatepost />} />
      </Routes>
    </div>
  );
};

export default observer(UsersPostList);
