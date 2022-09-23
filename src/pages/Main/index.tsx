import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import BackImage from "../../static/images/BackMainPage.svg";
import BackImageSmall from "../../static/images/BackMainPageSmall.svg";
import RoadforBook from "../../static/images/road1.svg";
import ImageDesc from "../../static/images/image_ab.svg";
import TelegramBig from "../../static/images/telegram.svg";
import InstagramBig from "../../static/images/instagram.svg";
import FacebookBig from "../../static/images/facebook.svg";
import styled from "styled-components";
import Header from "../../app/component/Header";
import { device } from "../../app/styled-components/size/index";
import Footer from "../../app/component/Footer";
import { Link } from "react-router-dom";

const MainPagePreview = styled.div`
  background: url(${window.innerWidth >= 520 ? BackImage : BackImageSmall});
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  label {
    color: white;
  }
  .main-text-preview {
    grid-area: text;
  }

  .main-button {
    grid-area: button;
    text-decoration: none;
    width: 25vw;
    height: 60px;
    background: #5766ec;
    border-radius: 12px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: white;
      text-decoration: none;
    }
  }
  .header {
    grid-area: header;
  }
  display: grid;
  grid-template-columns: 5% 30% 30% 30% 5%;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header header"
    ". . . . . "
    ". text . . ."
    ". . . button .";
  @media ${device.mobileS} {
    font-size: 12px;
    main-text-preview {
      letter-spacing: 0.1em;
    }
    width: 100%;
    height: 80vh;
    .main-button {
      width: 100%;
      height: 34px;
      font-size: 12px;
    }
  }

  @media ${device.mobileM} {
    font-size: 12px;
    width: 100%;
    // height: 300px;
    height: 80vh;
    .main-button {
      width: 100%;
      height: 38px;
      font-size: 14px;
    }
  }

  @media (max-width: 520px) {
    grid-template-rows: 25% 10% 40% 25%;
    grid-template-areas:
      "header header header header header"
      ". . . . . "
      ". text text . ."
      ". . button button .";
  }

  @media ${device.mobileL} {
    font-size: 14px;
    width: 100%;
    // height: 320px;
    height: 80vh;
    .main-button {
      width: 100%;
      height: 42px;
      font-size: 14px;
    }
  }

  // 768

  @media ${device.tablet} {
    font-size: 12px;
    width: 100%;
    // height: 500px;
    height: 90vh;
    .main-button {
      height: 42px;
      font-size: 12px;
    }
  }

  @media ${device.laptop} {
    font-size: 14px;
    width: 100%;
    height: 600px;
    .main-button {
      height: 48px;
      font-size: 14px;
    }
  }

  @media ${device.laptopL} {
    font-size: 16px;
    width: 100%;
    height: 700px;
    .main-button {
      height: 52px;
      font-size: 16px;
    }
  }

  @media ${device.desktop} {
    font-size: 18px;
    width: 100%;
    height: 800px;
    .main-button {
      height: 60px;
      font-size: 18px;
    }
  }
`;

