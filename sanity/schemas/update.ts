const update = {
  name: "update",
  title: "Update",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "date",
      title: "Date",
      type: "date",
    },

    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
    },
    {
      name: "postLink",
      title: "Post Link",
      type: "string",
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "sliderImage",
      title: "Slider Image",
      type: "array",
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },

    {
      name: "technology",
      title: "Technology",
      type: "array",
      of: [
        {
          name: "tech",
          title: "Tech",
          type: "string",
        },
      ],
    },

    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
  ],
};

export default update;
