import styled from "styled-components";
import colors from "theme/colors";
import device from "theme/device";

export const Header = styled.header`
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

export const Body = styled.main`
  padding: 0 20px;
  margin-top: 20px;
  margin-bottom: 28px;

  @media ${device.mobileL} {
  }
`;

export const Name = styled.p`
  font-size: 14px;
  line-height: 1.43;
  font-weight: 600;
  padding-bottom: 4px;
  color: ${colors.black};

  @media ${device.mobileL} {
  }
`;

export const Title = styled.h3`
  color: ${colors.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  display: flex;
  align-items: center;

  @media ${device.mobileL} {
  }
`;

export const Footer = styled.main`
  height: 76px;
  padding: 0 20px;
  border-top: 1px solid ${colors.grey4};
  display: flex;
  align-items: center;
  justify-content: end;

  @media ${device.mobileL} {
  }
`;

export const CloseBtn = styled.img`
  cursor: pointer;

  @media ${device.mobileL} {
  }
`;

export const ActionEdit = styled.img`
  cursor: pointer;

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
