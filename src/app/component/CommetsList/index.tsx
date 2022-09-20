import React, { useEffect, useState } from "react";
import store from "../../../stores/commentStore";
import OwnerIcon from "../../../static/images/owner.svg";
import Star from "../../../static/images/Star.svg";
import StarOn from "../../../static/images/StarOn.svg";
import styled from "styled-components";
import { observer } from "mobx-react";
import { Rating } from "../../styled-components/Rating";
import { device } from "../../styled-components/size";

const CommentStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f6ff;
  margin: 2vw 10%;
  padding: 2vw 5% 1% 5%;
  label {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.05em;
    color: #172024;
  }
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2vw;
  }
  .comment-owner {
    display: flex;
    align-items: center;
    gap: 0.5em;
    img {
      width: 15px;
      height: 17px;
    }
  }
  @media ${device.mobileS} {
    label {
      font-size: 11px;
      line-height: 15px;
    }
    .comment-owner {
      gap: 1em;
      img {
        width: 13px;
        height: 15px;
      }
    }
  }

  @media ${device.mobileL} {
    label {
      font-size: 12px;
      line-height: 16px;
    }
  }

  @media ${device.tablet} {
    label {
      font-size: 13px;
      line-height: 17px;
    }
  }

  @media ${device.laptopL} {
    label {
      font-size: 14px;
      line-height: 18px;
    }
    .comment-owner {
      gap: 0.5em;
      img {
        width: 15px;
        height: 17px;
      }
    }
  }
`;

const Comment: React.FC<{ comment: any }> = (props) => {
  const [rating, setRating] = useState(props.comment.rating);
  return (
    <CommentStyled key={props.comment._id}>
      <div>
        <label className="comment-owner">
          <img alt="owner" src={OwnerIcon} />
          {props.comment.name}
        </label>
        <Rating>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <img
                alt="star-rating"
                key={index + props.comment.name}
                src={index <= rating ? StarOn : Star}
              />
            );
          })}
        </Rating>
      </div>
      <label>{props.comment.text}</label>
    </CommentStyled>
  );
};

const OwnerPosts: React.FC<{ links: any }> = (props) => {
  console.log(props.links);
  useEffect(() => {
    store.getCommentList(props.links);
  }, []);
  return (
    <>
      {store.list.map((comment) => (
        <Comment comment={comment} />
      ))}
    </>
  );
};

export default observer(OwnerPosts);
