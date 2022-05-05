import React from "react";
import { TechsType } from "/types/works";

type Props = {
  techs: TechsType;
};

const SpecialtyPage: React.VFC<Props> = ({ techs }) => {
  return (
    <>
      <div>specialty</div>
      <div>
        {techs.contents.map((tech) => {
          return <div key={tech.id}>{tech.name}</div>;
        })}
      </div>
    </>
  );
};

export default SpecialtyPage;
