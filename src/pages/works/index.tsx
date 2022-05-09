import { InferGetStaticPropsType, NextPage } from "next";
import React from "react";
import { fetchWorksData } from "~/apis/microCMS/works";
import WorksPage from "~/components/domain/Works";
import { WorksType } from "/types/works";

export const getStaticProps = async () => {
  const works = await fetchWorksData();
  return {
    props: { works },
  };
};

type Props = {
  works: WorksType;
};

const Works: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ works }: Props) => {
  return (
    <>
      <WorksPage works={works} />
    </>
  );
};

export default Works;
