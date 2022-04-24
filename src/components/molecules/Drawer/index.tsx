import React, { FC } from "react";
import { closeDrawerContainer, drawerContainer } from "./style";
import { useRecoilValue } from "recoil";
import { drawerState } from "~/globalStates/atoms";
import { PageType } from "/types/page";
import Link from "next/link";

type Props = {
  pageList:PageType[]
};

export const DrawerMenu:FC<Props> = ({pageList}) => {
  const drawerIsOpen = useRecoilValue(drawerState);  

  return(
    <div css={drawerIsOpen ? drawerContainer : closeDrawerContainer}>
      {pageList.map((item) => {
        return (
          <div key={item.link}>
            <Link href={item.link}>{item.title}</Link>
          </div>
        );
      })}
    </div>
  );
};