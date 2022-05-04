import React from "react";
import { closeDrawerContainer, drawerContainer, drawerContent } from "./style";
import { useRecoilState } from "recoil";
import { drawerState } from "~/globalStates/atoms";
import { PageType } from "/types/page";
import Link from "next/link";

type Props = {
  pageList: PageType[];
};

export const DrawerMenu: React.VFC<Props> = ({ pageList }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useRecoilState(drawerState);

  const handleCloseMenu = () => {
    setDrawerIsOpen(false);
  };

  return (
    <div css={drawerIsOpen ? drawerContainer : closeDrawerContainer}>
      {pageList.map((item) => {
        return (
          <div key={item.link} css={drawerContent}>
            <div onClick={() => handleCloseMenu()}>
              <Link href={item.link}>{item.title}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
