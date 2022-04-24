import React from "react";
import { DrawerMenu } from "~/components/molecules/Drawer";
import Header from "~/components/molecules/Header";
import { mainContent } from "./style";

export const Layout: React.FC = ({children}) => {
  return(
    <>
      <Header />
      <DrawerMenu />
      <div css={mainContent}>
        {children}
      </div>
    </>
  );
};