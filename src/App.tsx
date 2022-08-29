import React from "react";
import "./styles/main.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./app/component/Header";
import Auth from "./pages/Auth";
import SelectedPosts from "./pages/SelectedPosts";
import Profil from "./pages/Profil";
import List from "./pages/List";
import AuthContext from "./context/AuthContext";
import PostsContext from "./context/PostsContext";
import { useAuth } from "./hooks/auth.hook";
import { useSelect } from "./hooks/selectPost.hook";
import { Link } from "react-router-dom";

const App = () => {
  const { token, login, logout, userName } = useAuth();
  const { addId, deleteId } = useSelect();
  const isAuthenticated = !!token;
  console.log(isAuthenticated);
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
      <Header />
      <PostsContext.Provider
        value={{
          addId,
          deleteId,
        }}
      >
        <SelectedPosts />
        <Link to="/Profil">Profil</Link>
        <Routes>
          <Route path="/home" element={<List />} />
          {isAuthenticated ? (
            <Route path="/Profil" element={<Profil />} />
          ) : (
            <Route path="/Profil" element={<Auth />} />
          )}
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </PostsContext.Provider>

      <button
        onClick={() => {
          console.log(token);
          logout();
        }}
      >
        CleanStorage
      </button>
    </AuthContext.Provider>
  );
};

export default App;
