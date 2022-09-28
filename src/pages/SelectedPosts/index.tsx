import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import store from "../../stores/selectedStore";
import Header from "../../app/component/Header";
import Footer from "../../app/component/Footer";
import PostSmall from "../../app/component/PostSmall";
import styled from "styled-components";
import { device } from "../../app/styled-components/size";
import PostsContext from "../../context/PostsContext";

const SelectedPostsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(90vh - 15vh);
  padding-bottom: 5vw;
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
  @media ${device.mobileS} {
    h2 {
      font-size: 24px;
      line-height: 24px;
    }
    h6 {
      font-size: 10px;
      line-height: 10px;
    }
  }

  @media ${device.mobileM} {
    h2 {
      font-size: 28px;
      line-height: 28px;
    }
    h6 {
      font-size: 12px;
      line-height: 12px;
    }
  }

  @media ${device.tablet} {
    h2 {
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
    h2 {
      font-size: 42px;
      line-height: 42px;
    }
    h6 {
      font-size: 20px;
      line-height: 20px;
    }
  }
  @media ${device.laptopL} {
    h2 {
      font-size: 48px;
      line-height: 48px;
    }
    h6 {
      font-size: 20px;
      line-height: 20px;
    }
  }
`;

const FormPost: React.FC = () => {
  const context = useContext(PostsContext);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("selectedPosts") as string);
    if (data && data.ids.length !== 0)
      store.getList(data.ids, context?.deleteId);
  }, []);
  return (
    <>
      <Header back={true} />
      <SelectedPostsStyled>
        <h2 className="selected-list-title">Список обранних оголошень</h2>
        <h6 className="selected-list-count">
          Оголошень знайдено: {store.list.length}
        </h6>
        {store.list.map((post) => (
          <PostSmall key={post._id} post={post} />
        ))}
      </SelectedPostsStyled>
      <Footer />
    </>
  );
};

export default observer(FormPost);
