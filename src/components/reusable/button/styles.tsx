import styled, { css } from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import * as a from "components/reusable/keyframes";

export const Button = styled.button`
  width: 100%;
  height: 36px;
  padding: 8px 16px;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(50, 50, 50, 0.1);
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  transition: All 0.2s;
  position: relative;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.99);
  }

  @media ${device.mobileL} {
  }

  ${(props: any) =>
    props.color === "red" &&
    css`
      background: ${colors.red};
      color: ${colors.white};
    `}

    ${(props: any) =>
    props.color === "grey" &&
    css`
      box-shadow: none;
      background: ${colors.grey4};
      color: ${colors.black};
    `}

    ${(props: any) =>
    props.color === "blue" &&
    css`
      background: ${colors.blue};
      color: ${colors.white};
    `}

    ${(props: any) =>
    props.ml &&
    css`
      margin-left: 16px;
    `}

    ${(props: any) =>
    props.auto &&
    css`
      width: auto;
    `}

    ${(props: any) =>
    props.active &&
    css`
      & .loader {
        display: block;
      }
    `}

    ${(props: any) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    `}
`;

export const Spinner = styled.span`
  display: none;

  &:after {
    content: "";
    display: block;
    margin-left: 10px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid ${colors.white};
    border-color: ${colors.white} transparent ${colors.white} transparent;
    animation: ${a.rotate} 1.2s linear infinite;
  }
`;
