import { client } from "@/sanity/lib/client";

export async function getBlogData() {
  const query = `*[_type == "posts"]{
    excerpt,
      'slug': slug.current,
      title,
      tags,
      'featuredImage': featuredImage.asset._ref,
  }`;
  const data = await client.fetch(query);

  return data;
}

export async function getFeaturedPostData() {
  const query = `*[_type == "posts" && isFeatured==true]{
    excerpt,
      slug,
      title,
      'featuredImage': featuredImage.asset._ref,
  }`;
  const data = await client.fetch(query);

  return data;
}
