import React, { FC, useState } from "react";
import { drawerButton, drawerSpan1, drawerSpan2, isOpenDrawerSpan1, isOpenDrawerSpan2 } from "./style";

type LinkItem = {
  title: string;
  link: string;
};

type Props = {
  linkItems: LinkItem[];
};

export const Drawer: FC<Props> = ({ linkItems }) => {
  const [drawerIsOpen,setDrawerIsOpen] = useState(false);
  console.log(linkItems[0].link);
  console.log(drawerIsOpen);
  return (
    <div css={drawerButton} onClick={() => {
      setDrawerIsOpen(!drawerIsOpen);
      // console.log(drawerIsOpen);
    }}>
      <span css={drawerIsOpen ? isOpenDrawerSpan1 : drawerSpan1}/>
      <span css={drawerIsOpen ? isOpenDrawerSpan2 : drawerSpan2}/>
    </div>
  );
};
