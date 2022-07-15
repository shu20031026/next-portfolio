import React from "react";
import { specialty } from "./style";
import { backgroundWhite } from "/libs/backgroundStyle";
import { TechsType } from "/types/works";

type Props = {
  techs: TechsType;
};

const SpecialtyPage: React.VFC<Props> = ({ techs }) => {
  return (
    <>
      <div css={specialty}>
        <div css={backgroundWhite}>
          {techs.contents.map((tech) => {
            return <div key={tech.id}>{tech.name}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default SpecialtyPage;
