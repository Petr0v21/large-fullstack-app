import AuthContext from "../../context/AuthContext";
import { observer } from "mobx-react";
import React from "react";
import { useContext } from "react";
import store from "../../stores/postStore";
import InputComponent, {
  InputComponentChildren,
  TextAreaStyled,
} from "../../app/styled-components/Input";
import {
  InputSelectDefault,
  SelectDefault,
} from "../../app/styled-components/Select";
import { Button } from "../../app/styled-components/Button";

const FormPost: React.FC = () => {
  const auth = useContext(AuthContext);
  let list = [
    "Будівництво",
    "Ремонт квартир",
    "Тульчин, Тульчинський р-н, Вінницька обл.",
    "цфввцф",
  ];
  return (
    <form
      className="formCreate"
      onSubmit={async (event) => {
        event.preventDefault();
        await store.createPost(auth?.token);
        alert("Post created");
        store.cleanStore();
      }}
    >
      <h2>Create Post</h2>
      <InputComponentChildren size="medium">
        <input
          name="title"
          value={store.post.title}
          onChange={(event) => store.addField(event)}
          placeholder="title"
          required
        />
      </InputComponentChildren>
      <SelectDefault size="medium">
        <InputComponentChildren size="medium" img>
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
      <InputSelectDefault size="medium">
        <InputComponentChildren size="medium" img>
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
          {list
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
      <InputComponentChildren size="medium">
        <input
          name="price"
          value={store.post.price}
          onChange={(event) => store.addField(event)}
          placeholder="price"
          required
        />
      </InputComponentChildren>
      <TextAreaStyled size="medium">
        <textarea
          name="description"
          value={store.post.description}
          onChange={(event) => store.addField(event)}
          placeholder="description"
          required
        />
      </TextAreaStyled>
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
      <div className="GallaryChoose">
        {store.files.map((img, index) => (
          <div key={index} className="ImageChoose">
            <img alt="uploadImage" src={URL.createObjectURL(img)} />
            <div
              className="Button_Delete"
              onClick={() => {
                store.cleanSelectedImage(index);
              }}
            >
              Delete
            </div>
          </div>
        ))}
      </div>
      <Button>Create</Button>
    </form>
  );
};

export default observer(FormPost);
