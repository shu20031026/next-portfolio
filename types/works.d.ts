export type Works = {
  contents: Work[];
  totalCount: number;
  offset: number;
  limit: number;
}

export type Work = {
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
  tech: Tech[];
  github: string;
  link: string;
}

export type Tech = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  category:string[];
}

export type Techs = {
  contents: Tech[];
  totalCount: number;
  offset: number;
  limit: number;
}