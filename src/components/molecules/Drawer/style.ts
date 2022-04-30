import { css } from "@emotion/react";
import { palette } from "/libs/color";
import { breakpoints } from "/libs/screenSize";
import { rootZIndex } from "/libs/zIndex";

export const drawerContainer = css`
  background-color: ${palette.secondary.main};
  border-top: 0.5px solid ${palette.secondary.light};
  width: 100%;
  height: 94.5vh;
  position: absolute;
  z-index: ${rootZIndex.zIndexModal};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  @media (min-width: ${breakpoints.pc}px){
    display: none;
    width: 10%;
  }
`;

export const closeDrawerContainer = css`
  display: none;
`;

export const drawerContent = css`
  color: ${palette.text.dark.default};
  width: 100%;
  display: flex;
  padding: 10px 0;
  align-items: center;
  flex-direction: column;
  border-bottom: 0.5px solid ${palette.secondary.light};
  &:hover{
    color: ${palette.text.dark.hover};
  };
`;