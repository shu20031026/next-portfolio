import React, { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { drawerState } from "~/globalStates/atoms";
import {
  drawerButtonContainer,
  drawerSpan1,
  drawerSpan2,
  isOpenDrawerSpan1,
  isOpenDrawerSpan2,
} from "./style";

export const HamburgerButton: React.VFC = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useRecoilState(drawerState);

  return (
    <div
      css={drawerButtonContainer}
      onClick={() => {
        setDrawerIsOpen(!drawerIsOpen);
      }}
    >
      <span css={drawerIsOpen ? isOpenDrawerSpan1 : drawerSpan1} />
      <span css={drawerIsOpen ? isOpenDrawerSpan2 : drawerSpan2} />
    </div>
  );
};
