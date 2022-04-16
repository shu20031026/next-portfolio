import { css } from "@emotion/react";
import { palette } from "/libs/color";

export const drawerButton = css`
  position: relative;
  width: 40px;
  height: 40px;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

// export const drawerSpan1 = css`
//   position: absolute;
//   background-color: ${palette.text.dark.default};
//   width: 50%;
//   height: 1px;
//   margin-bottom: 10px;
// `;

// export const drawerSpan2 = css`
//   position: absolute;
//   background-color: ${palette.text.dark.default};
//   width: 50%;
//   height: 1px;
//   margin-top: 5px;
// `;

export const drawerSpan1 = css`
  position: absolute;
  background-color: ${palette.text.dark.default};
  width: 50%;
  height: 1px;
  margin-bottom: 10px;
`;

export const drawerSpan2 = css`
  position: absolute;
  background-color: ${palette.text.dark.default};
  width: 50%;
  height: 1px;
  margin-top: 5px;
`;