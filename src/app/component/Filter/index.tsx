import { observer } from "mobx-react";
import styled from "styled-components";
import store from "../../../stores/listStore";
import { InputSelectDefault } from "../../styled-components/Select";
import { InputComponentChildren } from "../../styled-components/Input";
import { Button } from "../../styled-components/Button";
import React, { useEffect, useState } from "react";
import { InputProps } from "../../styled-components/Input";
import arrow from "../../../static/images/ArrowDownBlack.svg";

const FilterBlockStyled = styled.div`
  height: auto;
  padding: 5vh 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2vw 1vw;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    letter-spacing: -0.05em;
    color: #000000;
    transition: all 0.2s linear;
    &:hover {
      opacity: 0.6;
    }
  }
  .filter-input-block {
    padding-bottom: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;
  }
  .filter-select-block {
    max-width: 80vw;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1vw;
  }
  @media (max-width: 1024px) {
    .filter-select-block {
      justify-content: center;
    }
  }

  @media (max-width: 620px) {
    label {
      padding: 1vw;
      font-size: 13px;
      line-height: 13px;
    }
    .filter-input-block {
      align-items: center;
      flex-direction: column;
    }
  }
`;

const SelectSmall = styled.div<InputProps>`
  .select-input {
    max-width: 300px;
    font-size: 12px;
    width: 200px;
    input {
      padding: 8px 2.4em 8px 10px;
      width: 100%;
    }
    img {
      position: absolute;
      right: 1em;
      cursor: pointer;
      width: 14px;
      height: 14px;
    }
    ${(props) => {
      switch (props.size) {
        case "small":
          return `
        font-size: 12px;
        width: 160px;
        input {
          padding: 8px;
        }
        img {
          width: 12px;
          height: 12px;
        }
        padding: 0px;
    `;
        case "medium":
          return `
        font-size: 14px;
        input {
          padding: 10px;
        }
        img {
          width: 14px;
          height: 14px;
        }
        width: 200px;
    `;
        case "large":
          return `
        font-size: 16px;
        input {
          padding: 12px;
        }
        img {
          width: 16px;
          height: 16px;
        }
        width: 300px;
    `;
      }
    }}
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#afb1b6")};
    border-radius: 8px;
    &:focus-within {
      border: 1px solid #6658d3;
    }
    input {
      cursor: pointer;
      caret-color: transparent;
      border: 0;
      z-index: 0;
      background-color: transparent;
      font: inherit;
      &:focus {
        outline: 0;
      }
      ${(props) => (props.invalid ? "color: red" : "")}
      &::placeholder {
        ${(props) => (props.invalid ? "color: red" : "")}
      }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  .content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    max-width: 300px;
    font-size: 12px;
    padding: 5px 10px;
    width: calc(200px - 20px);
    ${(props) => {
      switch (props.size) {
        case "small":
          return `
    font-size: 12px;
    padding: 4px 8px ;
    width: calc(160px - 16px);

`;
        case "medium":
          return `
    font-size: 14px;
    padding: 5px 10px;
    width: calc(200px - 20px);

`;
        case "large":
          return `
    font-size: 16px;
    padding: 6px 12px;
    width: calc(300px - 24px);

`;
      }
    }}
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    overflow-y: scroll;
    max-height: 120px;
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  .content:active {
    display: block;
  }

  .content p {
    cursor: pointer;
    margin: 0;
    padding: 1em 0.5em;
    &:hover {
      background: whitesmoke;
    }
  }

  &:focus-within .content {
    display: block;
  }
`;

