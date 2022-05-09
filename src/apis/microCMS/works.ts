import { client } from "/libs/cmsClient";
import { WorkType } from "/types/works";

export const fetchWorksData = async ():Promise<WorkType[]> => {
  const fetchData = await client.get({endpoint: "works"});
  const works = await fetchData.contents;
  return works;
};
