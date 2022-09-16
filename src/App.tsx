import React, { useEffect, useState } from "react";
import "./styles/main.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import SelectedPosts from "./pages/SelectedPosts";
import Profil from "./pages/Profil";
import Main from "./pages/Main";
import List from "./pages/List";
import AuthContext from "./context/AuthContext";
import PostsContext from "./context/PostsContext";
import { useAuth } from "./hooks/auth.hook";
import { useSelect } from "./hooks/selectPost.hook";
import CreatePost from "./pages/CreatePost";

const App = () => {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const { token, login, logout, userName } = useAuth();
  const { addId, deleteId } = useSelect();
  const isAuthenticated = !!token;
  const check = async () => {
    await fetch("https://calm-brushlands-24620.herokuapp.com/https://desolate-island-05088.herokuapp.com/api/user/info", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.status === 401) {
        logout();
        return;
      }
    });
  };
  useEffect(() => {
    if (token) {
      check();
    }
  }, [token]);
  return (
    <AuthContext.Provider
      value={{
        token: token,
        login,
        logout,
        userName,
        isAuthenticated,
      }}
    >
      <PostsContext.Provider
        value={{
          addId,
          deleteId,
        }}
      >
        {/* <div className="box"></div>
        <div className="loader-container">
          <div className="loader-1"></div>
        </div> */}
        <div className="main-content">
          <Routes>
            <Route path="/*" element={<List />} />
            <Route path="/list" element={<CreatePost />} />
            <Route path="/selected/*" element={<SelectedPosts />} />
            {isAuthenticated ? (
              <Route path="/profil/*" element={<Profil />} />
            ) : (
              <Route path="/profil/*" element={<Auth />} />
            )}
          </Routes>
        </div>
      </PostsContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
