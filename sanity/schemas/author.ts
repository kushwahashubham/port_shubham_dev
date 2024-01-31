const author = {
  name: "authorDetails",
  title: "Author Details",
  type: "document",
  fields: [
    { name: "name", title: "name", type: "string" },
    { name: "bio", title: "bio", type: "text" },
    { name: "avatar", title: "avatar", type: "image" },
    {
      name: "socialMediaLinks",
      title: "socialMediaLinks",
      type: "array",
      of: [
        {
          name: "socialMediaLink",
          title: "Social Media Link",
          type: "string",
        },
      ],
    },
  ],
};

export default author;
