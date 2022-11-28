import styled, { css } from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import img from "img";
import { Form, Field } from "formik";
import Select from "react-select";
import * as a from "components/reusable/keyframes";

export const Section = styled.section`
  width: 100%;
  height: 238px;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobileL} {
    height: 200px;
  }

  ${(props: any) =>
    props.isWebp &&
    css`
      background: url(${img.bgHeroWebp});
      background-size: cover;
    `}

  ${(props: any) =>
    !props.isWebp &&
    css`
      background: url(${img.bgHeroPng});
      background-size: cover;
    `}
`;

export const Wrapper = styled.div`
  width: 1140px;
  max-width: 90%;
  margin: 0 auto;

  @media ${device.mobileL} {
  }
`;

export const ReactSelect = styled(Select)`
  position: absolute !important;
  width: 230px;
  top: 0;
  left: 0;
  z-index: 10;

  @media ${device.mobileL} {
    width: 116px;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${device.mobileL} {
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 8px;

  @media ${device.mobileL} {
    font-size: 24px;
    margin-bottom: 6px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${colors.white};
  margin-bottom: 25px;

  @media ${device.mobileL} {
    font-size: 14px;
  }
`;

export const SearchForm = styled(Form)`
  position: relative;
  max-width: 100%;

  @media ${device.mobileL} {
  }
`;

export const Input = styled(Field)`
  padding: 16px 56px 16px 250px;
  font-size: 20px;
  width: 760px;
  max-width: 100%;
  border: 0;
  border-radius: 3px;
  position: relative;
  z-index: 10;

  &:focus {
    box-shadow: rgb(0 0 0 / 25%) 0px 20px 40px -12px;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

  ${(props: any) =>
    props.$state &&
    css`
      border-radius: 3px;
    `}

  @media ${device.mobileL} {
    padding: 14px 56px 14px 130px;
  }
`;

export const Button = styled.button`
  position: absolute;
  display: flex;
  right: 24px;
  top: 16px;
  border: none;
  background-color: transparent;
  z-index: 20;
  cursor: pointer;

  @media ${device.mobileL} {
    right: 16px;
    top: 14px;
  }
`;

export const Img = styled.img`
  height: 24px;
  width: 24px;

  @media ${device.mobileL} {
  }
`;

export const Icon = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);

  @media ${device.mobileL} {
  }
`;

export const Spinner = styled.span`
  &:after {
    content: "";
    display: block;
    margin-left: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid ${colors.blue};
    border-color: ${colors.blue} transparent ${colors.blue} transparent;
    animation: ${a.rotate} 1.2s linear infinite;
  }
`;

export const customStyles = {
  indicatorSeparator: () => ({ display: "none" }),
  control: (base: any, state: any) => ({
    ...base,
    height: "55px",
    background: colors.grey5,
    borderRadius: "3px",
    paddingLeft: "10px",
    paddingRight: "30px",
    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "22px",
      right: "16px",
      width: "3px",
      height: "10px",
      borderRadius: "3px",
      background: state.menuIsOpen ? colors.blue : colors.grey3,
      transform: state.menuIsOpen ? "rotate(-45deg)" : "rotate(-135deg)",
      transition: "All .3s",
    },
    "&:after": {
      right: "21px",
      transform: state.menuIsOpen ? "rotate(45deg)" : "rotate(135deg)",
    },

    "@media only screen and (max-width: 1200px)": {
      ...base["@media only screen and (max-width: 1200px)"],
      height: "51px",
    },

  }),
  option: (styles: any) => ({
    ...styles,
    backgroundColor: colors.white,
    color: colors.grey1,
    "&:hover": {
      backgroundColor: colors.grey5,
    },
  }),
};
