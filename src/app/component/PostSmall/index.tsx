import React from "react";
import { Link } from "react-router-dom";
import OwnerIcon from "../../../static/images/owner.svg";
import LocationIcon from "../../../static/images/Location.svg";
import Tick from "../../../static/images/TickSquare.svg";
import styled from "styled-components";

const ListPosts = styled.div`
  width: 80%;
  background: #f5f6ff;
  display: grid;
  grid-template-columns: 10% 20% 20% 20% 20% 10%;
  grid-template-rows: auto;
  .list-post-small-top {
    grid-area: top;
  }
  .list-post-small-content-title {
    grid-area: title;
  }
  .list-post-small-content-price {
    grid-area: price;
  }
  .list-post-small-content-category {
    grid-area: category;
  }
  .list-post-small-content-location {
    display: flex;
    align-items: center;
    gap: 0.25em;
    grid-area: location;
  }
  .list-post-small-content-choose-icon {
    display: flex;
    justify-content: flex-end;
    img {
      width: 24px;
      height: 24px;
    }
    grid-area: choose;
  }
  .list-post-small-content-owner {
    grid-area: owner;
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
  grid-template-areas:
    "top title title . price"
    ". owner owner . ."
    ". category location location choose";
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
`;

const PostSmall: React.FC<{ post: any }> = (props) => {
  console.log(props.post);
  return (
    <ListPosts>
      <h4 className="list-post-small-top">TOP</h4>
      <Link to={`${props.post._id}`}>
        <h3 className="list-post-small-content-title">
          KUNA Pay - платформа процессинга криптовалют
        </h3>
      </Link>
      <h5 className="list-post-small-content-price">100 грн / м2</h5>
      <label className="list-post-small-content-owner">
        <img alt="owner" src={OwnerIcon} />
        Петров Вячеслав Сергійович
      </label>
      <label className="list-post-small-content-category">Будівництво</label>
      <label className="list-post-small-content-location">
        <img alt="location" src={LocationIcon} />
        Тульчин, Тульчинський р-н, Вінницька обл.
      </label>
      <div className="list-post-small-content-choose-icon">
        <img alt="choose" src={Tick} />
      </div>
    </ListPosts>
    // <div className="post-small">
    //   <img src={props.post.url[0]} />
    //   <div className="post-small-content">
    //     <div className="rating">
    //       <h4>{props.post.rating.average}</h4>
    //       <label>К-ть:{props.post.rating.amount}</label>
    //     </div>
    //     <Link to={`${props.post._id}`}>{props.post.title}</Link>
    //     <div className="post-small-tags">
    //       <label>{props.post.category}</label>
    //       <label>{props.post.location}</label>
    //     </div>
    //   </div>
    //   <h3>{props.post.price}</h3>
    //   <div className="post-small-owner"></div>
    // </div>
  );
};

export default PostSmall;
