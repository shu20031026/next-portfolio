import React, { FC, useState } from "react";
import { useRecoilState } from "recoil";
import { drawerState } from "~/globalStates/atoms";
import { drawerButtonContainer, drawerSpan1, drawerSpan2, isOpenDrawerSpan1, isOpenDrawerSpan2 } from "./style";

type LinkItem = {
  title: string;
  link: string;
};

type Props = {
  linkItems: LinkItem[];
};

export const HamburgerButton: FC<Props> = ({ linkItems }) => {
  const [drawerButtonOpen,setDrawerButtonOpen] = useState(false);
  const [drawerIsOpen,setDrawerIsOpen] = useRecoilState(drawerState);

  console.log(linkItems[0].link);
  console.log(drawerButtonOpen);

  const drawerOpen = () => {
    setDrawerButtonOpen(!drawerButtonOpen);
    setDrawerIsOpen(!drawerIsOpen);
  };
  
  return (
    <div css={drawerButtonContainer} onClick={() => {
      drawerOpen();
    }}>
      <span css={drawerButtonOpen ? isOpenDrawerSpan1 : drawerSpan1}/>
      <span css={drawerButtonOpen ? isOpenDrawerSpan2 : drawerSpan2}/>
    </div>
  );
};
