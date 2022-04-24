import React from "react";
import Header from "~/components/molecules/Header";

export const Layout: React.FC = ({children}) => {
  return(
    <>
      <Header />
      {children}
    </>
  );
};