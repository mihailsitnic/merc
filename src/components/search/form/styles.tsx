import styled, { css } from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import { Form, Field } from "formik";

export const Forma = styled(Form)`
  border-radius: 4px;
  margin-top: 28px;
  box-shadow: 0 1px 3px 0 rgba(50, 50, 50, 0.1);
  background: ${colors.white};

  @media ${device.mobileL} {
  }
`;

export const Section = styled.section`
   padding: 24px 28px 36px;

  @media ${device.mobileL} {
    padding: 18px;
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

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.mobileL} {
  }
`;

export const Title = styled.h3`
  font-size: 28px;
  font-weight: bold;
  line-height: 1.29;
  color: ${colors.black};

  @media ${device.mobileL} {
  }
`;

export const Name = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  padding-bottom: 4px;
  color: ${colors.black};

  @media ${device.mobileL} {
  }
`;

export const Inner = styled.div`
  padding-top: 24px;

  &:first-child {
    padding-top: 0;
  }

  @media ${device.mobileL} {
    padding-top: 16px;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  height: 36px;
  padding: 8px 12px 8px 12px;
  border-radius: 4px;
  border: 1px solid ${colors.grey3};
  outline: 1px solid transparent;
  background: ${colors.white};
  font-size: 14px;
  color: ${colors.black};
  outline: none;

  &:focus {
    box-shadow: 0 2px 10px 0 rgba(26, 26, 26, 0.15);
    border: 1px solid ${colors.black};
    outline: 1px solid ${colors.black};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media ${device.mobileL} {
  }

  ${(props: any) =>
    props.validation &&
    css`
      background: ${colors.red3};
      box-shadow: 0 2px 10px 0 rgba(255, 0, 101, 0.15) !important;
      border: 1px solid ${colors.red};
      outline: 1px solid ${colors.red};

      &:focus {
        border: 1px solid ${colors.red};
        outline: 1px solid ${colors.red};
        background: ${colors.red3};
      }
    `}
`;

export const Tabs = styled.div`
  background: ${colors.white};
  display: flex;
  padding: 8px 0;
  margin-top: 30px;
  margin-bottom: 28px;
  height: 60px;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(50, 50, 50, 0.1);

  @media ${device.mobileL} {
    height: 50px;
    margin-top: 15px;
  }
`;

export const Col6 = styled.label`
  flex: 0 0 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  ${(props: any) =>
    props.$right &&
    css`
      border-left: 1px solid #ebedf0;
    `}
`;

export const TabTitle = styled.h4`
  color: ${colors.grey1};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  @media ${device.mobileL} {
    font-size: 12px;
  }
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

export const TabInput = styled(Field)`
  display: none;

  &:hover ~ .checkmark {
    box-shadow: 0 0 0 4px rgb(63 118 240 / 10%);
    transition: box-shadow 200ms ease;
  }

  &:checked ~ .checkmark {
    color: ${colors.black};

    &:after {
      content: "";
      width: 126px;
      height: 2px;
      background-color: ${colors.red};
      display: block;
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media ${device.mobileL} {
  }
`;

export const Ul = styled.ul`
  list-style: none;
`;

export const Li = styled.li`
  padding-bottom: 10px;

  &:last-child {
    padding-bottom: 0;
  }
`;

export const ListUl = styled.ul`
  padding-left: 20px;
`;

export const ListLi = styled.li`
  padding-bottom: 10px;
  color: ${colors.grey1};
  text-transform: capitalize;

  &:last-child {
    padding-bottom: 0;
  }
`;

export const Note = styled.span`
  color: ${colors.grey1};
  padding-left: 8px;
  font-weight: normal;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.grey1};
`;

export const Wrap = styled.div`
  position: relative;
  width: 100%;
`;

export const Location = styled.div``;

export const WrapLocation = styled.div`
  position: relative;
  width: calc(100% - 52px);
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 11px;
`;

export const NewFieldWrap = styled.label`
  display: flex;
`;

export const NewField = styled(Field)`
  padding: 8px 12px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid ${colors.grey3};
  outline: 1px solid transparent;
  background: ${colors.white};
  width: calc(100% - 52px);
  outline: none;

  &:focus {
    box-shadow: 0 2px 10px 0 rgba(26, 26, 26, 0.15);
    border: 1px solid ${colors.black};
    outline: 1px solid ${colors.black};
  }
`;

export const PopWrap = styled.div`
  position: relative;

  &:hover {
    & .popout {
      visibility: visible;
    }
  }
`;

export const AddBtn = styled.button`
  background: ${colors.red3};
  color: ${colors.red};
  width: 36px;
  height: 36px;
  font-weight: 100;
  border-radius: 4px;
  font-size: 25px;
  margin-left: 16px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: All 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Popout = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-42%);
  bottom: calc(100% + 8px);
  visibility: hidden;
  font-size: 12px;
  width: max-content;
  border-radius: 4px;
  box-shadow: 0 3px 8px 1px rgba(50, 50, 50, 0.15);
  background: ${colors.black};
  color: ${colors.white};
  padding: 4px 8px;
  z-index: 999;
`;

export const RemoveBtn = styled.button`
  background: ${colors.grey4};
  color: ${colors.grey1};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  font-weight: 100;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: All 0.2s;
  margin-left: 16px;

  &:hover {
    opacity: 0.8;
  }
`;

export const LocationUl = styled.ul`
  list-style: none;
  background: ${colors.white};
  position: absolute;
  margin-top: 45px;
  width: calc(100% - 106px);
  padding: 8px 0px;
  z-index: 20;

  ${(props: any) =>
    props.$state &&
    css`
      box-shadow: rgb(0 0 0 / 25%) 0px 25px 30px -12px;
      border-radius: 3px;
    `}

  ${(props: any) =>
    !props.$state &&
    css`
      display: none;
    `}

  @media ${device.mobileL} {
  }
`;

export const LocationLi = styled.li`
  position: relative;
  padding: 8px 12px 8px 36px;

  &:hover {
    background: ${colors.grey5};
    cursor: pointer;
  }
  @media ${device.mobileL} {
  }
`;

export const Delete = styled.img`
  @media ${device.mobileL} {
  }
`;

export const Body = styled.div`
  width: calc(100% - 285px);
  padding-left: 32px;

  @media ${device.mobileL} {
    width: 100%;
    padding-left: 0;
  }
`;

export const Sidebar = styled.aside`
  background: ${colors.white};
  width: 285px;
  min-height: 80vh;
  z-index: 2;
  border-radius: 4px;
  box-shadow: rgb(50 50 50 / 10%) 0px 1px 3px 0px;
  padding-bottom: 10px;
  display: block;

  @media ${device.mobileL} {
    display: none;
  }
`;

export const Footer = styled.footer`
  height: 84px;
  padding: 0 28px;
  border-top: 1px solid ${colors.grey4};
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media ${device.mobileL} {
    height: 65px;
    padding: 0 18px;
  }
`;