import styled, { css } from "styled-components";
import Select from "react-select";
import colors from "theme/colors";
import device from "theme/device";

export const Selector = styled(Select)`
  background: ${colors.white};
  width: 100%;
  border-radius: 4px;
  outline: none;
  font-size: 14px;

  ${(props: any) =>
    props.width &&
    css`
      width: ${props.width};
    `}
`;

const border = (state: any) => {
  if (state.selectProps.validation && !state.menuIsOpen) {
    return `1px solid ${colors.red}`;
  }
  if (state.selectProps.validation && state.menuIsOpen) {
    return `1px solid ${colors.black}`;
  }
  if (!state.selectProps.validation && !state.menuIsOpen) {
    return `1px solid ${colors.grey3}`;
  }
  if (!state.selectProps.validation && state.menuIsOpen) {
    return `1px solid ${colors.black}`;
  }
}

const outline = (state: any) => {
  if (state.selectProps.validation && !state.menuIsOpen) {
    return `1px solid ${colors.red}`;
  }
  if (state.selectProps.validation && state.menuIsOpen) {
    return `1px solid ${colors.black}`;
  }
  if (!state.selectProps.validation && !state.menuIsOpen) {
    return `1px solid transparent`;
  }
  if (!state.selectProps.validation && state.menuIsOpen) {
    return `1px solid ${colors.black}`;
  }
}

const background = (state: any) => {
  if (state.selectProps.validation && !state.menuIsOpen) {
    return colors.red3;
  }
  if (state.selectProps.validation && state.menuIsOpen) {
    return colors.white;
  }
  if (!state.selectProps.validation && !state.menuIsOpen) {
    return colors.white;
  }
  if (!state.selectProps.validation && state.menuIsOpen) {
    return colors.white;
  }
}

const arrow = (state: any) => {
  if (state.selectProps.validation && !state.menuIsOpen) {
    return colors.red;
  }
  if (state.selectProps.validation && state.menuIsOpen) {
    return colors.black;
  }
  if (!state.selectProps.validation && !state.menuIsOpen) {
    return colors.grey3;
  }
  if (!state.selectProps.validation && state.menuIsOpen) {
    return colors.black;
  }
}

export const customStyles = {
  indicatorSeparator: () => ({ display: "none" }),
  control: (base: any, state: any) => ({
    ...base,
    background: background(state),
    paddingRight: "30px",
    boxShadow: state.selectProps.validation ? "0 2px 10px 0 rgba(255, 0, 101, 0.15)" : "none",
    border: border(state),
    outline: outline(state),

    "&:hover": {
      border: border(state),
      outline: outline(state),
    },

    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "14px",
      right: "14px",
      width: "2px",
      height: "7px",
      borderRadius: "1px",
      background: arrow(state),
      transform: state.menuIsOpen ? "rotate(-45deg)" : "rotate(-135deg)",
      transition: "All .3s",
    },

    "&:after": {
      right: "18px",
      transform: state.menuIsOpen ? "rotate(45deg)" : "rotate(135deg)",
    },
  }),

  option: (styles: any) => ({
    ...styles,
    backgroundColor: colors.white,
    color: colors.black,
    "&:hover": {
      backgroundColor: colors.grey5,
    },
  }),
};
