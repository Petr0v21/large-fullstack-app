import React, { useContext } from "react";
import FooterBack from "../../../static/images/FooterBack.svg";
import instagram from "../../../static/images/instagram_small.svg";
import facebook from "../../../static/images/facebook_small.svg";
import telegram from "../../../static/images/telegram_small.svg";
import viber from "../../../static/images/whatsapp.svg";
import { device } from "../../styled-components/size";
import styled from "styled-components";

const FooterStyled = styled.div`
  padding: 5vw 2vw 2vw 4vw;
  background: url(${FooterBack});
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  h2 {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
  }
  h3 {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 2vw;
  }
  label {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    color: rgba(245, 246, 255, 0.5);
  }
  .footer-support-block-icons {
    img {
      width: 50px;
      height: 50px;
    }
  }
  .footer-left-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .footer-right-block {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vw;
  }
  .footer-support-block-icons {
    display: flex;
    gap: 1vw;
  }

  @media ${device.mobileS} {
    // label {
    //   font-size: 6px;
    // }
    // h2 {
    //   font-size: 16px;
    //   line-height: 20px;
    // }
    // h3 {
    //   font-size: 8px;
    //   line-height: 10px;
    // }
    // .footer-support-block-icons {
    //   img {
    //     width: 12px;
    //     height: 12px;
    //   }
    // }
    label {
        font-size: 10px;
      }
      h2 {
        font-size: 24px;
        line-height: 28px;
      }
      h3 {
        font-size: 12px;
        line-height: 14px;
      }
      .footer-support-block-icons {
        img {
          width: 20px;
          height: 20px;
        }
      }
  }

  @media ${device.mobileM} {
  //   label {
  //     font-size: 8px;
  //   }
  //   h2 {
  //     font-size: 20px;
  //     line-height: 24px;
  //   }
  //   h3 {
  //     font-size: 10px;
  //     line-height: 12px;
  //   }
  //   .footer-support-block-icons {
  //     img {
  //       width: 14px;
  //       height: 14px;
  //     }
  //   }
  // }
  label {
    font-size: 10px;
  }
  h2 {
    font-size: 28px;
    line-height: 32px;
  }
  h3 {
    font-size: 14px;
    line-height: 18px;
  }
  .footer-support-block-icons {
    img {
      width: 25px;
      height: 25px;
    }
  }
}

  @media ${device.mobileL} {
    // label {
    //   font-size: 10px;
    // }
    // h2 {
    //   font-size: 24px;
    //   line-height: 28px;
    // }
    // h3 {
    //   font-size: 12px;
    //   line-height: 14px;
    // }
    // .footer-support-block-icons {
    //   img {
    //     width: 16px;
    //     height: 16px;
    //   }
    // }
    label {
      font-size: 12px;
    }
    h2 {
      font-size: 28px;
      line-height: 32px;
    }
    h3 {
      font-size: 14px;
      line-height: 18px;
    }
    .footer-support-block-icons {
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
  }

  // 768
  @media ${device.tablet} {
    label {
      font-size: 12px;
    }
    h2 {
      font-size: 28px;
      line-height: 32px;
    }
    h3 {
      font-size: 14px;
      line-height: 18px;
    }
    .footer-support-block-icons {
      img {
        width: 25px;
        height: 25px;
      }
    }
  }

  @media ${device.laptop} {
    label {
      font-size: 14px;
    }
    h2 {
      font-size: 32px;
      line-height: 38px;
    }
    h3 {
      font-size: 16px;
      line-height: 20px;
    }
    .footer-support-block-icons {
      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  @media ${device.laptopL} {
    label {
      font-size: 16px;
    }
    h2 {
      font-size: 36px;
      line-height: 44px;
    }
    h3 {
      font-size: 18px;
      line-height: 22px;
    }
    .footer-support-block-icons {
      img {
        width: 40px;
        height: 40px;
      }
    }
  }

  @media ${device.desktop} {
    label {
      font-size: 18px;
    }
    h2 {
      font-size: 40px;
      line-height: 48px;
    }
    h3 {
      font-size: 20px;
      line-height: 24px;
    }
    .footer-support-block-icons {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer-left-block">
        <h2>BilWork</h2>
        <h3>company</h3>
        <label>© 2021 bilwork.ua Все права защищены</label>
      </div>
      <div className="footer-right-block">
        <label>Гаряча лінія: +380993286769</label>
        <div className="footer-support-block-icons">
          <img alt="facebook_small" src={facebook} />
          <img alt="instagram_small" src={instagram} />
          <img alt="telegram_small" src={telegram} />
          <img alt="viber_small" src={viber} />
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
