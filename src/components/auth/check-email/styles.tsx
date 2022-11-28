import styled from "styled-components";
import device from "theme/device";
import { Link } from "react-router-dom";
import colors from "theme/colors";
import img from "img";
import * as a from "components/reusable/keyframes";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  padding-top: 60px;
  padding-bottom: 25px;

  @media ${device.mobileL} {
    height: auto;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
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
  width: 80%;
  margin: 0 auto;
`;

export const Body = styled.div`
  text-align: center;
`;

export const ShieldOk = styled.img`
  margin-bottom: 16px;
`;

export const SendAgain = styled(Link)`
  color: ${colors.blue};
  font-size: 14px;
  font-weight: 600;
  display: inline-block;
  margin-top: 32px;
  position: relative;
  text-decoration: none;
  line-height: 1.43;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    left: -25px;
    width: 20px;
    height: 20px;
    background: url(${img.iconRotateLeft});
    transition: All 0.5s;
  }

  &:hover {
    &:before {
      -webkit-animation: ${a.rotate} 0.5s;
      animation-fill-mode: forwards;
    }
  }

  &:active {
    opacity: 0.5;
  }
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
