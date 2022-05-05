import React from "react";
import { InferGetStaticPropsType, NextPage } from "next";
import SpecialtyPage from "~/components/domain/Specialty";
import { client } from "/libs/cmsClient";
import { TechsType } from "/types/works";

export const getStaticProps = async () => {
  const techs = await client.get({ endpoint: "tech" });
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
