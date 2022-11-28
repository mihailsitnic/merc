import styled from "styled-components";
import colors from "theme/colors";
import device from "theme/device";

export const Section = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;

  @media ${device.mobileL} {
  }
`;

export const Flex = styled.div`
  position: relative;

  @media ${device.mobileL} {
  }
`;

export const Icon = styled.img`
  position: absolute;
  top: 10px;
  left: 8px;
  outline: none;
  cursor: pointer;

  @media ${device.mobileL} {
  }
`;

export const Input = styled.input`
  border: 1px solid ${colors.grey3};
  outline: 1px solid transparent;
  background: ${colors.white};
  width: 100%;
  height: 36px;
  border-radius: 4px;
  padding: 0 12px 0 30px;
  outline: none;

  &:focus {
    box-shadow: 0 2px 10px 0 rgba(26, 26, 26, 0.15);
    border: 1px solid ${colors.black};
    outline: 1px solid ${colors.black};
    background-color: ${colors.white};
  }

  @media ${device.mobileL} {
  }
`;
