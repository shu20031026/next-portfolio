import React from "react";
import { profile } from "./style";
import { backgroundWhite } from "/libs/backgroundStyle";

const ProfilePage: React.VFC = () => {
  return (
    <>
      <div css={profile}>
        <div css={backgroundWhite}>profile</div>
      </div>
    </>
  );
};

export default ProfilePage;
