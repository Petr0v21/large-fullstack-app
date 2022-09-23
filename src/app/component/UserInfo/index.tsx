import AuthContext from "../../../context/AuthContext";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import store from "../../../stores/userStore";
import {
  InputComponentChildren,
  TextAreaStyled,
} from "../../styled-components/Input";
import { Button } from "../../styled-components/Button";
import styled from "styled-components";
import { device } from "../../styled-components/size";
import ImageDefault from "../../../static/images/ImageDefault.svg";

const FormUserInfoStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 0;
  gap: 2vw;
  h2 {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 36px;
    text-align: center;
    color: #000000;
  }
  .profil-info-inputs {
    display: flex;
    flex-direction: column;
    gap: 1vw;
  }
  .profil-info-image {
    min-width: 120px;
    max-width: 300px;
    height: 250px;
    background: whitesmoke;
    input {
      width: 100%;
      cursor: pointer;
    }
    .custom-file-input-test {
      height: 100%;
      opacity: 0;
    }
    .custom-file-input-test::-webkit-file-upload-button {
      visibility: hidden;
    }
    input {
      bottom: 100%;
      position: relative;
      z-index: 3;
    }
    img {
      min-width: 120px;
      max-width: 300px;
      height: 100%;
    }
  }
  .profil-info-button {
    width: 250px;
  }
  .profil-info-form-top {
    display: flex;
    align-items: center;
    gap: 10vw;
  }
  @media ${device.mobileS} {
    h2 {
      font-size: 28px;
      line-height: 28px;
    }
    .profil-info-image {
      min-width: 120px;
      max-width: 240px;
      height: 180px;
      img {
        min-width: 120px;
        max-width: 240px;
        height: 100%;
      }
    }
    .profil-info-button {
      width: 160px;
    }
  }

  @media ${device.mobileL} {
    h2 {
      font-size: 32px;
      line-height: 32px;
    }
    // .profil-info-image {
    //   width: 200px;
    //   height: 200px;
    //   background: whitesmoke;
    // }
    .profil-info-button {
      width: 210px;
    }
  }

  @media (max-width: 500px) {
    .profil-info-form-top {
      flex-direction: column-reverse;
      gap: 3vw;
    }
  }

  @media ${device.tablet} {
    h2 {
      font-size: 34px;
      line-height: 34px;
    }
    .profil-info-image {
      min-width: 120px;
      max-width: 300px;
      height: 250px;
      img {
        min-width: 120px;
        max-width: 300px;
        height: 100%;
      }
    }
    .profil-info-button {
      width: 250px;
    }
  }

  @media ${device.laptopL} {
    h2 {
      font-size: 36px;
      line-height: 36px;
    }
    // .profil-info-image {
    //   width: 250px;
    //   height: 250px;
    //   background: whitesmoke;
    // }
    .profil-info-button {
      width: 250px;
    }
  }
`;

const FormUserInfo: React.FC = () => {
  const auth = useContext(AuthContext);
  const [image, setImage] = useState(false);
  useEffect(() => {
    store.getUser(auth?.token);
  }, []);
  return (
    <FormUserInfoStyled
      onSubmit={async (event) => {
        event.preventDefault();
        store.updateUser(auth?.token);
      }}
    >
      <h2 className="profil-info-title">Профіль</h2>
      <div className="profil-info-form-top">
        <div className="profil-info-inputs">
          <InputComponentChildren
            size={window.innerWidth <= 650 ? "small" : "medium"}
          >
            <input type="text" name="email" value={store.user.email} disabled />
          </InputComponentChildren>
          <InputComponentChildren
            size={window.innerWidth <= 650 ? "small" : "medium"}
          >
            <input
              name="phone"
              type="text"
              value={store.user.phone}
              required
              onChange={(e) => store.addFieldUser(e)}
            />
          </InputComponentChildren>
          <InputComponentChildren
            size={window.innerWidth <= 650 ? "small" : "medium"}
          >
            <input
              name="name"
              type="text"
              value={store.user.name}
              required
              onChange={(e) => store.addFieldUser(e)}
            />
          </InputComponentChildren>
          <InputComponentChildren
            size={window.innerWidth <= 650 ? "small" : "medium"}
          >
            <input
              name="age"
              type="text"
              value={store.user.age}
              required
              onChange={(e) => store.addFieldUser(e)}
            />
          </InputComponentChildren>
        </div>
        <div className="profil-info-image">
          {store.user.url != "" ? (
            <img
              src={
                !image ? store.user.url : URL.createObjectURL(store.userPhoto)
              }
            />
          ) : (
            <img src={ImageDefault} />
          )}
          <input
            className="custom-file-input-test"
            value=""
            type="file"
            name="file"
            multiple
            accept="image/png, image/jpeg"
            onChange={(event) => {
              store.addPhotoUser(event);
              setImage(!image);
              console.log(event);
            }}
          />
        </div>
      </div>
      <TextAreaStyled
        size={window.innerWidth <= 650 ? "small" : "medium"}
        className="profil-info-textarea"
      >
        <textarea
          name="addInf"
          value={store.user.addInf}
          required
          onChange={(e) => store.addFieldUser(e)}
        />
      </TextAreaStyled>
      <Button className="profil-info-button">Update Profil</Button>
    </FormUserInfoStyled>
  );
};

export default observer(FormUserInfo);
