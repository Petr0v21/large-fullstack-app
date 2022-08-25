import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Header from "./app/component/Header";
import Auth from "./pages/Auth";
import FormPost from "./pages/CreatePost";
import Profil from "./pages/Profil";
import List from "./pages/List";
import AuthContext from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";
import { Link } from "react-router-dom";

const App = () => {
  const { token, login, logout, userName } = useAuth();
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