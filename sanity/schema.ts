import { type SchemaTypeDefinition } from "sanity";
import works from "./schemas/works";
import testimonials from "./schemas/testimonials";
import abouts from "./schemas/abouts";
import experiences from "./schemas/experiences";
import skills from "./schemas/skills";
import workExperience from "./schemas/workExperience";
import contact from "./schemas/contact";
import post from "./schemas/post";
import author from "./schemas/author";
import category from "./schemas/category";
import tags from "./schemas/tags";
import update from "./schemas/update";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    works,
    testimonials,
    post,
    author,
    category,
    abouts,
    skills,
    workExperience,
    experiences,
    contact,
    tags,
    update,
  ],
};
