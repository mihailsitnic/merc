import styled, { css } from "styled-components";
import { Form, Field } from "formik";
import device from "theme/device";
import colors from "theme/colors";

export const Header = styled.header`
  display: flex;
  justify-content: center;
`;

export const Hero = styled.div`
  padding-bottom: 20px;
`;

export const Body = styled.div`
  padding: 30px 0;
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
  font-size: 20px;
  line-height: 1.4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-content: center;

  @media ${device.mobileL} {
    font-size: 17px;
  }
`;

export const LinkBack = styled.span`
  display: flex;
  cursor: pointer;
  position: absolute;
  left: 0;

  &:active {
    opacity: 0.5;
  }
`;

export const ArrowBack = styled.img`
  position: relative;
  right: -3px;
  transition: All 0.2s;
  &:hover {
    right: 0;
    transition: All 0.2s;
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
  border: 1px solid ${colors.grey3};
  outline: 1px solid transparent;
  background: ${colors.white};
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
      box-shadow: 0 2px 10px 0 rgba(255, 0, 101, 0.15);
      border: 1px solid ${colors.red};
      outline: 1px solid ${colors.red};

      &:focus {
        border: 1px solid ${colors.red};
        outline: 1px solid ${colors.red};
        background: ${colors.red3};
      }
    `}
`;

export const HaveAccount = styled.span`
  color: ${colors.grey1};
  font-size: 12px;
  line-height: 1.67;
  display: flex;
  align-items: center;
`;

export const ContactUsLink = styled.a`
  color: ${colors.blue};
  position: relative;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.67;
  margin-left: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: All 0.2s;
  &:active {
    opacity: 0.5;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
`;

export const Sup = styled.sup`
  position: relative;
  top: 3px;
  color: ${colors.red2};

  @media ${device.mobileL} {
  }
`;