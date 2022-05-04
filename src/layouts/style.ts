import { css } from "@emotion/react";
import { rootZIndex } from "/libs/zIndex";

export const mainContent = css`
  position: relative;
  z-index: ${rootZIndex.zIndexMain};
  flex: 1;
`;

export const bodyContainer = css`
  display: flex;
  flex-flow: column;
  min-height: 94.5vh;
`;
