import { client } from "@/sanity/lib/client";

export async function getWorkData() {
  const query = `*[_type == "works"] {
    title,
      description,
      excerpt,
      'sliderImage': sliderImage[].asset._ref,
      tags,
      'imageUrl': imgUrl.asset._ref,
      projectLink,
      codeLink,
      technology,
      
  }`;
  const data = await client.fetch(query);

  return data;
}
