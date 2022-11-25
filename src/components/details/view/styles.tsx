import styled, { css } from "styled-components";
import colors from "theme/colors";
import device from "theme/device";

export const Section = styled.section`
  padding: 24px 28px 28px;
  border-radius: 4px;
  margin-top: 28px;
  box-shadow: 0 1px 3px 0 rgba(50, 50, 50, 0.1);
  background: ${colors.white};
  position: relative;

  @media ${device.mobileL} {
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.black};
`;

export const Inner = styled.div`
  padding-top: 28px;

  &:first-child {
    padding-top: 0;
  }
`;

export const Value = styled.p`
  font-size: 15px;
  line-height: 1.43;
  border: 1px dashed #dde0e5;
  border-radius: 4px;
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: ${colors.grey1};
  overflow: scroll;
  white-space: nowrap;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  line-height: 1.43;
  padding-bottom: 4px;
  display: inline-block;

  ${(props: any) =>
    props.$pd &&
    css`
      padding-bottom: 8px;
    `}

  @media ${device.mobileL} {
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  width: calc(100% / 2 - 15px);
  
  @media ${device.mobileL} {
    width: 100%;
    padding-bottom: 16px;

    ${(props: any) =>
    props.width &&
    css`
      width: 100%;
    `}
  }

  ${(props: any) =>
    props.width &&
    css`
      width: calc(100% / 2 - 7.5px);
    `}
`;