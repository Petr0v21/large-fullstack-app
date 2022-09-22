import AuthContext from "../../../context/AuthContext";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { useContext } from "react";
import store from "../../../stores/userStore";
import UserUpdatepost from "../UserUpdatePost";
import PostSmall from "../PostSmall";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
const UserPostListStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5vh 0;
`;

const UsersPostList: React.FC = () => {
  const auth = useContext(AuthContext);
  useEffect(() => {
    store.getList(auth?.token);
  }, []);
  return (
    <UserPostListStyled>
      <Routes>
        <Route
          path="*"
          element={
            <>
              {store.posts.length >= 1
                ? store.posts.map((post, index) => (
                    <PostSmall key={post._id + index} post={post} user={true} />
                  ))
                : "List is Empty"}
            </>
          }
        />
        <Route path=":id" element={<UserUpdatepost />} />
      </Routes>
    </UserPostListStyled>
  );
};

export default observer(UsersPostList);