const AboutUsStyled = styled.div`
  background: white;
  width: 100%;
  height: auto;
  h2 {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 48px;
  }
  h3 {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 36px;
    height: 36px;
    margin: 0;
    margin-bottom: 2vh;
    text-align: center;
  }
  .main-aboutUs-title {
    text-align: center;
    grid-area: title;
  }
  .main-aboutUs-shortDescription {
    text-align: center;
    grid-area: short;
  }
  .main-aboutUs-statistics {
    margin-top: 5vh;
    color: white;
    padding: 5vh 10vw;
    background: #172024;
    grid-area: statistics;
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  .main-aboutUs-large-text {
    margin-top: 5vh;
    padding: 2vh 5vw 5vw 5vw;
    border-bottom: 1px solid black;
    grid-area: large;
    display: flex;
    justify-content: space-evenly;
  }
  .main-aboutUs-left-img {
    width: 45%;
    height: auto;
  }
  .main-aboutUs-right-text {
    display: flex;
    flex-direction: column;
    gap: 2vw;
    width: 35%;
    h3 {
      font-family: "Russo One";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 24px;
    }
  }
  display: grid;
  grid-template-columns: 10% 30% 20% 30% 10%;
  grid-template-rows: auto;
  grid-template-areas:
    ". title title title ."
    ". short short short ."
    "statistics statistics statistics statistics statistics"
    ". large large large .";
  @media ${device.mobileS} {
    font-size: 10px;
    h2 {
      font-size: 24px;
      line-height: 36px;
    }
    h3 {
      font-size: 16px;
      line-height: 16px;
      height: 16px;
    }
    main-aboutUs-statistics {
      label {
        font-size: 5px;
      }
    }
    .main-aboutUs-right-text {
      h3 {
        font-size: 12px;
        line-height: 12px;
      }
    }
  }

  @media ${device.mobileM} {
    font-size: 12px;
    h2 {
      font-size: 28px;
      line-height: 30px;
    }
    h3 {
      font-size: 14px;
      line-height: 16px;
      height: 16px;
    }
    .main-aboutUs-right-text {
      h3 {
        font-size: 12px;
        line-height: 12px;
      }
    }
  }

  @media ${device.mobileL} {
    font-size: 12px;
    h2 {
      font-size: 30px;
      line-height: 34px;
    }
    h3 {
      font-size: 20px;
      line-height: 20px;
      height: 20px;
    }
    .main-aboutUs-right-text {
      h3 {
        font-size: 12px;
        line-height: 12px;
      }
    }
  }

  @media (max-width: 520px) {
    .main-aboutUs-large-text {
      h3 {
        text-align: center;
      }
      img {
        width: 0;
        height: 0;
      }
      .main-aboutUs-right-text {
        width: 80%;
      }
      label {
        text-align: center;
      }
    }
  }

  // 768

  @media ${device.tablet} {
    font-size: 12px;
    h2 {
      font-size: 34px;
      line-height: 34px;
    }
    h3 {
      font-size: 24px;
      line-height: 24px;
      height: 24px;
    }
    .main-aboutUs-right-text {
      h3 {
        font-size: 14px;
        line-height: 14px;
      }
    }
  }

  @media ${device.laptop} {
    font-size: 14px;
    h2 {
      font-size: 38px;
      line-height: 38px;
    }
    h3 {
      font-size: 28px;
      line-height: 28px;
      height: 28px;
    }
    .main-aboutUs-right-text {
      h3 {
        font-size: 16px;
        line-height: 16px;
      }
    }
  }

  @media ${device.laptopL} {
    font-size: 16px;
    h2 {
      font-size: 44px;
      line-height: 44px;
    }
    h3 {
      font-size: 32px;
      line-height: 32px;
      height: 32px;
    }
    .main-aboutUs-right-text {
      h3 {
        font-size: 20px;
        line-height: 20px;
      }
    }
  }

  @media ${device.desktop} {
    font-size: 18px;
    h2 {
      font-size: 48px;
      line-height: 48px;
    }
    h3 {
      font-size: 36px;
      line-height: 36px;
      height: 36px;
    }
    .main-aboutUs-right-text {
      h3 {
        font-size: 24px;
        line-height: 24px;
      }
    }
  }
`;

