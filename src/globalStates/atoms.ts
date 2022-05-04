import { atom } from "recoil";

export const drawerState = atom<boolean>({
  key: "drawer",
  default: false,
});
