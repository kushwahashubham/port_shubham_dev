const tags = {
  name: "tags",
  title: "Tags",
  type: "document",
  fields: [
    { name: "tag", title: "Tag", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "tag",
      },
    },
  ],
};

export default tags;
