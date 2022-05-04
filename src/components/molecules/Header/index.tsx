import Link from "next/link";
import React from "react";
import { HamburgerButton } from "../Hamburger";
import { drawerWrapper, headerContainer, headerContents, headerWrapper, nameContents } from "./style";
import { PageType } from "/types/page";

type Props = {
  pageList:PageType[]
};

const Header:React.VFC<Props> = ({pageList}) => {
  return (
    <>
      <div css={headerContainer}>
        <div css={drawerWrapper}>
          <HamburgerButton/>
        </div>
        <div css={headerWrapper}>
          <Link href="/">
          <div css={nameContents}>Shu Nakashima</div>
          </Link>
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
