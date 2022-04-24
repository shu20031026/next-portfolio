import { css } from "@emotion/react";
import { rootZIndex } from "/libs/zIndex";

export const mainContent = css`
  position: relative;
  z-index: ${rootZIndex.zIndexMain};
`;