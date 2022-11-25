import styled from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import img from "img";

export const Main = styled.main`
  margin-top: 60px;
  padding-top: 32px;
  padding-bottom: 60px;

  @media ${device.mobileL} {
  }
`;

export const Wrapper = styled.div`
  width: 1140px;
  max-width: 90%;
  margin: 0 auto;

  @media ${device.mobileL} {
  }
`;

export const Section = styled.section`
  margin-top: 30px;

  @media ${device.mobileL} {
  }
`;