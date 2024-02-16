interface Image {
  url: string; // URL of the image.
  altText: string; // Alternate text for the image.
}

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

interface Author {
  name: string; // Name of the author.
  bio: string; // Author's biography.
  avatar: any; // Author's avatar image.
  socialLinks: string[]; // Array of author's social media links.
}

interface Category {
  name: string; // Name of the category.
  description: string; // Description of the category.
  icon?: Image; // (Optional) Icon representing the category.
}

export interface GetPostDataParams {
  map(
    arg0: (
      post: GetPostDataParams,
      index: number
    ) => import("react").JSX.Element
  ): import("react").ReactNode | Iterable<import("react").ReactNode>;
  title: string;
  slug: string;
  published: boolean;
  publishDate: Date;
  featuredImage: any;
  excerpt: string;
  body: any;
  categories: Category[];
  tags: string[];
  author: Author;
  seo: {
    title: string;
    description: string;
    image: {
      url: string;
      altText: string;
    };
  };
  isFeatured: boolean;
  _updatedAt: Date;
}

export interface GetUpdateDataParams {
  map(
    arg0: (item: any, index: any) => import("react").JSX.Element
  ): import("react").ReactNode | Iterable<import("react").ReactNode>;
  title: string;
  featuredImage: any;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  sliderImage: any[];
  technology: string[];
  description: string;
  postLink: string;
}
