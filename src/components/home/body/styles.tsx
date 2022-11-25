import styled, { css } from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import { Link } from "react-router-dom";

export const Main = styled.main`
  width: 100%;
  margin-top: 60px;

  @media ${device.mobileL} {
  }
`;

export const Wrapper = styled.div`
  width: 760px;
  max-width: 90%;
  margin: 0 auto;

  @media ${device.mobileL} {
  }
`;

export const Inner = styled.div`
  display: flex;

  @media ${device.mobileL} {
  }
`;

export const Section = styled.section`
  width: 760px;
  height: 280px;
  border-radius: 4px;
  box-shadow: rgb(50 50 50 / 10%) 0px 1px 3px 0px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${colors.white};
`;

export const Icon = styled.img`
  width: 60px;
`;

export const EmptyTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  padding-top: 30px;
  padding-bottom: 10px;
  color: ${colors.black};

  @media ${device.mobileL} {
  }
`;

export const EmptySubtitle = styled.p`
  font-size: 14px;
  line-height: 1.43;
  max-width: 441px;
  margin: 0 auto;
  color: ${colors.black};

  @media ${device.mobileL} {
  }
`;
