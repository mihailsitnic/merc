import styled from "styled-components";
import device from "theme/device";
import colors from "theme/colors";
import img from "img";
import { Link } from "react-router-dom";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${img.bgPattern})
`;

export const SignInBlock = styled.div`
  height: 90vh;
  width: 500px;
  max-width: 90%;
  border-radius: 10px;
  background: ${colors.white};
  position: relative;
  display: flex;
  align-items: center;
  z-index: 20;

  @media ${device.mobileL} {
    height: auto;
  }
`;

export const Wrapper = styled.div`
  width: calc(100% - 120px);
  margin: 0 auto;

  @media ${device.mobileL} {
    width: 90%;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
`;

export const HomePageLink = styled.a`
  color: ${colors.blue};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.67;
  text-decoration: none;
  transition: All 0.2s;

  &:hover {
    opacity: 0.8;
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
  flex-direction: column;
  align-items: center;
`;

export const SignInLink = styled(Link)`
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