import React from "react";
import { contact } from "./style";
import { backgroundWhite } from "/libs/backgroundStyle";

const ContactPage: React.VFC = () => {
  return (
    <>
      <div css={contact}>
        <div css={backgroundWhite}>contact</div>
      </div>
    </>
  );
};

export default ContactPage;