const SortBlock: React.FC = () => {
  const [bigSearch, setBigSearch] = useState(false);
  // const [size, setSize] = useState({
  //   height: window.innerHeight,
  //   width: window.innerWidth,
  // });
  // useEffect(() => {
  //   const handleResize = () => {
  //     setSize({
  //       height: window.innerHeight,
  //       width: window.innerWidth,
  //     });
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // });
  const listLocation = ["Тульчин, Тульчинський р-н, Вінницька обл."];
  const list = ["Будівництво", "Ремонт квартир", "Проектування", "Дизайн"];
  const listPrice = ["До 100грн", "Від 100грн"];
  const listOrder = ["По даті", "Від меншої ціни", "Від найбільшої ціни"];
  useEffect(() => {
    store.getTitles();
  }, [store.filt.title]);
  return (
    <FilterBlockStyled>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(store.filt);
          store.getList();
        }}
      >
        <div className="filter-input-block">
          <InputSelectDefault
            size={window.innerWidth < 1024 ? "small" : "medium"}
          >
            <InputComponentChildren
              size={window.innerWidth < 1024 ? "small" : "medium"}
              img
            >
              <input
                name="title"
                value={store.filt.title}
                onChange={async (event) => {
                  store.addField(event);
                }}
                placeholder="Заголовок"
                autoComplete="off"
              />
            </InputComponentChildren>
            <div className="content">
              {store.listTitle.map((arg) => (
                <p
                  onClick={() => {
                    store.selectField("title", arg.title);
                  }}
                  key={arg.title}
                >
                  {arg.title}
                </p>
              ))}
            </div>
          </InputSelectDefault>
          <InputSelectDefault
            size={window.innerWidth < 1024 ? "small" : "medium"}
          >
            <InputComponentChildren
              size={window.innerWidth < 1024 ? "small" : "medium"}
              img
            >
              <input
                name="location"
                value={store.filt.location}
                onChange={(event) => store.addField(event)}
                placeholder="Місцерозташування"
                autoComplete="off"
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
          <Button size={window.innerWidth < 1024 ? "small" : "medium"}>
            Пошук
          </Button>
        </div>
        {window.innerWidth <= 928 && !bigSearch ? (
          <label onClick={() => setBigSearch(true)}>
            Розширенний пошук ...
          </label>
        ) : (
          <div className="filter-select-block">
            <SelectSmall size="small">
              <div className="select-input">
                <input
                  name="category"
                  value={store.filt.category}
                  onChange={(event) => store.addField(event)}
                  placeholder="Категорія"
                  autoComplete="off"
                />
                <img
                  src={arrow}
                  alt="img"
                  onClick={() => console.log("Click")}
                />
              </div>
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
                        store.selectField("category", arg);
                      }}
                      key={arg}
                    >
                      {arg}
                    </p>
                  ))}
              </div>
            </SelectSmall>
            <SelectSmall size="small">
              <div className="select-input">
                <input
                  name="price"
                  value={store.filt.price}
                  onChange={(event) => store.addField(event)}
                  placeholder="Ціна"
                  autoComplete="off"
                />
                <img
                  src={arrow}
                  alt="img"
                  onClick={() => console.log("Click")}
                />
              </div>
              <div className="content">
                {listPrice.map((arg) => (
                  <p
                    onClick={() => {
                      store.selectField("price", arg);
                    }}
                    key={arg}
                  >
                    {arg}
                  </p>
                ))}
              </div>
            </SelectSmall>
            <SelectSmall size="small">
              <div className="select-input">
                <input
                  name="order"
                  value={store.filt.order}
                  onChange={(event) => store.addField(event)}
                  placeholder="По рейтингу"
                  autoComplete="off"
                />
                <img
                  src={arrow}
                  alt="img"
                  onClick={() => console.log("Click")}
                />
              </div>
              <div className="content">
                {listOrder.map((arg) => (
                  <p
                    onClick={() => {
                      store.selectField("order", arg);
                    }}
                    key={arg}
                  >
                    {arg}
                  </p>
                ))}
              </div>
            </SelectSmall>
          </div>
        )}
        {bigSearch ? (
          <label onClick={() => setBigSearch(false)}>
            Приховати розширенний пошук
          </label>
        ) : null}
      </form>
    </FilterBlockStyled>
  );
};
export default observer(SortBlock);
