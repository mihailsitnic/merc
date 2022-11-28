import styled, { css } from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import { Link } from "react-router-dom";

export const Sidebar = styled.aside`
  background: ${colors.white};
  width: 285px;
  min-height: 80vh;
  border-radius: 4px;
  box-shadow: rgb(50 50 50 / 10%) 0px 1px 3px 0px;
  padding-bottom: 10px;
  display: block;
  z-index: 2;

  @media ${device.mobileL} {
    width: 60px;
    display: none;
  }
`;

export const Name = styled.h4`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.grey1};
  line-height: 1.6;
  font-size: 10px;
  text-transform: uppercase;
  user-select: none;
  padding: 30px 20px 12px;

  @media ${device.tablet} {
    display: none;
  }
`;

export const Nav = styled.nav`
  @media ${device.mobileL} {
  }
`;

export const Ul = styled.ul`
  list-style: none;

  @media ${device.mobileL} {
  }
`;

export const Li = styled.li`
  @media ${device.mobileL} {
  }
`;

export const A = styled(Link)`
  width: 100%;
  display: flex;
  text-decoration: none;
  padding: 10px 0;
  padding-left: 52px;
  padding-right: 20px;
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.black};
  position: relative;
  user-select: none;

  &:hover {
    background: ${colors.grey5};
  }

  &:before {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    left: 24px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media ${device.mobileL} {
    height: 40px;
    padding-left: 0;
    padding-right: 0;
  }

  ${(props: any) =>
    props.icon &&
    css`
      &:before {
        background: url(${props.icon}) no-repeat left center;
      }
    `}

  ${(props: any) =>
    props.$active && props.$iconActive &&
    css`
      font-weight: bold;
      background: ${colors.blue4};

      &:before {
          background: url(${props.$iconActive}) no-repeat left center;
      }

      &:hover {
        background: ${colors.blue4};
      }
    `}
`;

export const Drop = styled.span`
  width: 100%;
  display: flex;
  text-decoration: none;
  padding: 10px 0;
  padding-left: 52px;
  padding-right: 20px;
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.black};
  position: relative;
  user-select: none;

  &:before {
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    left: 24px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media ${device.mobileL} {
    height: 40px;
    padding-left: 0;
    padding-right: 0;
  }

  ${(props: any) =>
    props.icon &&
    css`
      &:before {
        background: url(${props.icon}) no-repeat left center;
      }
    `}
`;

export const Span = styled.span`
  cursor: pointer;

  @media ${device.mobileL} {
    display: none;
  }
`;

export const GroupList = styled.ul`
  list-style: none;
  padding-left: 54px;
  margin-bottom: 10px;

  @media ${device.mobileL} {
  }
`;

export const GroupLi = styled.li`
  padding: 2px 0;

  @media ${device.mobileL} {
  }
`;

export const GroupLink = styled(Link)`
  color: ${colors.black};
  font-size: 14px;
  line-height: 1.43;
  user-select: none;

  @media ${device.mobileL} {
  }
`;
