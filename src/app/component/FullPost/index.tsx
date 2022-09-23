import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router";
import FormComment from "../FormComment";
import postStore from "../../../stores/listStore";
import styled from "styled-components";
import OwnerIcon from "../../../static/images/IconOwnerBig.svg";
import LocationIcon from "../../../static/images/Location.svg";
import ArrowPagin from "../../../static/images/ArrowPagin.svg";
import ImageDefault from "../../../static/images/ImageDefault.svg";
import { device } from "../../styled-components/size";
import { Link } from "react-router-dom";
import CommentList from "../CommetsList";

const ContentFullPost = styled.div`
  padding: 5vw 5%;
  font-family: "Montserrat";
  font-style: normal;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 4%;
  color: #172024;
  .post-text {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 34%;
    gap: 2vw;
    h2 {
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      text-align: start;
      margin: 0;
    }
    h4 {
      margin: 0;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: -0.05em;
    }
    .post-text-owner {
      width: 100%;
      padding: 4% 2%;
      background: #f5f6ff;
      display: flex;
      align-items: center;
      gap: 2vw;
      label {
        font-weight: 500;
        font-size: 18px;
        line-height: 18px;
        text-align: center;
      }
      img {
        width: 46px;
        height: 46px;
      }
    }
    .post-text-location {
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: -0.05em;
      color: rgba(23, 32, 36, 0.7);
      img {
        width: 24px;
        height: 24px;
      }
    }
    .post-text-category {
      display: flex;
      align-items: center;
      gap: 0.5vw;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.05em;
      color: rgba(23, 32, 36, 0.7);
      h6 {
        margin: 0;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.05em;
      }
    }
    .post-text-description {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: -0.05em;
    }
  }
  // @media ${device.mobileS} {
  //   .post-text {
  //     h2 {
  //       font-size: 14px;
  //       line-height: 14px;
  //     }
  //     h4 {
  //       font-size: 10px;
  //       line-height: 12px;
  //     }
  //     .post-text-owner {
  //       label {
  //         font-size: 9px;
  //         line-height: 9px;
  //       }
  //       img {
  //         width: 28px;
  //         height: 28px;
  //       }
  //     }
  //     .post-text-location {
  //       font-size: 9px;
  //       line-height: 9px;
  //       img {
  //         width: 14px;
  //         height: 14px;
  //       }
  //     }
  //     .post-text-category {
  //       font-size: 9px;
  //       line-height: 9px;
  //       h6 {
  //         font-size: 9px;
  //         line-height: 9px;
  //       }
  //     }
  //     .post-text-description {
  //       font-size: 9px;
  //       line-height: 9px;
  //     }
  //   }
  // }

  @media ${device.mobileS} {
    .post-text {
      h2 {
        font-size: 16px;
        line-height: 16px;
      }
      h4 {
        font-size: 12px;
        line-height: 14px;
      }
      .post-text-owner {
        label {
          font-size: 10px;
          line-height: 10px;
        }
        img {
          width: 32px;
          height: 32px;
        }
      }
      .post-text-location {
        font-size: 10px;
        line-height: 10px;
        img {
          width: 16px;
          height: 16px;
        }
      }
      .post-text-category {
        font-size: 10px;
        line-height: 10px;
        h6 {
          font-size: 10px;
          line-height: 10px;
        }
      }
      .post-text-description {
        font-size: 12px;
        line-height: 12px;
      }
    }
  }

  @media ${device.mobileL} {
    .post-text {
      h2 {
        font-size: 18px;
        line-height: 18px;
      }
      h4 {
        font-size: 12px;
        line-height: 16px;
      }
      .post-text-owner {
        label {
          font-size: 12px;
          line-height: 12px;
        }
        img {
          width: 36px;
          height: 36px;
        }
      }
      .post-text-location {
        font-size: 11px;
        line-height: 12px;
        img {
          width: 18px;
          height: 18px;
        }
      }
      .post-text-category {
        font-size: 11px;
        line-height: 12px;
        h6 {
          font-size: 11px;
          line-height: 12px;
        }
      }
      .post-text-description {
        font-size: 12px;
        line-height: 12px;
      }
    }
  }

  @media (max-width: 520px) {
    flex-direction: column;
    .post-text {
      h2 {
        text-align: center;
      }
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
      width: 100%;
      .post-text-owner {
        width: auto;
        padding: 0.2em 0.5em;
      }
    }
  }
  // 768
  @media ${device.tablet} {
    .post-text {
      h2 {
        font-size: 20px;
        line-height: 22px;
      }
      h4 {
        font-size: 14px;
        line-height: 18px;
      }
      .post-text-owner {
        label {
          font-size: 14px;
          line-height: 14px;
        }
        img {
          width: 40px;
          height: 40px;
        }
      }
      .post-text-location {
        font-size: 12px;
        line-height: 14px;
        img {
          width: 20px;
          height: 20px;
        }
      }
      .post-text-category {
        font-size: 12px;
        line-height: 14px;
        h6 {
          font-size: 12px;
          line-height: 14px;
        }
      }
      .post-text-description {
        font-size: 12px;
        line-height: 14px;
      }
    }
  }

  @media ${device.laptop} {
    .post-text {
      h2 {
        font-size: 22px;
        line-height: 26px;
      }
      h4 {
        font-size: 16px;
        line-height: 20px;
      }
      .post-text-owner {
        label {
          font-size: 16px;
          line-height: 16px;
        }
        img {
          width: 42px;
          height: 42px;
        }
      }
      .post-text-location {
        font-size: 13px;
        line-height: 16px;
        img {
          width: 22px;
          height: 22px;
        }
      }
      .post-text-category {
        font-size: 13px;
        line-height: 16px;
        h6 {
          font-size: 13px;
          line-height: 16px;
        }
      }
      .post-text-description {
        font-size: 13px;
        line-height: 16px;
      }
    }
  }

  @media ${device.laptopL} {
    .post-text {
      h2 {
        font-size: 24px;
        line-height: 28px;
      }
      h4 {
        font-size: 18px;
        line-height: 22px;
      }
      .post-text-owner {
        label {
          font-size: 18px;
          line-height: 18px;
        }
        img {
          width: 46px;
          height: 46px;
        }
      }
      .post-text-location {
        font-size: 14px;
        line-height: 18px;
        img {
          width: 24px;
          height: 24px;
        }
      }
      .post-text-category {
        font-size: 14px;
        line-height: 17px;
        h6 {
          font-size: 14px;
          line-height: 17px;
        }
      }
      .post-text-description {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
  @media ${device.desktop} {
    .post-text {
      h2 {
        font-size: 24px;
        line-height: 28px;
      }
      h4 {
        font-size: 18px;
        line-height: 22px;
      }
      .post-text-owner {
        label {
          font-size: 18px;
          line-height: 18px;
        }
        img {
          width: 46px;
          height: 46px;
        }
      }
      .post-text-location {
        font-size: 14px;
        line-height: 18px;
        img {
          width: 24px;
          height: 24px;
        }
      }
      .post-text-category {
        font-size: 14px;
        line-height: 17px;
        h6 {
          font-size: 14px;
          line-height: 17px;
        }
      }
      .post-text-description {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
`;

