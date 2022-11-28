import styled, { css } from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import img from "img";
import * as a from "components/reusable/keyframes";

export const Spinner = styled.span`
  ${(props: any) =>
    props.state === "main" &&
    css`
      display: block;

      &:after {
        content: "";
        display: block;
        margin: 2em auto;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 3px solid ${colors.blue};
        border-color: ${colors.blue} transparent ${colors.blue} transparent;
        animation: ${a.rotate} 1.2s linear infinite;
      }
    `}

  ${(props: any) =>
    props.state === "btn" &&
    css`
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
    `}

    ${(props: any) =>
    props.active &&
    props.state === "btn" &&
    css`
      display: block;
    `}
`;


export const Section = styled.section`
  width: 100%;
  height: 328px;
  margin-top: 30px;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(50, 50, 50, 0.1);
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobileL} {
  }
`;

export const Inner = styled.div`
  max-width: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${device.mobileL} {
  }
`;

export const Icon = styled.img`
  @media ${device.mobileL} {
  }
`;

export const Bold = styled.strong`
  @media ${device.mobileL} {
  }
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  padding-top: 12px;
  color: ${colors.black};

  @media ${device.mobileL} {
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.43;
  padding-top: 12px;
  color: ${colors.black};

  @media ${device.mobileL} {
  }
`;

export const Wrap = styled.div`
  padding-top: 28px;

  @media ${device.mobileL} {
  }
`;

export const ModalHeader = styled.header`
  width: 100%;
  height: 64px;
  background-color: ${colors.grey5};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid ${colors.grey4};

  @media ${device.mobileL} {
  }
`;

export const ModalBody = styled.main`
  padding: 0 20px;
  margin: 20px 0;
  @media ${device.mobileL} {
  }
`;

export const ModalDescription = styled.p`
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.black};

  @media ${device.mobileL} {
  }
`;

export const ModalTitle = styled.h3`
  color: ${colors.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  display: flex;
  align-items: center;
  padding-left: 28px;
  background: url(${img.iconAlert}) no-repeat;
  background-size: 18px;
  background-position-y: 3px;

  @media ${device.mobileL} {
  }
`;

export const ModalFooter = styled.main`
  height: 76px;
  padding: 0 20px;
  border-top: 1px solid ${colors.grey4};
  display: flex;
  align-items: center;
  justify-content: end;

  @media ${device.mobileL} {
  }
`;

export const ModalCloseBtn = styled.img`
  cursor: pointer;

  @media ${device.mobileL} {
  }
`;

export const Li = styled.li`
  height: 36px;
  display: flex;
  align-items: center;
  padding-left: 36px;
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.black};
  cursor: pointer;

  &:before {
    content: "";
    width: 12px;
    height: 12px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
    background: url(${img.iconDelete}) no-repeat center center;
  }

  &:hover {
    background: ${colors.grey5};
  }

  @media ${device.mobileL} {
  }
`;

export const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    border: "none",
    borderRadius: "4px",
    boxShadow: "0 6px 25px 7px rgba(50, 50, 50, 0.25)",
    background: "#fff",
    padding: "0",
    overflow: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  overlay: {
    zIndex: 1000,
    background: "rgba(26, 26, 26, 0.3)",
  },
};
