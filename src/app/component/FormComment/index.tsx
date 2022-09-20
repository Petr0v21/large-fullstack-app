import CheckBoxComponet from "../../styled-components/SmallChecks";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import store from "../../../stores/commentStore";
import { Button } from "../../styled-components/Button";
import {
  InputComponentChildren,
  TextAreaStyled,
} from "../../styled-components/Input";
import { Rating } from "../../styled-components/Rating";
import Star from "../../../static/images/Star.svg";
import StarOn from "../../../static/images/StarOn.svg";
import Send from "../../../static/images/Send.svg";
import styled from "styled-components";
import { device } from "../../styled-components/size";

const FormCommentStyled = styled.form`
  background: #f5f6ff;
  margin: 2vw 10%;
  padding: 1vw 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;
  h4 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.05em;
    color: rgba(23, 32, 36, 1);
  }
  label {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    color: rgba(23, 32, 36, 1);
  }
  .comment-input {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .comment-form-left {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 2vw;
    }
    .comment-form-right {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 3vw;
    }
  }
  .comment-button {
    width: 300px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.05em;
    img {
      width: 24px;
      height: 24px;
    }
  }
  @media ${device.mobileS} {
    h4 {
      font-size: 18px;
      line-height: 18px;
    }
    label {
      font-size: 10px;
      line-height: 10px;
    }
    .comment-button {
      width: 120px;
      font-size: 10px;
      line-height: 10px;
      img {
        width: 16px;
        height: 16px;
      }
    }
  }

  @media ${device.mobileL} {
    h4 {
      font-size: 20px;
      line-height: 20px;
    }
    label {
      font-size: 12px;
      line-height: 12px;
    }
    .comment-button {
      width: 180px;
      font-size: 12px;
      line-height: 12px;
      img {
        width: 18px;
        height: 18px;
      }
    }
  }

  @media (max-width: 625px) {
    .comment-input {
      flex-direction: column-reverse;
      align-items: center;
      gap: 2vw;
    }
  }

  @media ${device.tablet} {
    h4 {
      font-size: 22px;
      line-height: 22px;
    }
    label {
      font-size: 12px;
      line-height: 12px;
    }
    .comment-button {
      width: 300px;
      font-size: 14px;
      line-height: 14px;
      img {
        width: 22px;
        height: 22px;
      }
    }
  }

  @media ${device.laptopL} {
    h4 {
      font-size: 24px;
      line-height: 24px;
    }
    label {
      font-size: 14px;
      line-height: 14px;
    }
    .comment-button {
      width: 300px;
      font-size: 16px;
      line-height: 16px;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const FormComment: React.FC<{ id: string }> = (props) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <FormCommentStyled
      onSubmit={async (event) => {
        event.preventDefault();
        await store.postComment(props.id);
      }}
    >
      <h4>Створити коментарь</h4>
      <div className="comment-input">
        <div className="comment-form-left">
          <InputComponentChildren
            size={window.innerWidth <= 928 ? "small" : "medium"}
          >
            <input
              type="text"
              name="email"
              placeholder="email"
              value={store.comment.email}
              onChange={(event) => store.addField(event)}
              required
            />
          </InputComponentChildren>
          <InputComponentChildren
            size={window.innerWidth <= 928 ? "small" : "medium"}
          >
            <input
              type="text"
              name="name"
              placeholder="name"
              value={store.comment.name}
              onChange={(event) => store.addField(event)}
              required
            />
          </InputComponentChildren>
          <div className="checkbox">
            <CheckBoxComponet size="medium" effect="bounce">
              <input type="checkbox" required />
            </CheckBoxComponet>
            <label>Agree with Politic Information</label>
          </div>
        </div>
        <div className="comment-form-right">
          <Rating>
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <img
                  alt="star-rating"
                  key={index}
                  src={index <= (hover || rating) ? StarOn : Star}
                  onClick={() => {
                    setRating(index);
                    store.addField({
                      target: {
                        value: index,
                        name: "rating",
                      },
                    });
                  }}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                />
              );
            })}
          </Rating>
          <TextAreaStyled size={window.innerWidth <= 928 ? "small" : "medium"}>
            <textarea
              name="text"
              placeholder="text"
              value={store.comment.text}
              onChange={(event) => store.addField(event)}
              required
            />
          </TextAreaStyled>
        </div>
      </div>
      <Button className="comment-button">
        Залишити коментар
        <img alt="send" src={Send} />
      </Button>
    </FormCommentStyled>
  );
};

export default observer(FormComment);
