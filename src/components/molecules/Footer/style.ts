import { css } from "@emotion/react";
import { palette } from "/libs/color";
import { rootZIndex } from "/libs/zIndex";

export const footerContainer = css`
  background-color: ${palette.secondary.main};
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${rootZIndex.zIndexFooter};
  color: ${palette.text.dark.default};
`;
