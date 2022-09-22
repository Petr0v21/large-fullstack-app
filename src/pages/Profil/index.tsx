import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import FormUserInfo from "../../app/component/UserInfo";
import FormPost from "../CreatePost";
import UsersPostList from "../../app/component/UsersPostList";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../app/component/Header";
import Footer from "../../app/component/Footer";
import styled from "styled-components";
import LogOutIcon from "../../static/images/Logout.svg";
import { device } from "../../app/styled-components/size";

const ProfilStyled = styled.div`
  min-height: calc(90vh - 15vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  .profil-navbar {
    width: 80%;
    padding: 2vw 10%;
    display: flex;
    flex-direction: column;
    h3 {
      text-align: center;
    }
    .links-navbar {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      label {
        a {
          color: #172024;
        }
        cursor: pointer;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        letter-spacing: -0.05em;
        color: #172024;
        padding-bottom: 0.5em;
        border-bottom: 1px solid rgba(23, 32, 36, 0);
        transition: all 0.2s linear;
        &:hover {
          border-bottom: 1px solid rgba(23, 32, 36, 1);
        }
      }
      .button_exit {
        display: flex;
        align-items: center;
        gap: 1em;
        img {
          width: 18px;
          height: 24px;
        }
      }
    }
  }
  .profil-content {
    width: 100%;
  }
  @media ${device.mobileS} {
    .profil-navbar {
      .links-navbar {
        label {
          font-size: 12px;
          line-height: 16px;
        }
        .button_exit {
          img {
            width: 12px;
            height: 18px;
          }
        }
      }
    }
  }

  @media ${device.mobileL} {
    .profil-navbar {
      .links-navbar {
        label {
          font-size: 14px;
          line-height: 18px;
        }
        .button_exit {
          img {
            width: 14px;
            height: 20px;
          }
        }
      }
    }
  }

  @media ${device.tablet} {
    .profil-navbar {
      .links-navbar {
        label {
          font-size: 16px;
          line-height: 20px;
        }
        .button_exit {
          img {
            width: 18px;
            height: 24px;
          }
        }
      }
    }
  }

  @media ${device.laptopL} {
    .profil-navbar {
      .links-navbar {
        label {
          font-size: 18px;
          line-height: 22px;
        }
        .button_exit {
          img {
            width: 18px;
            height: 24px;
          }
        }
      }
    }
  }
`;

// const ProfilContentStyled = styled.div`
//   width: 100%;
//   padding: 0;
//   margin: 0;
// `;

const Profil = () => {
  const auth = useContext(AuthContext);
  return (
    <>
      <Header back={true} />
      <ProfilStyled>
        <div className="profil-navbar">
          <h3>Menu</h3>
          <div className="links-navbar">
            <label>
              <Link to="">Проофіль</Link>
            </label>
            <label>
              <Link to="posts">Мої оголошення</Link>
            </label>
            <label>
              <Link to="createpost">Створити оголошення</Link>
            </label>
            <label className="button_exit" onClick={() => auth?.logout()}>
              Вийти
              <img alt="logout" src={LogOutIcon} />
            </label>
          </div>
        </div>
        <div className="profil-content">
          <Routes>
            <Route path="" element={<FormUserInfo />} />
            <Route path="posts/*" element={<UsersPostList />} />
            <Route path="createpost" element={<FormPost />} />
          </Routes>
        </div>
      </ProfilStyled>
      <Footer />
    </>
  );
};

export default Profil;
