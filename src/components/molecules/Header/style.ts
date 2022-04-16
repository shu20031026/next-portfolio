import { css } from "@emotion/react";
import { palette } from "/libs/color";
import { breakpoints } from "/libs/screenSize";

export const headerContainer = css`
  width: 100%;
  height: 44px;
  background-color: ${palette.secondary.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const headerWrapper = css`
  width: 1000px;
  color: ${palette.text.dark.default};
  display: flex;
  justify-content: space-around;
`;

export const nameContents = css`
  font-size: 1.5rem;
`;

export const headerContents = css`
  @media (max-width: ${breakpoints.pc}px){
    display: none;
  }
  font-size: 1.0rem;
  padding-top: 6px; 
  &:hover{
    color: ${palette.text.dark.hover};
  };
`;