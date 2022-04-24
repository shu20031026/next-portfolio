import React from "react";
import { closeDrawerContainer, drawerContainer } from "./style";
import { useRecoilValue } from "recoil";
import { drawerState } from "~/globalStates/atoms";

export const DrawerMenu= () => {
  const drawerIsOpen = useRecoilValue(drawerState);  

  return(
    <div css={drawerIsOpen ? drawerContainer : closeDrawerContainer}></div>
  );
};