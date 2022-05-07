import Link from "next/link";
import React from "react";
import { WorksType } from "/types/works";

type Props = {
  works: WorksType;
};

const WorksPage: React.VFC<Props> = ({ works }) => {
  return (
    <>
      <div>{works.contents.map((work)=>{
        return(
          <Link key={work.id} href={`works/${work.id}`}>
            <div>{work.title}</div>
          </Link>
        );
      })}</div>
    </>
  );
};

export default WorksPage;
