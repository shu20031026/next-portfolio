import { client } from "/libs/cmsClient";
import { TechsType } from "/types/works";

export const fetchTechData = async ():Promise<TechsType> => {
  const fetchData = await client.get({endpoint: "tech"});
  return fetchData;
};
