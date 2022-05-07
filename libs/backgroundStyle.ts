import { css } from "@emotion/react";

export const backgroundWhite = css`
  width: 100%;
  height: 100%;
  background-color: #E1E6EC;
  background-image: -webkit-linear-gradient(top, #E1E6EC 2%, #F0F4F7 96%), -webkit-radial-gradient(at 50% 100%, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.5) 200%);
  background-image: linear-gradient(-180deg, #E1E6EC 2%, #F0F4F7 96%), radial-gradient(at 50% 100%, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.5) 200%);
  background-blend-mode: normal, color-burn;
`;

export const backgroundGray = css`
  width: 100%;
  height: 100%;
  background-image: -webkit-linear-gradient(right, #596164 1%, #868F96 99%);
  background-image: linear-gradient(-90deg, #596164 1%, #868F96 99%);
`;

export const backgroundGreen = css`
  width: 100%;
  height: 100%;
  background: -webkit-linear-gradient(top right, #E2E8E6 0%, #CDD3CD 100%), -webkit-linear-gradient(right, rgba(255, 255, 255, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%);
  background: linear-gradient(to bottom left, #E2E8E6 0%, #CDD3CD 100%), linear-gradient(to left, rgba(255, 255, 255, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%);
  background-blend-mode: screen;
`;