import Link from "next/link";
import React from "react";
import { DrawerButton } from "../DrawerButton";
import { drawerWrapper, headerContainer, headerContents, headerWrapper, nameContents } from "./style";

const pageList = [
  {
    title: "works",
    link: "/works",
  },
  {
    title: "huga",
    link: "/a",
  },
  {
    title: "piyo",
    link: "/b",
  },
  {
    title: "aiueo",
    link: "/c",
  },
  {
    title: "aaaaaa",
    link: "/d",
  }
];

const Header = () => {
  return (
    <>
      <div css={headerContainer}>
        <div css={drawerWrapper}>
          <DrawerButton linkItems={pageList}/>
        </div>
        <div css={headerWrapper}>
          <div css={nameContents}>Shu Nakashima</div>
          {pageList.map((item) => {
            return (
              <div key={item.link} css={headerContents}>
                <Link href={item.link}>{item.title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
