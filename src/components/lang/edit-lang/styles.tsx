import styled, { css } from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import { Field } from "formik";
import Select from "react-select";

export const Main = styled.main`
  margin-top: 60px;
  padding-top: 32px;
  padding-bottom: 60px;

  @media ${device.mobileL} {
  }
`;

export const Wrapper = styled.div`
  width: 825px;
  max-width: 90%;
  min-height: calc(100vh - 120px);
  margin: 0 auto;

  @media ${device.mobileL} {
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.mobileL} {
  }
`;

export const Body = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Icon = styled.img`
  width: 40px;
`;

export const EmptyTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  padding: 12px 0;
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

export const BtnWrap = styled.div`
  padding-top: 28px;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  line-height: 1.29;
  color: ${colors.black};

  @media ${device.mobileL} {
    font-size: 24px;
    line-height: 1;
  }
`;

export const Section = styled.section`
  background: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(50, 50, 50, 0.1);
  margin-top: 30px;

  @media ${device.mobileL} {
  }
`;

export const Inner = styled.div`
  padding: 24px 28px 36px;

  @media ${device.mobileL} {
    padding: 18px;
  }
`;

export const Name = styled.h3`
  color: ${colors.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
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

export const Input = styled(Field)`
  background: ${colors.white};
  border: 1px solid ${colors.grey3};
  outline: 1px solid transparent;
  width: 100%;
  height: 36px;
  border-radius: 4px;
  padding: 0 12px;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button,
  &[type=number] {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    box-shadow: 0 2px 10px 0 rgba(26, 26, 26, 0.15);
    border: 1px solid ${colors.black};
    outline: 1px solid ${colors.black};
  }

${(props: any) =>
        props.validation &&
        css`
    background: ${colors.red3};
    box-shadow: 0 2px 10px 0 rgba(255, 0, 101, 0.15);
    border: 1px solid ${colors.red};
    outline: 1px solid ${colors.red};

    &:focus {
      border: 1px solid ${colors.red};
      outline: 1px solid ${colors.red};
      background: ${colors.red3};
    }
  `}

${(props: any) =>
        props.component === "textarea" &&
        css`
    width: 100%;
    border-radius: 4px;
    padding: 12px;
    outline: none;
    height: 72px;
    resize: none;
    font-family: "Inter";
  `}
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Block = styled.div`
  padding-top: 28px;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

export const Col4 = styled.div`
  flex: 0 0 32%;

  @media ${device.mobileL} {
  }
`;

export const Col6 = styled.div`
  flex: 0 0 50%;

  @media ${device.mobileL} {
    ${(props: any) =>
        props.$left &&
        css`
      padding-right: 0;
    `}

  ${(props: any) =>
        props.$right &&
        css`
      padding-left: 0;
    `}
  }

  ${(props: any) =>
        props.$left &&
        css`
      padding-right: 15px;
    `}

  ${(props: any) =>
        props.$right &&
        css`
      padding-left: 15px;
    `}
`;

export const Col12 = styled.div`
  flex: 0 0 100%;

  @media ${device.mobileL} {
  }
`;

export const CheckboxInput = styled(Field)`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  opacity: 0;
  cursor: pointer;

  &:hover ~ .checkmark {
    box-shadow: 0 0 0 4px rgb(63 118 240 / 10%);
    transition: box-shadow 200ms ease;
  }

  &:checked ~ .checkmark {
    background-color: ${colors.blue};
    border: 1px solid transparent;

    &:after {
      display: block;
    }
  }

  ${(props: any) =>
        props.value &&
        css`
      & ~ .checkmark {
        background-color: ${colors.blue};
        border: 1px solid transparent;

        &:after {
          display: block;
        }
      }
    `}
`;

export const CheckboxLabel = styled.label`
  color: ${colors.black};
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 12px;
  position: relative;
  cursor: pointer;
  user-select: none;
  width: fit-content;
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid ${colors.grey3};
  border-radius: 2px;

  &:after {
    content: "";
    position: absolute;
    left: 6px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid ${colors.white};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    display: none;
  }
`;

export const CheckLabel = styled.span`
  padding-left: 32px;
`;

export const EditLang = styled.section`
  background: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(50, 50, 50, 0.1);
  margin-top: 28px;

  @media ${device.mobileL} {
    margin-top: 15px;
  }
`;

export const LangWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Flag = styled.span`
  display: flex;
  width: max-content;
  height: 26px;
`;

export const Lang = styled.span`
  position: relative;
  top: -2px;
  padding-left: 10px;
`;

export const Label = styled.label`
  padding-top: 24px;
  margin-bottom: 4px;
  display: inline-flex;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  white-space: nowrap;

  @media ${device.mobileL} {
    padding-top: 20px;
  }
`;

export const Upload = styled.span`
  display: inline-flex;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: ${colors.blue};
  cursor: pointer;
`;

export const SelectStatus = styled(Select)`
  background: ${colors.white};
  color: ${colors.black};
  font-size: 14px;
  border-radius: 4px;
  position: relative;
`;

export const customStyles = {
    indicatorSeparator: () => ({ display: "none" }),
    control: (base: any, state: any) => ({
        ...base,
        background: colors.white,
        paddingRight: "30px",
        boxShadow: "none",
        border: state.menuIsOpen
            ? `1px solid ${colors.black}`
            : `1px solid ${colors.grey3}`,
        outline: state.menuIsOpen
            ? `1px solid ${colors.black}`
            : `1px solid transparent`,

        "&:hover": {
            border: state.menuIsOpen
                ? `1px solid ${colors.black}`
                : `1px solid ${colors.grey3}`,
            outline: state.menuIsOpen
                ? `1px solid ${colors.black}`
                : `1px solid transparent`,
        },

        "&:before, &:after": {
            content: '""',
            position: "absolute",
            top: "14px",
            right: "14px",
            width: "2px",
            height: "7px",
            borderRadius: "1px",
            background: state.menuIsOpen ? colors.black : colors.grey1,
            transform: state.menuIsOpen ? "rotate(-45deg)" : "rotate(-135deg)",
            transition: "All .3s",
            zIndex: "1",
        },
        "&:after": {
            right: "18px",
            transform: state.menuIsOpen ? "rotate(45deg)" : "rotate(135deg)",
        },
    }),
    option: (styles: any) => ({
        ...styles,
        backgroundColor: colors.white,
        color: colors.blue2,
        "&:hover": {
            backgroundColor: colors.grey5,
        },
    }),
};
