import AuthContext from "../../../context/AuthContext";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import store from "../../../stores/updatePostStore";
import storeList from "../../../stores/userStore";
import Arrow from "../../../static/images/ArrowPagin.svg";
import {
  InputComponentChildren,
  TextAreaStyled,
  InputSelectVal,
} from "../../styled-components/Input";
import { Button } from "../../styled-components/Button";
import {
  InputSelectDefault,
  SelectDefault,
} from "../../styled-components/Select";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CreateUpdatePostStyled } from "../../../pages/CreatePost";

const ButtonDelete = styled.div`
  cursor: pointer;
  border: 1px solid black;
  text-align: center;
  padding: 12px 16px;
  border-radius: 12px;
  border: 2px solid #ffffff;
  margin: 5px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  background-color: #c92d67;
  transition: all 0.2s linear;
  &:hover {
    background-color: rgba(231, 0, 96, 0.7);
  }
  &:active {
    border: 2px solid #bdc3c7;
    opacity: 0.35;
  }
`;

const UserUpdatePost: React.FC<{}> = (props) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  useEffect(() => {
    store.getPost(auth?.token, id!);
  }, []);
  let listLocation = ["Тульчин, Тульчинський р-н, Вінницька обл."];
  let list = ["Будівництво", "Ремонт квартир", "Проектування", "Дизайн"];
  return (
    <CreateUpdatePostStyled
      onSubmit={async (event) => {
        event.preventDefault();
        await store.updatePost(auth?.token, id!);
        storeList.getList(auth?.token);
        navigate("/profil/posts");
      }}
    >
      <div className="post-back">
        <Link to="/profil/posts">
          <img src={Arrow} alt="come-back" />
        </Link>
        <ButtonDelete
          onClick={async (event) => {
            event.preventDefault();
            console.log("Delete");
            await storeList.deletePost(auth?.token, id!);
            await storeList.getList(auth?.token);
            navigate("/profil/posts");
          }}
        >
          Видалити оголошення
        </ButtonDelete>
      </div>
      <InputComponentChildren
        size={window.innerWidth <= 928 ? "medium" : "large"}
      >
        <input
          name="title"
          value={store.updatedPost.title}
          onChange={(event) => store.addField(event)}
          placeholder="title"
          required
        />
      </InputComponentChildren>
      <div className="post-top">
        <div className="post-inputs">
          <SelectDefault size={window.innerWidth <= 928 ? "small" : "medium"}>
            <InputComponentChildren
              size={window.innerWidth <= 928 ? "small" : "medium"}
              img
            >
              <input
                name="category"
                value={store.updatedPost.category}
                onChange={(event) => store.addField(event)}
                placeholder="category"
                autoComplete="off"
                required
              />
            </InputComponentChildren>
            <div className="content">
              {list.map((arg) => (
                <p
                  onClick={() => {
                    store.selectField("category", arg);
                  }}
                  key={arg}
                >
                  {arg}
                </p>
              ))}
            </div>
          </SelectDefault>
          <InputSelectDefault
            size={window.innerWidth <= 928 ? "small" : "medium"}
          >
            <InputComponentChildren
              size={window.innerWidth <= 928 ? "small" : "medium"}
              img
            >
              <input
                name="location"
                value={store.updatedPost.location}
                onChange={(event) => store.addField(event)}
                placeholder="location"
                autoComplete="off"
                required
              />
            </InputComponentChildren>
            <div className="content">
              {listLocation
                .filter((arg) =>
                  arg
                    .toLocaleLowerCase()
                    .includes(store.updatedPost.location.toLocaleLowerCase())
                )
                .map((arg) => (
                  <p
                    onClick={() => {
                      store.selectField("location", arg);
                    }}
                    key={arg}
                  >
                    {arg}
                  </p>
                ))}
            </div>
          </InputSelectDefault>
          <InputSelectVal size={window.innerWidth <= 928 ? "small" : "medium"}>
            <input
              type="number"
              name="priceAmount"
              value={store.updatedPost.priceAmount}
              onChange={(event) => store.addField(event)}
              placeholder="price"
              required
            />
            <input
              type="text"
              name="priceValue"
              placeholder="грн/м2"
              value={store.updatedPost.priceValue}
              onChange={(event) => store.addField(event)}
              required
            />
          </InputSelectVal>
        </div>
        <TextAreaStyled
          heightauto={window.innerWidth >= 572 ? true : false}
          size={window.innerWidth <= 724 ? "small" : "medium"}
        >
          <textarea
            name="description"
            value={store.updatedPost.description}
            onChange={(event) => store.addField(event)}
            placeholder="description"
            required
          />
        </TextAreaStyled>
      </div>

      <div className="post-gallary-block">
        <div className="post-gallary-image">
          {store.updatedPost.url.map((link: any, index: number) => (
            <img
              src={link}
              key={"selectedimages" + link}
              onClick={() => {
                store.addDeleteImage(store.updatedPost.images[index]);
              }}
            />
          ))}
          {store.files.map((img, index) => (
            <img
              alt="uploadImage"
              src={URL.createObjectURL(img)}
              onClick={() => {
                store.cleanSelectedImage(index);
              }}
            />
          ))}
        </div>
        <input
          className="custom-file-input"
          value=""
          type="file"
          name="file"
          multiple
          accept="image/png, image/jpeg"
          onChange={(event) => {
            store.addImage(event);
            console.log(event);
          }}
        />
      </div>
      <Button className="button-send">Оновити оголошення</Button>
    </CreateUpdatePostStyled>
  );
};

export default observer(UserUpdatePost);