const Guidebook = styled.div`
  background: white;
  width: 100%;
  height: auto;
  padding: 5vw 0;
  h2 {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 48px;
  }
  h4 {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    margin-top: 2%;
  }
  .main-guidebook-title {
    margin-top: 5vw;
    text-align: center;
    grid-area: title;
  }

  .main-guidebook-content {
    padding: 0 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vw;
    // background: url(${RoadforBook});
    // background-repeat: no-repeat;
    // background-position: center center;
    label {
      text-align: center;
    }
  }

  .main-guidebook-for-book {
    border-right: 1px solid black;
    grid-area: forBook;
    h4 {
      text-align: center;
    }
  }
  .main-guidebook-for-worker {
    grid-area: forWorker;
    h4 {
      text-align: center;
    }
  }
  display: grid;
  grid-template-columns: 10% 40% 40% 10%;
  grid-template-rows: auto;
  grid-template-areas:
    ". title title ."
    ". forBook forWorker .";
  @media ${device.mobileS} {
    font-size: 10px;
    h2 {
      font-size: 24px;
      line-height: 24px;
    }
    h4 {
      font-size: 15px;
      line-height: 15px;
      height: 15px;
    }
    .main-aboutUs-right-text {
      h3 {
        font-size: 8px;
        line-height: 8px;
      }
    }
  }

  @media ${device.mobileM} {
    font-size: 12px;
    h2 {
      font-size: 26px;
      line-height: 26px;
    }
    h4 {
      font-size: 16px;
      line-height: 16px;
      height: 16px;
    }
    .main-aboutUs-right-text {
      h3 {
        font-size: 10px;
        line-height: 10px;
      }
    }
  }

  @media ${device.mobileL} {
    font-size: 12px;
    h2 {
      font-size: 30px;
      line-height: 30px;
    }
    h4 {
      font-size: 20px;
      line-height: 20px;
      height: 20px;
    }
    .main-aboutUs-right-text {
      h3 {
        font-size: 12px;
        line-height: 12px;
      }
    }
  }

  @media (max-width: 520px) {
    .main-guidebook-for-book {
      padding-bottom: 5vw;
      border-right: 0;
      border-bottom: 1px solid black;
    }
    .main-guidebook-for-worker {
      padding-top: 5vw;
      padding-bottom: 5vw;
    }
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: auto;
    grid-template-areas:
      ". title ."
      ". forBook ."
      ". forWorker .";
  }

  // 768
  @media ${device.tablet} {
    font-size: 12px;
    h2 {
      font-size: 34px;
      line-height: 34px;
    }
    h4 {
      font-size: 24px;
      line-height: 24px;
      height: 24px;
    }
    .main-aboutUs-right-text {
      h3 {
        font-size: 14px;
        line-height: 14px;
      }
    }
  }

  @media ${device.laptop} {
    font-size: 14px;
    h2 {
      font-size: 38px;
      line-height: 38px;
    }
    h4 {
      font-size: 28px;
      line-height: 28px;
      height: 28px;
    }
    .main-aboutUs-right-text {
      h3 {
        font-size: 16px;
        line-height: 16px;
      }
    }
  }

  @media ${device.laptopL} {
    font-size: 16px;
    h2 {
      font-size: 44px;
      line-height: 44px;
    }
    h4 {
      font-size: 32px;
      line-height: 32px;
      height: 32px;
    }
    .main-aboutUs-right-text {
      h3 {
        font-size: 20px;
        line-height: 20px;
      }
    }
  }

  @media ${device.desktop} {
    font-size: 18px;
    h2 {
      font-size: 48px;
      line-height: 48px;
    }
    h4 {
      font-size: 36px;
      line-height: 36px;
      height: 36px;
    }
    .main-aboutUs-right-text {
      h3 {
        font-size: 24px;
        line-height: 24px;
      }
    }
  }
`;

