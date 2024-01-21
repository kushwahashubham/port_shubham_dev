export interface GetAboutDataParams {
  title: string;
  description: string;
  imageUrl: any;
}

export interface GetWorkDataParams {
  title: string;
  description: string;
  tags: string[];
  imageUrl: any;
  projectLink: string | null;
  codeLink: string | null;
}
