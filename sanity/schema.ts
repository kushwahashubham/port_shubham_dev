import { type SchemaTypeDefinition } from "sanity";
import works from "./schemas/works";
import testimonials from "./schemas/testimonials";
import brands from "./schemas/brands";
import abouts from "./schemas/abouts";
import experiences from "./schemas/experiences";
import skills from "./schemas/skills";
import workExperience from "./schemas/workExperience";
import contact from "./schemas/contact";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    works,
    testimonials,
    brands,
    abouts,
    skills,
    workExperience,
    experiences,
    contact,
  ],
};
