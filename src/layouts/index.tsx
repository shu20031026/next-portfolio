import React from "react";
import { DrawerMenu } from "~/components/molecules/Drawer";
import Header from "~/components/molecules/Header";
import { bodyContainer, mainContent } from "./style";
import PageList from "~/data/pageList.json";

export const Layout: React.FC = ({children}) => {
  return(
    <div css={bodyContainer}>
      <Header pageList={PageList}></Header>
      <DrawerMenu pageList={PageList}/>
      <div css={mainContent}>
        {children}
      </div>
    </div>
  );
};