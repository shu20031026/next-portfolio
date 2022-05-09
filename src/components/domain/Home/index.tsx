import React from "react";
import { home } from "./style";
import { backgroundWhite } from "/libs/backgroundStyle";

const HomePage: React.VFC = () => {
  return (
    <>
      <div css={home}>
        <div css={backgroundWhite}>hoge</div>
      </div>
    </>
  );
};

export default HomePage;
