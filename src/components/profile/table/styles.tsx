import styled, { css } from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import { Link } from "react-router-dom";

export const Section = styled.div`
  margin-top: 28px;
  box-shadow: rgb(50 50 50 / 10%) 0px 1px 4px 0px;
  border-radius: 4px;

  & .rdt_Pagination {
    border-radius: 0 0 4px 4px;
    justify-content: flex-start;
    position: relative;
    padding: 0 16px;

    & div {
      &:last-child {
        position: absolute;
        right: 16px;
      }
    }
  }

  & .rdt_TableHeadRow {
    background: ${colors.grey5};
    border-top: 1px solid ${colors.grey4};
    border-bottom: 1px solid ${colors.grey4};
    min-height: 32px;
    font-weight: bold;
    color: ${colors.black};
  }

  & .rdt_TableRow {
    min-height: 40px;
    border: none;

    &:hover {
      background: ${colors.blue4};
    }
  }

  @media ${device.mobileL} {
  }
`;

export const Thead = styled.header`
  background: ${colors.white};
  border-radius: 4px 4px 0 0;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  @media ${device.mobileL} {
  }
`;

export const Name = styled.h4`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  padding-right: 8px;
  color: ${colors.black};

  @media ${device.mobileL} {
  }
`;

export const Arrow = styled.img`
  position: relative;
  top: 2px;
  left: 4px;

  @media ${device.mobileL} {
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  @media ${device.mobileL} {
  }
`;

export const UserName = styled.p`
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.black};

  @media ${device.mobileL} {
  }
`;

export const Href = styled(Link)`
  display: flex;
  text-decoration: none;

  @media ${device.mobileL} {
  }
`;

export const ActionWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ${device.mobileL} {
  }
`;

export const ActionMore = styled.img`
  cursor: pointer;

  @media ${device.mobileL} {
  }
`;

export const NoData = styled.img`
  width: 250px;

  @media ${device.mobileL} {
  }
`;