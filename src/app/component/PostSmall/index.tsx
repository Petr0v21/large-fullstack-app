import React from "react";
import { Link } from "react-router-dom";
import OwnerIcon from "../../../static/images/owner.svg";
import LocationIcon from "../../../static/images/Location.svg";
import Tick from "../../../static/images/TickSquare.svg";
import styled from "styled-components";
import { device } from "../../styled-components/size";

const ListPosts = styled.div`
  width: 80%;
  padding-bottom: 2%;
  margin-top: 2vw;
  background: #f5f6ff;
  display: grid;
  grid-template-columns: 10% 20% 20% 20% 20% 10%;
  grid-template-rows: auto;
  .list-post-small-top {
    grid-area: top;
  }
  .list-post-small-content-title {
    width: 40vw;
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
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding-bottom: 5%;
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
    "top title title title price"
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
  @media ${device.mobileS} {
    font-size: 8px;
    h3 {
      font-size: 10px;
      line-height: 10px;
    }
    h4 {
      font-size: 6px;
      line-height: 6px;
    }
    h5 {
      font-size: 8px;
      line-height: 8px;
    }
    label {
      font-size: 6px;
      line-height: 6px;
      img {
        width: 14px;
        height: 14px;
      }
    }
    .list-post-small-content-category {
      padding-top: 1em;
    }
    .list-post-small-content-choose-icon {
      img {
        width: 18px;
        height: 18px;
      }
    }
    .list-post-small-content-owner {
      padding-bootom: 10%;
      font-size: 10px;
      line-height: 10px;
      img {
        width: 12px;
        height: 10px;
      }
    }
  }

  @media ${device.mobileM} {
    font-size: 10px;
    h3 {
      font-size: 12px;
      line-height: 14px;
    }
    h4 {
      font-size: 6px;
      line-height: 6px;
    }
    h5 {
      font-size: 10px;
      line-height: 10px;
    }
    label {
      font-size: 8px;
      line-height: 8px;
      img {
        width: 16px;
        height: 16px;
      }
    }
    .list-post-small-content-owner {
      font-size: 12px;
      line-height: 12px;
      img {
        width: 15px;
        height: 13px;
      }
    }
  }

  @media ${device.mobileL} {
    font-size: 8px;
    h3 {
      font-size: 12px;
      line-height: 14px;
    }
    h4 {
      font-size: 10px;
      line-height: 12px;
    }
    h5 {
      font-size: 12px;
      line-height: 14px;
    }
    label {
      font-size: 8px;
      line-height: 8px;
      img {
        width: 16px;
        height: 16px;
      }
    }
    .list-post-small-content-choose-icon {
      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  // 768
  @media ${device.tablet} {
    font-size: 14px;
    h3 {
      font-size: 14px;
      line-height: 18px;
    }
    h4 {
      font-size: 14px;
      line-height: 18px;
    }
    h5 {
      font-size: 14px;
      line-height: 18px;
    }
    label {
      font-size: 12px;
      line-height: 12px;
      img {
        width: 20px;
        height: 20px;
      }
    }
    .list-post-small-content-choose-icon {
      img {
        width: 24px;
        height: 24px;
      }
    }
    .list-post-small-content-category {
      padding-top: 0;
    }
    .list-post-small-content-owner {
      padding-bootom: 5%;
      font-size: 12px;
      line-height: 14px;
      img {
        width: 15px;
        height: 17px;
      }
    }
  }

  @media ${device.laptop} {
    font-size: 16px;
    h3 {
      font-size: 16px;
      line-height: 20px;
    }
    h4 {
      font-size: 16px;
      line-height: 20px;
    }
    h5 {
      font-size: 16px;
      line-height: 20px;
    }
    label {
      font-size: 12px;
      line-height: 14px;
      img {
        width: 20px;
        height: 20px;
      }
    }
    .list-post-small-content-owner {
      font-size: 14px;
      line-height: 17px;
      img {
        width: 15px;
        height: 17px;
      }
    }
  }

  @media ${device.laptopL} {
    font-size: 18px;
    h3 {
      font-size: 18px;
      line-height: 22px;
    }
    h4 {
      font-size: 18px;
      line-height: 22px;
    }
    h5 {
      font-size: 18px;
      line-height: 22px;
    }
    label {
      font-size: 14px;
      line-height: 17px;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
  @media ${device.desktop} {
    font-size: 18px;
    h3 {
      font-size: 18px;
      line-height: 22px;
    }
    h4 {
      font-size: 18px;
      line-height: 22px;
    }
    h5 {
      font-size: 18px;
      line-height: 22px;
    }
    label {
      font-size: 14px;
      line-height: 17px;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const PostSmall: React.FC<{ post: any }> = (props) => {
  console.log(props.post);
  return (
    <ListPosts>
      <h4 className="list-post-small-top">TOP</h4>
      <Link to={`/list/${props.post._id}`}>
        <h3 className="list-post-small-content-title">{props.post.title}</h3>
      </Link>
      <h5 className="list-post-small-content-price">{props.post.price} / м2</h5>
      <label className="list-post-small-content-owner">
        <img alt="owner" src={OwnerIcon} />
        {props.post.ownerName}
      </label>
      <label className="list-post-small-content-category">
        {props.post.category}
      </label>
      <label className="list-post-small-content-location">
        <img alt="location" src={LocationIcon} />
        {props.post.location}
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
