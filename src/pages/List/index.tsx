import FullPost from "../../app/component/FullPost";
import { observer } from "mobx-react";
import React from "react";
import { Route, Routes } from "react-router";
import Header from "../../app/component/Header";
import Footer from "../../app/component/Footer";
import ListPosts from "../../app/component/ListPosts";
import styled from "styled-components";

const ListBody = styled.div`
  min-height: calc(90vh - 15vh);
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

const ListPost: React.FC = () => {
  return (
    <>
      <Header back={true} />
      <ListBody>
        <Routes>
          <Route path="*" element={<ListPosts />} />
          <Route path=":id/*" element={<FullPost />} />
        </Routes>
      </ListBody>
      <Footer />
    </>
  );
};

export default observer(ListPost);
