import { keyframes } from "styled-components";

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

export const init = keyframes`
  from {
    width: 98%;
  }
  to {
    width: 100%;
  }
`;