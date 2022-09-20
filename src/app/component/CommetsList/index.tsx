import React, { useEffect, useState } from "react";
import store from "../../../stores/commentStore";
import OwnerIcon from "../../../static/images/owner.svg";
import Star from "../../../static/images/Star.svg";
import StarOn from "../../../static/images/StarOn.svg";
import Like from "../../../static/images/Heart.svg";
import LikeOn from "../../../static/images/HeartOn.svg";
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
  .comment-main-content {
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
  .comment-likes {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1vw;
    img {
      cursor: pointer;
      width: 24px;
      height: 24px;
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
    .comment-likes {
      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  @media ${device.mobileL} {
    label {
      font-size: 12px;
      line-height: 16px;
    }
    .comment-likes {
      img {
        width: 21px;
        height: 21px;
      }
    }
  }

  @media ${device.tablet} {
    label {
      font-size: 13px;
      line-height: 17px;
    }
    .comment-likes {
      img {
        width: 22px;
        height: 22px;
      }
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
    .comment-likes {
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const Comment: React.FC<{ comment: any }> = (props) => {
  const [rating, setRating] = useState(props.comment.rating);
  // const [likes, setLikes] = useState(props.comment.likes);
  // const changeHandlerLike = async () => {
  //   try {
  //     if (likes === props.comment.rating) {
  //       setLikes(likes + 1);
  //     } else {
  //       setLikes(likes - 1);
  //     }
  //     await fetch(
  //       `https://desolate-island-05088.herokuapp.com/api/post/comment/like`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           id: props.comment._id,
  //           likes: likes,
  //         }),
  //       }
  //     )
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   } catch (error) {
  //     throw error;
  //   }
  // };
  return (
    <CommentStyled key={props.comment._id}>
      <div className="comment-main-content">
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
      {/* <div className="comment-likes">
        <label>{likes}</label>
        <img
          alt="Like"
          src={likes === props.comment.rating ? Like : LikeOn}
          onClick={() => changeHandlerLike()}
        />
      </div> */}
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
        <Comment comment={comment} key={comment._id} />
      ))}
    </>
  );
};

export default observer(OwnerPosts);
