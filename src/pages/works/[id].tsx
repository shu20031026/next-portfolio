import { InferGetStaticPropsType, NextPage } from "next";
import React from "react";
import { WorksDetail } from "~/components/domain/Works/Detail";
import { client } from "/libs/cmsClient";
import { WorkType } from "/types/works";

type ParamsProps = {
  params: {
    id: string;
  };
};

type Props = {
  workDetail: WorkType
}

export const getStaticPaths = async () => {
  const res = await client.get({ endpoint: "works" });
  const works: WorkType[] = await res.contents;

  const paths = works.map((work) => ({
    params: {
      id: work.id,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: ParamsProps) => {
  const id = params.id;
  const res = await client.get({ endpoint: "works" });
  const works: WorkType[] = await res.contents;
  const workDetail = works.find((work) => work.id === id);

  return {
    props: { workDetail },
  };
};

const WorksDetailPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({workDetail}:Props) => {

  return (
    <>
      <WorksDetail work={workDetail} />
    </>
  );
};

export default WorksDetailPage;
