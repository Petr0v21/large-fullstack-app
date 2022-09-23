import AuthContext from "../../../context/AuthContext";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import store from "../../../stores/updatePostStore";
import storeList from "../../../stores/userStore";
import {
  InputComponentChildren,
  TextAreaStyled,
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
  padding: 1vw 2vw;
  backgroun: whitesmoke;
`;

const UserUpdatePost: React.FC<{}> = (props) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  useEffect(() => {
    store.getPost(auth?.token, id!);
  }, []);
  let list = [
    "Будівництво",
    "Ремонт квартир",
    "Тульчин, Тульчинський р-н, Вінницька обл.",
    "цфввцф",
  ];
  return (
    <CreateUpdatePostStyled
      onSubmit={async (event) => {
        event.preventDefault();
        await store.updatePost(auth?.token, id!);
        storeList.getList(auth?.token);
        navigate("/profil/posts");
      }}
    >
      <Link to="/profil/posts">Повернутись до списка</Link>
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
              {list
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
          <InputComponentChildren
            size={window.innerWidth <= 928 ? "small" : "medium"}
          >
            <input
              name="price"
              value={store.updatedPost.price}
              onChange={(event) => store.addField(event)}
              placeholder="price"
              required
            />
          </InputComponentChildren>
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
