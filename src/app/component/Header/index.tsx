import AuthContext from "../../../context/AuthContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styled-components/size";

const HeaderStyled = styled.div`
  height: 5vh;
  padding: 3vh 5vw 3vh 5vw;
  display: flex;
  align-items: center;
  a {
    color: white;
  }
  .header-nav {
    padding: 0 2vw 0 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
  }

  .header-auth {
    position: absolute;
    right: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
  }
  .header-login {
    width: 100px;
    height: 42px;
    background: rgba(87, 102, 236, 0.3);
    border-radius: 12px;
    letter-spacing: -0.05em;
  }
  .header-signIn {
    width: 200px;
    height: 42px;
    background: #5766ec;
    border-radius: 12px;
    letter-spacing: -0.05em;
  }
  @media ${device.mobileS} {
    h1 {
      font-family: "Russo One";
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 14px;
      text-align: center;
      text-transform: uppercase;
    }
  }

  @media ${device.mobileM} {
    h1 {
      font-family: "Russo One";
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 16px;
      text-align: center;
      text-transform: uppercase;
    }
  }

  @media (max-width: 520px) {
    .header-login {
      width: 54px;
      height: 22px;
    }
    .header-signIn {
      width: 0;
      a {
        width: 0;
        opacity: 0;
      }
      // height: 24px;
    }
  }

  @media (min-width: 520px) {
    h1 {
      font-family: "Russo One";
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 18px;
      text-align: center;
      text-transform: uppercase;
    }
    .header-login {
      width: 58px;
      height: 24px;
    }
    .header-signIn {
      width: 100px;
      height: 24px;
    }
  }

  @media ${device.tablet} {
    h1 {
      font-family: "Russo One";
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
      text-transform: uppercase;
    }
    .header-login {
      width: 64px;
      height: 28px;
    }
    .header-signIn {
      width: 120px;
      height: 28px;
    }
  }
  @media ${device.laptop} {
    h1 {
      font-family: "Russo One";
      font-style: normal;
      font-weight: 300;
      font-size: 28px;
      line-height: 28px;
      text-align: center;
      text-transform: uppercase;
    }
    .header-login {
      width: 72px;
      height: 34px;
    }
    .header-signIn {
      width: 140px;
      height: 34px;
    }
  }
  @media ${device.laptopL} {
    h1 {
      font-family: "Russo One";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 32px;
      text-align: center;
      text-transform: uppercase;
    }
    .header-login {
      width: 80px;
      height: 38px;
    }
    .header-signIn {
      width: 160px;
      height: 38px;
    }
  }
  @media ${device.desktop} {
    h1 {
      font-family: "Russo One";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 48px;
      text-align: center;
      text-transform: uppercase;
    }
    .header-login {
      width: 100px;
      height: 42px;
    }
    .header-signIn {
      width: 200px;
      height: 42px;
    }
  }
`;

const Header = () => {
  const auth = useContext(AuthContext);
  return (
    <HeaderStyled>
      <Link to="/">
        <h1>BilWork</h1>
      </Link>
      <div className="header-nav">
        <Link to="/selected">Про нас</Link>
        <Link to="/selected">Список</Link>
        <Link to="/selected">Обрані</Link>
        <Link to="/selected">Контакти</Link>
      </div>

      {auth?.token ? (
        <Link to="/profil">{auth.userName}</Link>
      ) : (
        <div className="header-auth">
          <div className="header-login">
            <Link to="/profil">Увійти</Link>
          </div>
          <div className="header-signIn">
            <Link to="/profil/">Зареєструватись</Link>
          </div>
        </div>
      )}
    </HeaderStyled>
  );
};

export default Header;
