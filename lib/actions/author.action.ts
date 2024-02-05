import { client } from "@/sanity/lib/client";

export async function getAuthorData() {
  const query = `*[_type == "authorDetails"][0]{
    name,
    bio,
      'avatar': avatar.asset._ref,
  }`;
  const data = await client.fetch(query);

  return data;
}
