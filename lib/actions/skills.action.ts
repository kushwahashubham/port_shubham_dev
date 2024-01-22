import { client } from "@/sanity/lib/client";

export async function getSkillsData() {
  const query = `*[_type == "skills"] {
    'icon': icon.asset._ref,
      name,
      
  }`;
  const data = await client.fetch(query);

  return data;
}

export async function getExperiencesData() {
  const query = `*[_type == "experiences"]`;
  const data = await client.fetch(query);

  return data;
}

/* *[_type == "experiences"] {
  year,
  works[]{
    'name': name,
    'company': company,
    'key': _key,
    'desc': desc,
  }
} */
