import { InferGetStaticPropsType, NextPage } from "next";
import React from "react";
import { fetchWorksData } from "~/apis/microCMS/works";
import { WorksDetail } from "~/components/domain/Works/Detail";
import { WorkType } from "/types/works";

type ParamsProps = {
  params: {
    id: string;
  };
};

type Props = {
  workDetail: WorkType;
};

export const getStaticPaths = async () => {
  const works = await fetchWorksData();

  const paths = works.map((work) => ({
    params: {
      id: work.id,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: ParamsProps) => {
  const id = params.id;
  const works = await fetchWorksData();
  const workDetail = works.find((work) => work.id === id);

  return {
    props: { workDetail },
  };
};

const WorksDetailPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  workDetail,
}: Props) => {
  return (
    <>
      <WorksDetail work={workDetail} />
    </>
  );
};

export default WorksDetailPage;
