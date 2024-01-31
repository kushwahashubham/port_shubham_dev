const category = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    { name: "name", title: "name", type: "string" },
    { name: "description", title: "description", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
  ],
};

export default category;
