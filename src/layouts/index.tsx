import React, { ReactElement } from "react";
import { DrawerMenu } from "~/components/molecules/Drawer";
import Header from "~/components/molecules/Header";
import { bodyContainer, mainContent } from "./style";
import PageList from "~/data/pageList.json";
import Footer from "~/components/molecules/Footer";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export const Layout: React.VFC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header pageList={PageList}></Header>
      <div css={bodyContainer}>
        <DrawerMenu pageList={PageList} />
        <div css={mainContent}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};
