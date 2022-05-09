import React from "react";
import { InferGetStaticPropsType, NextPage } from "next";
import SpecialtyPage from "~/components/domain/Specialty";
import { TechsType } from "/types/works";
import { fetchTechData } from "~/apis/microCMS/techs";

export const getStaticProps = async () => {
  const techs = await fetchTechData();
  return {
    props: { techs },
  };
};

type Props = {
  techs: TechsType;
};

const Specialty: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ techs }: Props) => {
  return (
    <>
      <SpecialtyPage techs={techs} />
    </>
  );
};

export default Specialty;
