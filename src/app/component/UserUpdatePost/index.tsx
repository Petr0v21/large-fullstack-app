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
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await store.updatePost(auth?.token, id!);
        storeList.getList(auth?.token);
        navigate("/profil/posts");
      }}
    >
      <Link to="/profil/posts">Go Back</Link>
      <InputComponentChildren size="medium">
        <input
          name="title"
          value={store.updatedPost.title}
          onChange={(event) => store.addField(event)}
          placeholder="title"
          required
        />
      </InputComponentChildren>
      <SelectDefault size="medium">
        <InputComponentChildren size="medium" img>
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
      <InputSelectDefault size="medium">
        <InputComponentChildren size="medium" img>
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
      <InputComponentChildren size="medium">
        <input
          name="price"
          value={store.updatedPost.price}
          onChange={(event) => store.addField(event)}
          placeholder="price"
          required
        />
      </InputComponentChildren>
      <TextAreaStyled size="medium">
        <textarea
          name="description"
          value={store.updatedPost.description}
          onChange={(event) => store.addField(event)}
          placeholder="description"
          required
        />
      </TextAreaStyled>
      {/* <input
        name="title"
        value={store.updatedPost.title}
        onChange={(e) => store.addField(e)}
      /> */}
      {store.updatedPost.url.map((link: any, index: number) => (
        <div key={"selectedimages" + link} className="ImageChoose">
          {/* key={store.updatedPost.images[index] + index}  */}
          <img src={link} />
          <div
            className="Button_Delete"
            onClick={() => {
              store.addDeleteImage(store.updatedPost.images[index]);
            }}
          >
            Delete
          </div>
        </div>
      ))}
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
      <div className="GallaryChoose">
        {store.files.map((img, index) => (
          <div key={"Images" + index} className="ImageChoose">
            <img alt="uploadImage" src={URL.createObjectURL(img)} />
            <div
              className="Button_Delete"
              onClick={() => {
                store.cleanSelectedImage(index);
              }}
            >
              Clear
            </div>
          </div>
        ))}
      </div>
      <Button>Update Post</Button>
    </form>
  );
};

export default observer(UserUpdatePost);
