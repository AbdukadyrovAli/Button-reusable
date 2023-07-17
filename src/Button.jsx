import React from "react";
import { css, styled } from "styled-components";

const Button = ({ color, children, border, bgColor, size }) => {
  return (
    <ButtonStyle color={color} border={border}
    bgColor={bgColor}
    size={size}>
      {children}
    </ButtonStyle>
  );
};

const COLORS_VARIANT = {
  primary: "##4582d2",
  light: "#FFFFFF",
  dark: "#C9C9C9",
};
const getColor = (props) => {
  return COLORS_VARIANT[props.color];
};

const BORDER_VARIANTS = {
  primary: "#4C94F0",
  light: "#1F6ED4 ",
  dark: "#C9C9C9 ",
};

const getBorder = (props) => {
  return BORDER_VARIANTS[props.border || "dark"];
};

const BACKGROUND_VARIANT = {
  primary: {
    default: "#1F6ED4",
    hover: "#4C94F0",
    active: "#0052BC",
    disabled: "#C9C9C9",
  },
  light: {
    default: "#F37705",
    hover: "#FF912B",
    active: "#CF6300",
    disabled: "#C9C9C9",
  },
  dark: {
    default: "#DF2D2D",
    hover: "#E54343",
    active: "#C20B0B",
    disabled: "#C9C9C9",
  },
  ufc: {
    default: "#fff",
    hover: "#fff",
    active: "#0052BC",
    disabled: "#fff",
  },
};

const getBgColor = (props) => {
  const currentVariant = BACKGROUND_VARIANT[props.bgColor || "ufc"];
  return css`
    background-color: ${currentVariant.default};
    &:hover {
      background-color: ${currentVariant.hover};
    }
    &:active {
      background-color: ${currentVariant.active};
    }
  `;
};

const BUTTON_SIZE={
    small:'12px',
    medium:'14px',
    default:'16px',
    large:'18px'
}


const ButtonStyle = styled("button")`
  height: 51px;
  width: 150px;
  padding: 16px 18px 16px 18px;
  border-radius: 10px;
  color: ${getColor};
  border: ${getBorder };
  cursor: pointer;
  font-size: ${({size})=>BUTTON_SIZE[size || "medium"]};
  ${getBgColor}
`;

export default Button;
