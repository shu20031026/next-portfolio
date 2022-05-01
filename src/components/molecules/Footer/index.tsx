import React, { FC } from "react";
import { footerContainer } from "./style";

const Footer:FC = () => {
  return(
    <div css={footerContainer}>
      <div>© {new Date().getFullYear()} Shu Nakashima.</div>
    </div>
  );
};

export default Footer;