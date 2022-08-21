import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Header from "./app/component/Header";
import Auth from "./pages/Auth";
import FormPost from "./pages/CreatePost";
import Profil from "./pages/Profil";
import AuthContext from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";
import FormSignUp from "./app/component/Auth/FormSignUp";
import FormLogIn from "./app/component/Auth/FormLogIn";
import { Link } from "react-router-dom";
import store from "./stores/postStore";

const App = () => {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  console.log(isAuthenticated);
  return (
    <AuthContext.Provider
      value={{
        token: token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      <Header />
      <Link to="/Profil">Profil</Link>
      <Routes>
        {/* <Route path="/" element={<FormLogIn />} /> */}
        {isAuthenticated ? (
          <Route path="/Profil" element={<Profil />} />
        ) : (
          <Route path="/Profil" element={<Auth />} />
        )}
        {/* <Navigate to="/Profil" /> */}
        {/* <div>
          <Auth />
        </div> */}
      </Routes>
      <button
        onClick={() => {
          console.log(token);
          logout();
        }}
      >
        CleanStorage
      </button>
      <FormPost />
    </AuthContext.Provider>
  );
};

export default App;
