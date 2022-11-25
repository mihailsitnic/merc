import styled, { css } from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import { Link } from "react-router-dom";
import img from "img";

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 14px;

  @media ${device.mobileL} {
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;

  & + li {
    margin-left: 28px;
    position: relative;

    &:after {
      content: "";
      background: url(${img.iconArrowRight}); 
      width: 12px;
      height: 12px;
      position: absolute;
      top: 2px;
      left: -21px;
    }
  }

  &:last-child {
    & a {
      color: ${colors.grey3};
      display: flex;
      align-items: center;
      font-size: 12px;
      text-decoration: none;
      pointer-events: none;
      user-select: none;
    }
  }

  @media ${device.mobileL} {
    margin-top: 5px;
  }
`;

export const A = styled(Link)`
  color: ${colors.black};
  display: flex;
  align-items: center;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
`;

export const HomeIcon = styled.img``;
