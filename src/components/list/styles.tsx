import styled from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import { Link } from "react-router-dom";

export const Title = styled.h2`
  color: ${colors.black};
  font-size: 18px;
  font-weight: 600;
  line-height: 2.2;

  @media ${device.mobileL} {
  }
`;

export const Subtitle = styled.p`
  color: ${colors.grey1};
  font-size: 16px;
  font-weight: 500;

  @media ${device.mobileL} {
  }
`;

export const Ul = styled.ul`
  list-style: none;
  width: 100%;
  padding-top: 28px;

  @media ${device.mobileL} {
  }
`;

export const Li = styled.li`
    margin-bottom: 28px;
    position: relative;

  @media ${device.mobileL} {
  }
`;

export const A = styled(Link)`
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 108px;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(50, 50, 50, 0.1);
  padding: 0 28px;
  text-decoration: none;
  border: 1px solid transparent;
  transition: All 0.15s linear;
  position: relative;
  z-index: 10;

  &:hover {
    background: ${colors.grey5};
    border: 1px solid rgba(136, 149, 162, 0.2);

    & .user {
      &:before {
        background: ${colors.grey5};
      }
    }
  }

  @media ${device.mobileL} {
    padding: 0 15px;
    height: 75px;
    padding: 0 18px;
  }
`;

export const Flex = styled.div`
  display: flex;
  padding-right: 20px;
`;

export const ID = styled.div`
  position: relative;
`;

export const Wrap = styled.div`
  padding-left: 20px;
`;

export const Arrow = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
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
