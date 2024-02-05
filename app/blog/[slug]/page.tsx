import { getPostData } from "@/lib/actions/blog.action";
import BlogNavigation from "@/components/BlogNavigation";
import React from "react";
import Image from "next/image";
import images from "@/constants/images";
import { Author, GetPostDataParams } from "@/lib/actions/shared.types";
import { urlForImage } from "@/sanity/lib/image";
import { getAuthorData } from "@/lib/actions/author.action";
import { PortableText } from "@portabletext/react";

interface Params {
  params: {
    slug: string;
  };
}

const page = async ({ params }: Params) => {
  const content: GetPostDataParams = await getPostData(params?.slug);
  const author: Author = await getAuthorData();

  return (
    <div>
      <BlogNavigation />
      <p className="fixed -z-50 px-16 pt-4 text-[250px] text-gray-700/5 max-xl:hidden dark:text-gray-700/15">
        {content.tags[0]}
      </p>
      <div className=" flex-center flex-col gap-8 px-8 pb-4 pt-20 text-center">
        <Image
          src={images.pen}
          alt="pen icon"
          width={25}
          height={25}
          className=" dark:invert"
        />
        <h1 className="h1-bold text-black dark:invert">{content.title}</h1>
        <div className="text-center dark:invert">
          <p className="p-text">
            Published:
            <span> {new Date(content?.publishDate).toDateString()} | </span>
            Updated:
            <span> {new Date(content?._updatedAt).toDateString()}</span>
          </p>
        </div>
        <div className="flex-center relative h-[500px] w-[70%] max-xs:h-[200px] max-xs:w-[275px] ">
          <Image
            src={urlForImage(content.featuredImage)}
            alt={content.title}
            fill={true}
            className=" h-full w-full rounded-lg object-cover"
          />
        </div>
        <div className="flex-center flex-col gap-2">
          <div className=" relative h-[45px] w-[45px]">
            <Image
              src={urlForImage(author.avatar)}
              alt={author.name}
              fill={true}
              className=" h-full w-full rounded-full border border-gray-200 object-cover"
            />
          </div>
          <div className="flex-center dark:invert">
            <p className="p-text text-center">
              {author.name} | {author.bio}
            </p>
          </div>
        </div>
      </div>
      <div className={`${richTextStyles}`}>
        <PortableText
          value={content?.body}
          components={myPortableTextComponents}
        />
      </div>
    </div>
  );
};

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value)}
        alt={value.alt}
        width={700}
        height={700}
        className="m-auto rounded"
      />
    ),
  },
};

const richTextStyles = `
mt-14
text-justify
max-w-[70%]
max-lg:max-w-[90%]
m-auto
dark:text-white
prose-headings:my-5
prose-headings:font-semibold
prose-h2:text-2xl
prose-h3:text-xl
prose-h4:text-lg
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
