import { observer } from "mobx-react";
import React, { useEffect } from "react";
import PostSmall from "../PostSmall";
import store from "../../../stores/listStore";
import styled from "styled-components";
import FilterBlock from "../Filter";
import { device } from "../../styled-components/size";
import { Pagination } from "../../styled-components/Pagination";
import Filter from "../Filter";
import CloseIcon from "../../../static/images/Union.svg";
import ArrowPagin from "../../../static/images/ArrowPagin.svg";

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
  h6 {
    margin: 0;
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    text-align: right;
    color: #172024;
  }
  .list-choosed-select {
    padding-bottom: 1vw;
    width: 50%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
    border-bottom: 1px solid black;
    label {
      cursor: pointer;
      background: #f5f6ff;
      padding: 2px 4px;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      text-align: center;
      letter-spacing: -0.05em;
      img {
        margin-left: 1vw;
        width: 10px;
        height: 10px;
      }
      transition: all 0.2s linear;
      &:hover {
        opacity: 0.6;
      }
    }
  }
  .list-results {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .Pages {
    display: flex;
    align-items: center;
    gap: 5vw;
    padding: 5vw 0;
    img {
      width: 60px;
      height: auto;
      opacity: 0.7;
    }
    .arrow-left {
      transform: rotate(180deg);
    }
  }
  @media ${device.mobileS} {
    .list-title {
      font-size: 24px;
      line-height: 24px;
    }
    h6 {
      font-size: 10px;
      line-height: 10px;
    }
    .list-choosed-select {
      label {
        font-size: 8px;
        line-height: 8px;
        img {
          margin-left: 1vw;
          width: 6px;
          height: 6px;
        }
      }
    }
  }

  @media ${device.mobileM} {
    .list-title {
      font-size: 28px;
      line-height: 28px;
    }
    h6 {
      font-size: 12px;
      line-height: 12px;
    }
    .list-choosed-select {
      label {
        font-size: 10px;
        line-height: 10px;
        img {
          margin-left: 1vw;
          width: 8px;
          height: 8px;
        }
      }
    }
  }

  @media ${device.tablet} {
    .list-title {
      font-size: 34px;
      line-height: 34px;
    }
    h6 {
      font-size: 16px;
      line-height: 16px;
    }
    .list-choosed-select {
      label {
        font-size: 12px;
        line-height: 12px;
        img {
          margin-left: 1vw;
          width: 9px;
          height: 9px;
        }
      }
    }
  }
  @media ${device.laptop} {
    .list-title {
      font-size: 42px;
      line-height: 42px;
    }
    h6 {
      font-size: 20px;
      line-height: 20px;
    }
    .list-choosed-select {
      label {
        font-size: 14px;
        line-height: 14px;
        img {
          margin-left: 1vw;
          width: 10px;
          height: 10px;
        }
      }
    }
  }
  @media ${device.laptopL} {
    .list-title {
      font-size: 48px;
      line-height: 48px;
    }
    h6 {
      font-size: 20px;
      line-height: 20px;
    }
    .list-choosed-select {
      label {
        font-size: 14px;
        line-height: 14px;
        img {
          margin-left: 1vw;
          width: 10px;
          height: 10px;
        }
      }
    }
  }
`;

const listPosts: React.FC = () => {
  useEffect(() => {
    store.getList();
  }, []);
  return (
    <ListPosts>
      <h2 className="list-title">Список оголошень</h2>
      <Filter />
      <div className="list-results">
        <div className="list-choosed-select">
          {Object.entries(store.filt).map((val, index) => {
            if (val[1] !== "") {
              return (
                <label
                  key={val[1] + index + val[0]}
                  onClick={() => store.selectField(`${val[0]}`, "")}
                >
                  {val[1]}
                  <img alt="del" src={CloseIcon} />
                </label>
              );
            }
          })}
        </div>
        <h6>Оголошень знайдено: {store.count}</h6>
      </div>
      {store.loading.is() && (
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {store.list.map((post) => (
        <PostSmall key={post._id} post={post} />
      ))}
      <div className="Pages">
        {store.pages.length != 0 ? (
          <img
            alt="arrow-left"
            className="arrow-left"
            src={ArrowPagin}
            onClick={() =>
              store.currentpage !== 1 && store.changePage(store.currentpage - 1)
            }
          />
        ) : undefined}
        {store.pages.map((page, index) => (
          <Pagination
            key={page}
            onClick={() => store.changePage(page)}
            className="PageButton"
            current={store.currentpage === index + 1 ? true : false}
          >
            <label>{page}</label>
          </Pagination>
        ))}
        {store.pages.length != 0 ? (
          <img
            alt="arrow-right"
            className="arrow-right"
            src={ArrowPagin}
            onClick={() =>
              store.currentpage !== store.pages.length &&
              store.changePage(store.currentpage + 1)
            }
          />
        ) : undefined}
      </div>
    </ListPosts>
  );
};

export default observer(listPosts);
