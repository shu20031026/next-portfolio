import Link from "next/link";
import React from "react";
import { WorkType } from "/types/works";
import {work} from "./style";
type Props = {
  works: WorkType[];
};

const WorksPage: React.VFC<Props> = ({ works }) => {
  return (
    <>
      <div css={work}>
        {works.map((work) => {
          return (
            <Link key={work.id} href={`works/${work.id}`}>
              <div>{work.title}</div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default WorksPage;