const SupportBlock = styled.div`
  //   width: 100%;
  height: auto;
  background: #f5f6ff;
  padding: 2vw 5vw 4vw 5vw;
  h2 {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 48px;
  }
  label {
    text-align: center;
    padding: 0 5vw;
  }
  .supportblock-links {
    margin-top: 3vw;
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    img {
      width: 100px;
      height: 100px;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.mobileS} {
    font-size: 10px;
    h2 {
      font-size: 20px;
      line-height: 20px;
    }
    .supportblock-links {
      img {
        width: 40px;
        height: 40px;
      }
    }
  }

  @media ${device.mobileM} {
    font-size: 12px;
    h2 {
      font-size: 24px;
      line-height: 24px;
    }
    .supportblock-links {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }

  @media ${device.mobileL} {
    font-size: 12px;
    h2 {
      font-size: 28px;
      line-height: 28px;
    }
    .supportblock-links {
      img {
        width: 60px;
        height: 60px;
      }
    }
  }

  // 768
  @media ${device.tablet} {
    font-size: 12px;
    h2 {
      font-size: 34px;
      line-height: 34px;
    }
    .supportblock-links {
      img {
        width: 70px;
        height: 70px;
      }
    }
  }

  @media ${device.laptop} {
    font-size: 14px;
    h2 {
      font-size: 38px;
      line-height: 38px;
    }
    .supportblock-links {
      img {
        width: 80px;
        height: 80px;
      }
    }
  }

  @media ${device.laptopL} {
    font-size: 16px;
    h2 {
      font-size: 44px;
      line-height: 44px;
    }
    .supportblock-links {
      img {
        width: 100px;
        height: 100px;
      }
    }
  }

  @media ${device.desktop} {
    font-size: 18px;
    h2 {
      font-size: 48px;
      line-height: 48px;
    }
    .supportblock-links {
      img {
        width: 120px;
        height: 1200px;
      }
    }
  }
`;
const MainPagePreviewComponent: React.FC = () => {
  return (
    <>
      <MainPagePreview>
        <div className="header">
          <Header />
        </div>
        <label className="main-text-preview">
          We are a global leader in the design, marketing and distribution of
          premium lifestyle products for more than 50 years
        </label>
        <div className="main-button">
          <Link to="/list">Перейти до списку</Link>
        </div>
      </MainPagePreview>
      <AboutUsStyled id="about">
        <h2 className="main-aboutUs-title">Про нас</h2>
        <label className="main-aboutUs-shortDescription">
          Ми - група компаній під загальною назвою KUNA (далі - Ми, Наші). Кожна
          компанія є учасником екосистеми KUNA, в яку вход
        </label>
        <div className="main-aboutUs-statistics">
          <div>
            <h3>$8 227 116</h3>
            <label>Обсяг торгів за 7 днів</label>
          </div>
          <div>
            <h3>$1 391 769</h3>
            <label>Обсяг торгів за день</label>
          </div>
          <div>
            <h3>36 070</h3>
            <label>Активних трейдерів</label>
          </div>
        </div>
        <div className="main-aboutUs-large-text">
          <img alt="img" src={ImageDesc} className="main-aboutUs-left-img" />
          <div className="main-aboutUs-right-text">
            <h3>Рахунки біржі забезпечені на 100%</h3>
            <label>
              Кількість активів на нашій біржі – це реально існуючі кошти.
            </label>
            <label>
              У банків норма резервування складає менше 10% від загального
              обсягу залучених коштів. Наша біржа завжди резервує 100% коштів.
              Тому в будь-який момент користувачі можуть забрати свої активи і
              це ніяк не вплине на роботу біржі.
            </label>
          </div>
        </div>
      </AboutUsStyled>
      <Guidebook>
        <h2 className="main-guidebook-title">Що потрібно робити?</h2>
        <div className="main-guidebook-for-book">
          <h4>Для замовника </h4>
          <div className="main-guidebook-content">
            <label>Перейдіть до списку робітників</label>
            <label>Відсортуйте список</label>
            <label>Виберіть пост який вам найбільше сподобавя</label>
            <label>Почніть діалог будь-яким способом з робітником </label>
          </div>
        </div>
        <div className="main-guidebook-for-worker">
          <h4>Для робітника </h4>
          <div className="main-guidebook-content">
            <label>Зарегеструйтесь</label>
            <label>Відкорегуйте свій профіль</label>
            <label>Створіть пост</label>
            <label>Очікуйте клієнтів 😊</label>
          </div>
        </div>
        {/* </div> */}
      </Guidebook>
      <SupportBlock id="contact">
        <h2>Залишилися запитання?</h2>
        <label>
          Відповідаємо протягом 30 секунд! Ми спілкуємося в зручних для вас
          месенджерах. Ніяких автовідповідачів і роботів. Спілкування лише з
          живими людьми. 😊 😊
        </label>
        <div className="supportblock-links">
          <img alt="telegram_big" src={TelegramBig} />
          <img alt="instagram_big" src={InstagramBig} />
          <img alt="facebook_big" src={FacebookBig} />
        </div>
      </SupportBlock>
      <Footer />
    </>
  );
};

export default MainPagePreviewComponent;
