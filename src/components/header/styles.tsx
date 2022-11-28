import styled from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import { Link } from "react-router-dom";

export const Section = styled.header`
  width: 100%;
  background: ${colors.white};
  box-shadow: rgb(50 50 50 / 10%) 0px 1px 3px 0px;
  z-index: 200;
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;

  @media ${device.mobileL} {
  }
`;

export const Wrapper = styled.div`
  width: 1140px;
  max-width: 90%;
  margin: 0px auto;
  position: relative;

  @media ${device.mobileL} {
  }
`;

export const Inner = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.mobileL} {
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: ${colors.blue};
  font-weight: bold;
  font-size: 22px;
  display: flex;
  align-items: center;

  @media ${device.mobileL} {
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media ${device.mobileL} {
  }
`;

export const SignInLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${colors.red};
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid ${colors.grey3};

  @media ${device.mobileL} {
  }
`;

export const SignUpLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${colors.blue};

  @media ${device.mobileL} {
  }
`;

export const Img = styled.img`
  width: 150px;
  display: flex;

  @media ${device.mobileL} {
  }
`;

export const Back = styled.img`
  display: flex;

  @media ${device.mobileL} {
  }
`;

export const Title = styled.h4`
  display: flex;
  margin-left: 6px;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.blue};

  @media ${device.mobileL} {
  }
`;

