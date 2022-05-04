import React from "react";
import { WorksType } from "/types/works";

type Props = {
  works: WorksType;
};

const WorksPage: React.VFC<Props> = ({ works }) => {
  return (
    <>
      <div>
        {works.contents.map((work) => {
          return <div key={work.id}>{work.title}</div>;
        })}
      </div>
    </>
  );
};

export default WorksPage;
