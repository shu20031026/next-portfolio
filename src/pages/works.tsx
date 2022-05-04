import { InferGetStaticPropsType, NextPage } from "next";
import React from "react";
import WorksPage from "~/components/domain/Works";
import { client } from "/libs/cmsClient";
import { WorksType } from "/types/works";

export const getStaticProps = async () => {
  const works = await client.get({ endpoint: "works" });
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
