import { css, keyframes } from "@emotion/react";
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


export const drawerOpenMove1 = keyframes`
  100%{
    transform: rotate(45deg);
  }
`;

export const drawerOpenMove2 = keyframes`
  100% {
    transform: rotate(-45deg);
  }
`;

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
export const isOpenDrawerSpan1 = css`
  position: absolute;
  background-color: ${palette.text.dark.default};
  animation: ${drawerOpenMove1} 0.2s linear forwards;
  width: 50%;
  height: 1px;
`;

export const isOpenDrawerSpan2 = css`
  position: absolute;
  background-color: ${palette.text.dark.default};
  animation: ${drawerOpenMove2} 0.2s linear forwards;
  width: 50%;
  height: 1px;
`;