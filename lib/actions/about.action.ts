import { client } from "@/sanity/lib/client";

export async function getAboutData() {
  const query = `*[_type == "abouts"] {
    title,
      description, 
      'imageUrl': imgUrl.asset._ref
  }`;
  const data = await client.fetch(query);

  return data;
}
