import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import device from "theme/device";
import { Form, Field } from "formik";
import colors from "theme/colors";

export const Header = styled.header`
  display: flex;
  justify-content: center;
`;

export const Hero = styled.div`
  padding-bottom: 20px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;
`;

export const Logo = styled.img`
  width: 200px;

  @media ${device.mobileL} {
  }
`;

export const Title = styled.h3`
  color: ${colors.black};
  text-align: center;
  font-size: 20px;
  line-height: 1.4;

  @media ${device.mobileL} {
    font-size: 17px;
  }
`;

export const SubTitle = styled.p`
  color: ${colors.grey1};
  text-align: center;
  font-size: 14px;
  line-height: 1.43;
  padding-top: 8px;
`;

export const Forma = styled(Form)`
  height: 90vh;
  padding-top: 60px;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.mobileL} {
    height: 100vh;
  }
`;

export const Label = styled.label`
  color: ${colors.black};
  font-weight: bold;
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 4px;
  display: block;
`;

export const Input = styled(Field)`
  background: ${colors.white};
  border: 1px solid ${colors.grey3};
  outline: 1px solid transparent;
  width: 100%;
  height: 36px;
  border-radius: 4px;
  padding: 0 12px;
  outline: none;

  &:focus {
    box-shadow: 0 2px 10px 0 rgba(26, 26, 26, 0.15);
    border: 1px solid ${colors.black};
    outline: 1px solid ${colors.black};
  }

  ${(props: any) =>
    props.validation &&
    css`
      background: ${colors.red3};
      box-shadow: 0 2px 10px 0 rgba(255, 0, 101, 0.15) !important;
      border: 1px solid ${colors.red};
      outline: 1px solid ${colors.red};

      &:focus {
        border: 1px solid ${colors.red};
        outline: 1px solid ${colors.red};
        background: ${colors.red3};
      }
    `}
`;

export const Remember = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-left: 8px;
  padding-right: 16px;

  @media ${device.mobileL} {
    padding-right: 10px;
  }
`;

export const RadioInput = styled(Field)`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  opacity: 0;
  cursor: pointer;

  &:hover ~ .checkmark {
    box-shadow: 0 0 0 4px rgb(63 118 240 / 10%);
    transition: box-shadow 200ms ease;
  }

  &:checked ~ .checkmark {
    background-color: ${colors.blue};
    border: 1px solid transparent;

    &:after {
      display: block;
    }
  }

  ${(props: any) =>
    props.validation &&
    css`
      & ~ .checkmark {
        box-shadow: 0 0 0 4px rgb(255 0 85 / 50%);
      }
    `}
`;

export const RadioLabel = styled.label`
  color: ${colors.black};
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  position: relative;
  cursor: pointer;
  user-select: none;
`;

export const Radiomark = styled.span`
  position: absolute;
  top: 2;
  left: 0;
  height: 16px;
  width: 16px;
  border: 1px solid ${colors.grey3};
  border-radius: 50%;

  &:after {
    content: "";
    position: absolute;
    left: 4px;
    top: 4px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${colors.white};
    display: none;
  }
`;

export const RadioWrap = styled.span`
  padding-left: 28px;
`;

export const PassWrap = styled.div`
  position: relative;
  display: flex;
`;

export const EyeBtn = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  outline: none;
  cursor: pointer;
`;

export const EyeImg = styled.img``;

export const Error = styled.span`
  color: ${colors.red};
  font-size: 12px;
  line-height: 1.33;
  margin-top: 4px;
`;

export const HaveAccount = styled.span`
  color: ${colors.grey1};
  font-size: 12px;
  line-height: 1.67;
`;

export const SignInLink = styled(Link)`
  color: ${colors.blue};
  position: relative;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.67;
  margin-left: 5px;
  text-decoration: none;
  transition: All 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const Gender = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.white};
  border: 1px dashed ${colors.grey3};
  border-radius: 4px;
  width: 100%;
  height: 38px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Col = styled.div`
  width: 49%;
`;

export const Block = styled.div`
  margin-top: 20px;
`;

export const Footer = styled.footer`
  padding-top: 10px;
  text-align: center;
`;

export const Btn = styled.span`
  margin: 0 10px;
  color: ${colors.blue};
  position: relative;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.67;
  text-decoration: none;
  transition: All 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const Sup = styled.sup`
  position: relative;
  top: 3px;
  color: ${colors.red2};

  @media ${device.mobileL} {
  }
`;
