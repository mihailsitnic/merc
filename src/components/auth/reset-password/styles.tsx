import styled, { css } from "styled-components";
import { Form, Field } from "formik";
import device from "theme/device";
import { Link } from "react-router-dom";
import colors from "theme/colors";
import img from "img";

export const Header = styled.header`
  display: flex;
  justify-content: center;
`;

export const Body = styled.div``;

export const Hero = styled.div`
  padding-bottom: 20px;
`;

export const Block = styled.div`
  margin-top: 20px;
  display: block;
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
    height: auto;
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
    width: 100%;
    height: 36px;
    border-radius: 4px;
    border: 1px solid ${colors.grey3};
    outline: 1px solid transparent;
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
        box-shadow: 0 2px 10px 0 rgba(255, 0, 101, 0.15);
        border: 1px solid ${colors.red};
        outline: 1px solid ${colors.red};

        &:focus {
          border: 1px solid ${colors.red};
          outline: 1px solid ${colors.red};
          background: ${colors.red3};
        }
      `}

    ${(props: any) =>
    props.placeholder &&
    css`
        color: ${colors.grey1};
      `}
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

export const HaveAccount = styled.span`
  color: ${colors.grey1};
  font-size: 12px;
  line-height: 1.67;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignInLinkArrowRight = styled(Link)`
  color: ${colors.blue};
  position: relative;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.67;
  margin-left: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: All 0.2s;

  &:after {
    content: "";
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    transition: All 0.2s;
    background: url(${img.iconArrowRightBlue});
  }
  &:hover {
    &:after {
      right: -22px;
    }
  }
  &:active {
    opacity: 0.5;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
`;

export const Error = styled.span`
  color: ${colors.red};
  font-size: 12px;
  line-height: 1.33;
  margin-top: 4px;
`;

export const Sup = styled.sup`
  position: relative;
  top: 3px;
  color: ${colors.red2};

  @media ${device.mobileL} {
  }
`;