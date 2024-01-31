import { Rule } from "sanity";
const Post = {
  name: "posts",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    { name: "published", title: "Published", type: "boolean" },
    {
      name: "publishDate",
      title: "Publish Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule: Rule) => Rule.max(200).error("Maximum 200 characters"),
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
      ],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      validation: (Rule: Rule) => Rule.required().error("Required"),
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      validation: (Rule: Rule) => Rule.required().error("Required"),
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
    },
    {
      name: "author",
      title: "Author",
      validation: (Rule: Rule) => Rule.required().error("Required"),
      type: "reference",
      to: [{ type: "authorDetails" }],
    },
    {
      name: "seo",
      title: "SEO",
      type: "object",
      validation: (Rule: Rule) => Rule.required().error("Required"),
      fields: [
        {
          name: "title",
          type: "string",
          title: "Meta Title",
        },
        {
          name: "description",
          type: "string",
          title: "Meta Description",
        },
        {
          name: "image",
          type: "image",
          title: "Meta Image",
        },
      ],
    },
    {
      name: "isFeatured",
      title: "isFeatured",
      type: "boolean",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
  ],
};

export default Post;
