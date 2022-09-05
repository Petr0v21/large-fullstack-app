import AuthContext from "../../../context/AuthContext";
import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterStyled = styled.div`
  // position: fixed;
  // bottom: 0;
  // right: 0;
  // left: 0;
  height: 10vh;
  background: whitesmoke;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  a {
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <h2>BilWork</h2>
      <label>Inst: bilwork</label>
    </FooterStyled>
  );
};

export default Footer;
