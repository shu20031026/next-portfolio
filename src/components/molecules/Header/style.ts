import { css } from "@emotion/react";
import { palette } from "/libs/color";

export const headerContainer = css`
  width: 100%;
  height: 40px;
  background-color: ${palette.secondary.main};
  display: flex;
  align-items: center;
`;

export const headerWrapper = css`
  width:100%;
  color: ${palette.text.dark.default};
  display: flex;
  justify-content: space-around;
`;

export const nameContents = css`
  font-size: 1.5rem;
`;

export const headerContents = css`
  font-size: 1.4rem;
  &:hover{
    color: ${palette.text.dark.hover};
  };
`;