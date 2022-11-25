import styled, { css } from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import { Link } from "react-router-dom";
import img from "img";

export const More = styled.span`
  position: absolute;
  top: 25px;
  right: 20px;

  @media ${device.mobileL} {
  }
`;

export const Icon = styled.img`
  position: relative;
  cursor: pointer;

  @media ${device.mobileL} {
  }
`;

export const Row = styled.div`
  display: flex;

  @media ${device.mobileL} {
  }
`;

export const Col = styled.div`
  min-width: 140px;

  @media ${device.mobileL} {
  }
`;

export const Title = styled.h4`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.75;
  color: ${colors.black};
  display: inline-block;

  &:hover {
    color: ${colors.red};
  }

  @media ${device.mobileL} {
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.grey1};
  padding-top: 4px;

  @media ${device.mobileL} {
  }
`;

export const Feet = styled.footer`
  border-top: 1px solid ${colors.grey4};
  margin-top: 12px;
  padding-top: 12px;
  display: flex;
  align-items: baseline;

  @media ${device.mobileL} {
  }
`;

export const CTA = styled.span`
  height: 36px;
  display: flex;
  align-items: center;
  padding-left: 36px;
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.black};
  position: relative;
  text-decoration: none;
  cursor: pointer;

  &:before {
    content: "";
    width: 12px;
    height: 12px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
    background: url(${img.iconEdit2}) no-repeat center center;
  }

  &:hover {
    background: ${colors.grey5};
  }

  @media ${device.mobileL} {
  }

  ${(props: any) => props.title === "Edit" && css`
    &:before {
      background: url(${img.iconEdit2}) no-repeat center center;
    }
  `}

  ${(props: any) => props.title === "Delete" && css`
    &:before {
        background: url(${img.iconDelete}) no-repeat center center;
      }
  `}
`;

export const Ul = styled.ul`
  top: 20px;
  right: 0;
  z-index: 99;
  width: 165px;
  padding: 8px 0;
  border-radius: 4px;
  background: ${colors.white};
  box-shadow: rgb(0 0 0 / 25%) 0px 20px 40px -12px;
  list-style: none;
  position: absolute;
  display: none;

  @media ${device.mobileL} {
  }

  ${(props: any) =>
    props.active &&
    css`
      display: block;
    `}
`;

export const Li = styled.li`
  @media ${device.mobileL} {
  }
`;
