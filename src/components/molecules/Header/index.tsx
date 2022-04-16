import Link from "next/link";
import React from "react";
import { headerContainer, headerWrapper } from "./style";

const pageList = [
  {
    title: "hoge",
    link: "/"
  },
  {
    title: "huga",
    link: "/"
  },
  {
    title: "piyo",
    link: "/"
  },
  {
    title: "aiueo",
    link: "/"
  }
];

const Header = () => {
  return (
    <>
      <div css={headerContainer}>
        <div css={headerWrapper}>
          {
            pageList.map((item) => {
              return(
                <div key={item.link}>
                  <Link href={item.link}>{item.title}</Link>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
};

export default Header;