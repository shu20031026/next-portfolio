import Link from "next/link";
import React, { FC } from "react";
import { HamburgerButton } from "../Hamburger";
import { drawerWrapper, headerContainer, headerContents, headerWrapper, nameContents } from "./style";
import { PageType } from "/types/page";

type Props = {
  pageList:PageType[]
};

const Header:FC<Props> = ({pageList}) => {
  return (
    <>
      <div css={headerContainer}>
        <div css={drawerWrapper}>
          <HamburgerButton/>
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
