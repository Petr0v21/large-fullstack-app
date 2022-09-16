import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import PostSmall from "../PostSmall";
import store from "../../../stores/listStore";
import styled from "styled-components";
// import SelectDefaultComponet from "../../styled-components/Select";
import {
  InputSelectDefault,
  SelectDefault,
} from "../../styled-components/Select";
import { InputComponentChildren } from "../../styled-components/Input";
import { Button } from "../../styled-components/Button";

const ListPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 48px;
    text-align: center;
    color: #172024;
  }
`;

const SortBlock = styled.div`
  height: auto;
  padding: 5vh 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .filter-input-block {
    padding-bottom: 5vh;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    gap: 1vw;
  }
`;

const listPosts: React.FC = () => {
  let list = [
    "Будівництво",
    "Ремонт квартир",
    "Тульчин, Тульчинський р-н, Вінницька обл.",
    "цфввцф",
  ];
  useEffect(() => {
    store.getList();
  }, []);
  return (
    <ListPosts>
      <h2>Список оголошень</h2>
      <SortBlock>
        <form className="filter-input-block">
          {/* <InputSelectDefault size="medium">
            <InputComponentChildren size="medium" img>
              <input
                name="location"
                value={store.filt.location}
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
          <InputSelectDefault size="medium">
            <InputComponentChildren size="medium" img>
              <input
                name="location"
                value={store.filt.location}
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
          <Button>Пошук</Button> */}
        </form>
      </SortBlock>
      {store.list.map((post) => (
        <PostSmall key={post._id} post={post} />
      ))}
      <div className="Pages">
        {store.pages.map((page) => (
          <div
            key={page}
            onClick={() => store.changePage(page)}
            className="PageButton"
          >
            {page}
          </div>
        ))}
      </div>
    </ListPosts>
  );
};

export default observer(listPosts);
