export interface GetAboutDataParams {
  title: string;
  description: string;
  imageUrl: any;
}

export interface GetSkillsDataParams {
  name: string;
  icon: any;
  tags: string[];
}

export interface GetWorkDataParams {
  title: string;
  description: string;
  tags: string[];
  imageUrl: any;
  projectLink: string | null;
  codeLink: string | null;
}

export interface GetExperienceDataParams {
  works: Array<{ name: string; desc: string; company: string; _key: string }>;
  year: number;
}
