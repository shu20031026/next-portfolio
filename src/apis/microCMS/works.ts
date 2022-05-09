import { client } from "/libs/cmsClient";
import { WorksType } from "/types/works";

export const fetchWorksData = async ():Promise<WorksType> => {
  const fetchData = await client.get({endpoint: "works"});
  return fetchData;
};
