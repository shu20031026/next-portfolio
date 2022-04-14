import React from "react";
import Header from "~/components/molecules/Header";
import { home } from "./style";

const HomePage = () => {
  return (
    <>
      <Header/>
      <div css={home}>
        home 
      </div>
    </>
  );
};

export default HomePage;