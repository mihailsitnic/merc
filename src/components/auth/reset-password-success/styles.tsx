import styled from "styled-components";
import device from "theme/device";
import { Link } from "react-router-dom";
import colors from "theme/colors";
import img from "img";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  padding-top: 60px;
  padding-bottom: 25px;

  @media ${device.mobileL} {
    height: 100vh;
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
`;

export const Article = styled.article`
  text-align: center;
`;

export const ShieldOk = styled.img`
  margin-bottom: 16px;
`;

export const LoginLink = styled(Link)`
  color: ${colors.blue};
  font-size: 14px;
  font-weight: 600;
  display: inline-block;
  margin-top: 32px;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  line-height: 1.43;
  transition: All 0.2s;

  &:before {
    content: "";
    position: absolute;
    left: -27px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    transition: All 0.2s;
    background: url(${img.iconArrowRightBlue});
  }
  &:hover {
    &:before {
      left: -25px;
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
