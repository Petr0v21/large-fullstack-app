import styled from "styled-components";
import { device } from "../size";

type ButtonProps = {
  margin?: string;
  design?: string;
  backcolor?: string;
  backcolorHover?: string;
  backcolorActive?: string;
  borderHover?: string;
  borderActive?: string;
  radiusBorder?: string;
  widthMax?: string;
  widthMin?: string;
  fontSize?: string;
  slowed?: string;
  contentBefore?: string;
  contentAfter?: string;
  size?: string;
  spaceBetween?: string;
  dropdown?: string;
  opacityHover?: string;
  opacityActive?: string;
};

type PaginationProps = {
  current?: boolean;
};

export const Pagination = styled.div<PaginationProps>`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  label {
    color: #172024;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 24px;
  }
  ${(props) =>
    props.current
      ? `
  label {
    font-weight: 600;
  }
  border: 1px solid #172024;
  `
      : ""}
  @media ${device.mobileS} {
    width: 20px;
    height: 20px;
    label {
      font-size: 16px;
      line-height: 16px;
    }
  }

  @media ${device.mobileM} {
    width: 25px;
    height: 25px;
    label {
      font-size: 18px;
      line-height: 18px;
    }
  }

  @media ${device.tablet} {
    width: 30px;
    height: 30px;
    label {
      font-size: 20px;
      line-height: 20px;
    }
  }
  @media ${device.laptop} {
    width: 35px;
    height: 35px;
    label {
      font-size: 22px;
      line-height: 22px;
    }
  }
  @media ${device.laptopL} {
    width: 40px;
    height: 40px;
    label {
      font-size: 24px;
      line-height: 24px;
    }
  }
`;
