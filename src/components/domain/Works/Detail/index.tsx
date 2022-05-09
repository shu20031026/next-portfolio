import React from "react";
import { WorkType } from "/types/works";

type Props = {
  work: WorkType;
};

export const WorksDetail: React.VFC<Props> = ({ work }) => {
  return (
    <>
      <div>{work.title}</div>
      <div>{work.content}</div>
      <div>{work.link}</div>
      <div>{work.github}</div>
      <div>
        <img src={work.image.url}></img>
      </div>
    </>
  );
};
