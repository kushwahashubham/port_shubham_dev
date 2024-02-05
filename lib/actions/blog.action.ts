import { client } from "@/sanity/lib/client";

export async function getBlogData() {
  const query = `*[_type == "posts"]{
    excerpt,
      'slug': slug.current,
      title,
      'tags': tags[0],
      'featuredImage': featuredImage.asset._ref,
  }`;
  const data = await client.fetch(query);

  return data;
}

export async function getFeaturedPostData() {
  const query = `*[_type == "posts" && isFeatured==true]{
    excerpt,
    'slug': slug.current,
      title,
      'featuredImage': featuredImage.asset._ref,
  }`;
  const data = await client.fetch(query);

  return data;
}

export async function getPostData(slug: string) {
  const query = `*[_type == "posts" && slug.current == "${slug}" ][0]{
    'slug': slug.current,
    title,
    tags,
    'featuredImage': featuredImage.asset._ref,
    publishDate,
      body,
      _updatedAt,
      'author': author._ref,
      published,
      seo,
}`;
  const data = await client.fetch(query);

  return data;
}
