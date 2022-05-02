import React from "react";
import { WorksType } from "/types/works";

type Props = {
  works: WorksType;
};

const WorksPage: React.VFC<Props> = ({ works }) => {
  return (
    <>
      <div>{JSON.stringify(works)}</div>
    </>
  );
};

export default WorksPage;
