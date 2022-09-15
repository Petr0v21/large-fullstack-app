import AuthContext from "../../../context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styled-components/size";
import MenuIcon from "../../../static/images/MenuIcon.svg";
import Home from "../../../static/images/Home.svg";
import BackMenu from "../../../static/images/NavBarSmallBack.svg";
import ProfilIcon from "../../../static/images/ownerwhite.svg";
import ProfilIconSmall from "../../../static/images/owner.svg";

const HeaderStyled = styled.div<{ back?: boolean }>`
  background: ${(props) => (props.back ? "#172024" : null)};
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

  .header-profil {
    position: absolute;
    right: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    color: white;
    img {
      width: 15px;
      height: 17px;
    }
  }
  // @media ${device.mobileS} {
  //   h1 {
  //     font-family: "Russo One";
  //     font-style: normal;
  //     font-weight: 300;
  //     font-size: 14px;
  //     line-height: 14px;
  //     text-align: center;
  //     text-transform: uppercase;
  //   }
  // }

  // @media ${device.mobileM} {
  //   h1 {
  //     font-family: "Russo One";
  //     font-style: normal;
  //     font-weight: 300;
  //     font-size: 16px;
  //     line-height: 16px;
  //     text-align: center;
  //     text-transform: uppercase;
  //   }
  // }

  // @media (max-width: 520px) {
  //   .header-login {
  //     width: 54px;
  //     height: 22px;
  //   }
  //   .header-signIn {
  //     width: 0;
  //     a {
  //       width: 0;
  //       opacity: 0;
  //     }
  //     // height: 24px;
  //   }
  // }

  // @media (min-width: 520px) {
  //   h1 {
  //     font-family: "Russo One";
  //     font-style: normal;
  //     font-weight: 300;
  //     font-size: 18px;
  //     line-height: 18px;
  //     text-align: center;
  //     text-transform: uppercase;
  //   }
  //   .header-login {
  //     width: 58px;
  //     height: 24px;
  //   }
  //   .header-signIn {
  //     width: 100px;
  //     height: 24px;
  //   }
  // }

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

const HeaderSmall = styled.div<{ back?: boolean }>`
  background: ${(props) => (props.back ? "#172024" : null)};
  padding: 3vh 5vw 3vh 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
  }
  h1 {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    text-align: center;
    text-transform: uppercase;
  }
  img {
    width: 30px;
    height: 15px;
  }
`;

const HeaderSmallMenu = styled.div`
  z-index: 1000;
  width: 320px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  padding: 3vh 5vw 3vh 5vw;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: space-between;
  img {
    align-self: center;
    margin-bottom: 10px;
    width: 30px;
    height: auto;
  }
  h2 {
    a {
      text-decoration: none;
      color: #253256;
    }
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #253256;
  }
  .header-menu-links {
    padding: 20vh 0;
    width: 100%;
    height: auto;
    background: url(${BackMenu});
    background-repeat: no-repeat;
    background-position: center center;
    // -webkit-background-size: cover;
    // -moz-background-size: cover;
    // -o-background-size: cover;
    // background-size: cover;
    display: flex;
    flex-direction: column;
    gap: 8vh;
    label {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      letter-spacing: 0.05em;
      a {
        color: #253256;
      }
    }
  }
  .header-menu-auth {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .header-menu-login {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      border: 1px solid #5766ec;
      border-radius: 12px;
      width: 100px;
      height: 34px;
      label {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: -0.05em;
        color: #5766ec;
      }
    }
    .header-profil-small {
      display: flex;
      align-items: center;
      gap: 2vw;
      color: #5766ec;
      label {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.05em;
        a {
          color: #253256;
        }
      }
      img {
        width: 15px;
        height: 17px;
      }
    }
    .header-menu-signUp {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #5766ec;
      border-radius: 12px;
      width: 120px;
      height: 34px;
      label {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: -0.05em;
        color: #ffffff;
      }
    }
  }
`;

const Header = (props: { back?: boolean }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const auth = useContext(AuthContext);
  if (window.innerWidth <= 1024 && !openMenu) {
    return (
      <HeaderSmall back={props.back}>
        <Link to="/">
          <h1>BilWork</h1>
        </Link>
        <img alt="menu" src={MenuIcon} onClick={() => setOpenMenu(true)} />
      </HeaderSmall>
    );
  } else if (openMenu) {
    return (
      <>
        <HeaderSmall back={props.back}>
          <Link to="/">
            <h1>BilWork</h1>
          </Link>
          <img alt="menu" src={MenuIcon} onClick={() => setOpenMenu(true)} />
        </HeaderSmall>
        <HeaderSmallMenu>
          <img alt="close-menu" src={Home} onClick={() => setOpenMenu(false)} />
          {auth?.token ? (
            <Link to="/profil" className="header-profil-small">
              <label>{auth.userName}</label>
              <img alt="profil-icon" src={ProfilIconSmall} />
            </Link>
          ) : (
            <div className="header-menu-auth">
              <div className="header-menu-login">
                <Link to="/profil">
                  <label>Увійти</label>
                </Link>
              </div>
              <div className="header-menu-signUp">
                <Link to="/profil/signup">
                  <label>Зареєструватися</label>
                </Link>
              </div>
            </div>
          )}

          <div className="header-menu-links">
            <label>
              <Link to="/">Про нас</Link>
            </label>
            <label>
              <Link to="/profil">Список</Link>
            </label>
            <label>
              <Link to="/selected">Обрані</Link>
            </label>
            <label>
              <Link to="/">Контaкти</Link>
            </label>
          </div>
          <h2>
            <Link to="/">Bilwork</Link>
          </h2>
        </HeaderSmallMenu>
      </>
    );
  }
  return (
    <HeaderStyled back={props.back}>
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
        <Link to="/profil" className="header-profil">
          {auth.userName}
          <img alt="profil-icon" src={ProfilIcon} />
        </Link>
      ) : (
        <div className="header-auth">
          <div className="header-login">
            <Link to="/profil">Увійти</Link>
          </div>
          <div className="header-signIn">
            <Link to="/profil/signup">Зареєструватись</Link>
          </div>
        </div>
      )}
    </HeaderStyled>
  );
};

export default Header;