const AddInfPost = styled.div<{ active?: boolean }>`
  .post-menu {
    width: 60%;
    margin: 0 20%;
    padding: 1vw 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    // border-bottom: 1px solid black;
    label {
      a {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        letter-spacing: -0.05em;
        color: #172024;
        padding: 0.5vw;
        border-bottom: 1px solid rgba(23, 32, 36, 0);
        transition: all 0.2s linear;
        &:hover {
          border-bottom: 1px solid rgba(23, 32, 36, 1);
        }
        ${(props) =>
          props.active ? "border-bottom: 1px solid rgba(23, 32, 36, 1);" : ""}
      }
    }
  }
  @media ${device.mobileS} {
    .post-menu {
      label {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }

  @media ${device.mobileL} {
    .post-menu {
      label {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }

  @media ${device.tablet} {
    .post-menu {
      label {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }

  @media ${device.laptopL} {
    .post-menu {
      label {
        font-size: 18px;
        line-height: 22px;
      }
    }
  }
`;

const Gallary = styled.div`
  width: 52%;
  .post-gallary-img {
    display: flex;
    justify-content: center;
    img {
      width: 60%;
      height: auto;
    }
  }
  .post-pagination {
    padding: 2vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    label {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 15px;
      color: #253256;
    }
    .arrow-right-disable {
      opacity: 0.4;
    }
    .arrow-left-disable {
      transform: rotate(180deg);
      opacity: 0.4;
    }
    .arrow-left {
      transform: rotate(180deg);
    }
    img {
      width: 60px;
      height: auto;
      cursor: pointer;
    }
  }
  @media ${device.mobileS} {
    .post-pagination {
      label {
        font-size: 10px;
        line-height: 10px;
      }
      img {
        width: 30px;
      }
    }
  }

  @media ${device.mobileM} {
    .post-pagination {
      label {
        font-size: 11px;
        line-height: 11px;
      }
      img {
        width: 35px;
      }
    }
  }

  @media ${device.mobileL} {
    .post-pagination {
      label {
        font-size: 12px;
        line-height: 12px;
      }
      img {
        width: 40px;
      }
    }
  }

  @media (max-width: 520px) {
    width: 100%;
  }

  // 768
  @media ${device.tablet} {
    .post-pagination {
      label {
        font-size: 13px;
        line-height: 13px;
      }
      img {
        width: 45px;
      }
    }
  }

  @media ${device.laptop} {
    .post-pagination {
      label {
        font-size: 14px;
        line-height: 14px;
      }
      img {
        width: 50px;
      }
    }
  }

  @media ${device.laptopL} {
    .post-pagination {
      label {
        font-size: 15px;
        line-height: 15px;
      }
      img {
        width: 60px;
      }
    }
  }
  @media ${device.desktop} {
    .post-pagination {
      label {
        font-size: 15px;
        line-height: 15px;
      }
      img {
        width: 60px;
      }
    }
  }
`;

