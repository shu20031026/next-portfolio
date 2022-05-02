export type WorksType = {
  contents: WorkType[];
  totalCount: number;
  offset: number;
  limit: number;
}

export type WorkType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  image:{
    url: string;
    height: number;
    width: number;
  },
  tech: TechType[];
  github: string;
  link: string;
}

export type TechType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  category:string[];
}

export type TechsType = {
  contents: TechType[];
  totalCount: number;
  offset: number;
  limit: number;
}