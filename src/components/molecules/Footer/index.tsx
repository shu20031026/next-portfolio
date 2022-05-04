import React from "react";
import { footerContainer } from "./style";

const Footer: React.VFC = () => {
  return (
    <div css={footerContainer}>
      <div>© {new Date().getFullYear()} Shu Nakashima.</div>
    </div>
  );
};

export default Footer;