const UsersPost: React.FC = () => {
  const [slid, setSLid] = useState(0);
  if (postStore.post.url.length > 0) {
    setSLid(1);
  }
  const [active, setActive] = useState(false);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    postStore.getPost(id!);
  }, []);
  useEffect(
    () => () => {
      console.log("unmount");
      postStore.cleanPost();
      console.log(postStore.post);
    },
    []
  );
  return (
    <div>
      <ContentFullPost>
        <Gallary>
          <div className="post-gallary-img">
            {postStore.post.url.length > 0 ? (
              <img alt="image-post" src={postStore.post.url[slid - 1]} />
            ) : (
              <img alt="image-post" src={ImageDefault} />
            )}
          </div>
          <div className="post-pagination">
            {slid <= 1 ? (
              <img
                alt="arrow-left"
                className="arrow-left-disable"
                src={ArrowPagin}
              />
            ) : (
              <img
                alt="arrow-left"
                className="arrow-left"
                src={ArrowPagin}
                onClick={() => setSLid(slid - 1)}
              />
            )}
            <label>
              {slid} / {postStore.post.url.length}
            </label>
            {slid >= postStore.post.url.length ? (
              <img
                alt="arrow-right"
                className="arrow-right-disable"
                src={ArrowPagin}
              />
            ) : (
              <img
                alt="arrow-right"
                className="arrow-right"
                src={ArrowPagin}
                onClick={() => setSLid(slid + 1)}
              />
            )}
          </div>
        </Gallary>
        <div className="post-text">
          <h2>{postStore.post.title}</h2>
          <div className="post-text-owner">
            <img alt="owner" src={OwnerIcon} />{" "}
            <label>{postStore.post.ownerName}</label>
          </div>
          <label className="post-text-location">
            <img alt="location" src={LocationIcon} />
            {postStore.post.location}
          </label>
          <label className="post-text-category">
            Категорія: <h6>{postStore.post.category}</h6>
          </label>
          <h4>Опис оголошення:</h4>
          <label className="post-text-description">
            {postStore.post.description}
          </label>
        </div>
      </ContentFullPost>
      <AddInfPost active={active}>
        <div className="post-menu">
          <label>
            <Link
              to={active ? "" : "comments"}
              onClick={() => setActive(!active)}
            >
              Коментарі {`(${postStore.post.links.length})`}
            </Link>
          </label>
        </div>
        <Routes>
          <Route
            path="/comments"
            element={<CommentList links={postStore.post.links} />}
          />
        </Routes>
      </AddInfPost>
      <FormComment id={id!} />
    </div>
  );
};

export default observer(UsersPost);
