import React from "react";
import type { NextPage } from "next";
import { css } from "@emotion/react";

const name = css`
  color: red;
`;

const Home: NextPage = () => {
  return (
    <>
      <div css={name}>shu20031026</div>
    </>
  );
};

export default Home;
