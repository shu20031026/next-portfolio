import React, { FC } from "react";
import { drawerButton, drawerSpan1, drawerSpan2 } from "./style";

type LinkItem = {
  title: string;
  link: string;
};

type Props = {
  linkItems: LinkItem[];
};

export const Drawer: FC<Props> = ({ linkItems }) => {
  console.log(linkItems[0].link);
  return (
    <div css={drawerButton}>
      <span css={drawerSpan1}/>
      <span css={drawerSpan2}/>
    </div>
  );
};
