import { css } from "@emotion/react";
import { palette } from "/libs/color";

export const headerContainer = css`
  width: 100%;
  height: 50px;
  background-color: ${palette.secondary.main};
`;

export const headerWrapper = css`
  color: ${palette.text.dark.default};
  display: flex;
  justify-content: space-around;
`;