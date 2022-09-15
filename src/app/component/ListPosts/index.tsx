import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import PostSmall from "../PostSmall";
import store from "../../../stores/listStore";
import styled from "styled-components";
import OwnerIcon from "../../../static/images/owner.svg";
import LocationIcon from "../../../static/images/Location.svg";
import Tick from "../../../static/images/TickSquare.svg";
// import SelectDefaultComponet from "../../styled-components/Select";
import {
  InputSelectDefault,
  SelectDefault,
} from "../../styled-components/Select";
import { InputComponentChildren } from "../../styled-components/Input";
import { Button } from "../../styled-components/Button";

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

const ListPosts = styled.div`
  background: #f5f6ff;
  display: grid;

  h3 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.05em;
    color: #172024;
  }
  h4 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.05em;
    color: #5d5fef;
  }
  h5 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: right;
    letter-spacing: -0.05em;
    color: #172024;
  }
  label {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.05em;
    color: rgba(23, 32, 36, 0.6);
    img {
      width: 24px;
      height: 24px;
    }
  }
  .list-post-small-content-owner {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.05em;
    color: #172024;
    img {
      width: 15px;
      height: 17px;
    }
  }
  img {
    width: 24px;
    height: 24px;
  }
`;

const listPosts: React.FC = () => {
  let list = [
    "Будівництво",
    "Ремонт квартир",
    "Тульчин, Тульчинський р-н, Вінницька обл.",
    "цфввцф",
  ];
  // useEffect(() => {
  //     store.getList();
  //   }, []);
  return (
    <>
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
      <ListPosts>
        <h4>TOP</h4>
        <div className="list-post-small-content">
          <h3>KUNA Pay - платформа процессинга криптовалют</h3>
          <h5>100 грн / м2</h5>
          <label className="list-post-small-content-owner">
            <img alt="location" src={OwnerIcon} />
            Петров Вячеслав Сергійович
          </label>
          <label>Будівництво</label>
          <label>
            <img alt="location" src={LocationIcon} />
            Тульчин, Тульчинський р-н, Вінницька обл.
          </label>
          <img alt="choose" src={Tick} />
        </div>
      </ListPosts>
      {/* {store.list.map((post) => (
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
      </div> */}
    </>
  );
};

export default observer(listPosts);
