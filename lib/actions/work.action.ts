import { client } from "@/sanity/lib/client";

export async function getWorkData() {
  const query = `*[_type == "works"] {
    title,
      description,
      tags,
      'imageUrl': imgUrl.asset._ref,
      projectLink,
      codeLink,
      
  }`;
  const data = await client.fetch(query);

  return data;
}
