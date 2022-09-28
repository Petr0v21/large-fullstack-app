import AuthContext from "../../context/AuthContext";
import { observer } from "mobx-react";
import React from "react";
import { useContext } from "react";
import store from "../../stores/postStore";
import InputComponent, {
  InputComponentChildren,
  TextAreaStyled,
  InputSelectVal,
} from "../../app/styled-components/Input";
import {
  InputSelectDefault,
  SelectDefault,
} from "../../app/styled-components/Select";
import { Button } from "../../app/styled-components/Button";
import styled from "styled-components";
import { device } from "../../app/styled-components/size";

export const CreateUpdatePostStyled = styled.form`
  width: 80%;
  padding: 5vh 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vw;
  .post-top {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .post-inputs {
      display: flex;
      flex-direction: column;
      gap: 1vw;
    }
  }
  .post-back {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      cursor: pointer;

      padding: 0.5vw 1vw;
      border: 1px solid #172024;
      background: rgb(87 102 236 / 14%);
      border-radius: 6px;
      img {
        transform: rotate(180deg);
        width: 80px;
        height: 15px;
        opacity: 0.9;
      }
      transition: all 0.2s linear;
      &:hover {
        opacity: 0.5;
      }
    }
  }
  .post-gallary-block {
    width: 100%;
    padding: 2vw;
    background: #f5f6ff;
    min-height: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    .post-gallary-image {
      width: 100%;
      min-height: 16vw;
      padding-bottom: 2vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1vw;
      img {
        height: 14vw;
        width: auto;
        transition: all 0.2s linear;
        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
  .button-send {
    width: 300px;
  }

  @media (max-width: 572px) {
    gap: 2vw;
    .post-top {
      flex-direction: column;
      flex-direction: column;
      align-items: center;
      gap: 1vw;
    }
  }
`;

const FormPost: React.FC = () => {
  const auth = useContext(AuthContext);
  let listLocation = ["Тульчин, Тульчинський р-н, Вінницька обл."];
  let list = ["Будівництво", "Ремонт квартир", "Проектування", "Дизайн"];
  return (
    <CreateUpdatePostStyled
      onSubmit={async (event) => {
        event.preventDefault();
        await store.createPost(auth?.token);
        store.cleanStore();
      }}
    >
      <h2>Create Post</h2>
      {/* 860 */}
      <InputComponentChildren
        size={window.innerWidth <= 928 ? "medium" : "large"}
      >
        <input
          name="title"
          value={store.post.title}
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
                value={store.post.category}
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
                value={store.post.location}
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
                    .includes(store.post.location.toLocaleLowerCase())
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
              value={store.post.priceAmount}
              onChange={(event) => store.addField(event)}
              placeholder="price"
              required
            />
            <input
              type="text"
              name="priceValue"
              placeholder="грн/м2"
              value={store.post.priceValue}
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
            value={store.post.description}
            onChange={(event) => store.addField(event)}
            placeholder="description"
            required
          />
        </TextAreaStyled>
      </div>
      <div className="post-gallary-block">
        <div className="post-gallary-image">
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
            if (store.files.length > 5) {
              alert("Це більше за максимальну кількість фото, маскимум(5)");
              return;
            }
            store.addImage(event);
            console.log(event);
          }}
        />
      </div>
      <Button className="button-send">Створити оголошення</Button>
    </CreateUpdatePostStyled>
  );
};

export default observer(FormPost);
