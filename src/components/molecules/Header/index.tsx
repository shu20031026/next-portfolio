import Link from "next/link";
import React from "react";
import { Drawer } from "../Drawer";
import { drawerWrapper, headerContainer, headerContents, headerWrapper, nameContents } from "./style";

const pageList = [
  {
    title: "works",
    link: "/works",
  },
  {
    title: "huga",
    link: "/",
  },
  {
    title: "piyo",
    link: "/",
  },
  {
    title: "aiueo",
    link: "/",
  },
  {
    title: "aaaaaa",
    link: "/",
  }
];

const Header = () => {
  return (
    <>
      <div css={headerContainer}>
        <div css={drawerWrapper}>
          <Drawer linkItems={pageList}/>
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
