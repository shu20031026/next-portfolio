import { css } from "@emotion/react";
import { palette } from "/libs/color";
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
`;
export const closeDrawerContainer = css`
  display: none;
`;