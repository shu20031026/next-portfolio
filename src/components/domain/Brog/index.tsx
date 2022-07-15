import React from "react";
import { blog } from "./style";
import { backgroundWhite } from "/libs/backgroundStyle";

const BlogPage: React.VFC = () => {
  return (
    <>
      <div css={blog}>
        <div css={backgroundWhite}>blog</div>
      </div>
    </>
  );
};

export default BlogPage;
