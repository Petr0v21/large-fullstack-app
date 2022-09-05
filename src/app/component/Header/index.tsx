import AuthContext from "../../../context/AuthContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.div`
  // position: fixed;
  // top: 0;
  // right: 0;
  // left: 0;
  height: 5vh;
  background: black;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
  }
`;

const Header = () => {
  const auth = useContext(AuthContext);
  return (
    <HeaderStyled>
      <Link to="/">BilWork</Link>
      <Link to="/selected">SelectedPosts</Link>
      <Link to="/profil">{auth?.token ? auth.userName : "Profil"}</Link>
    </HeaderStyled>
  );
};

export default Header;
