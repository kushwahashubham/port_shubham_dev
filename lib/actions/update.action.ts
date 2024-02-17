import { client } from "@/sanity/lib/client";

export async function getUpdateData() {
  const query = `*[_type == "update"] {
    date,
      description,
      'featuredImage': featuredImage.asset._ref,
      'sliderImage': sliderImage[].asset._ref,
      technology,
      tags,
      category,
      postLink,
      excerpt,
      title,
  }`;
  const data = await client.fetch(query);

  return data;
}
