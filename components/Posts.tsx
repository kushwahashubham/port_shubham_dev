import { getBlogData } from "@/lib/actions/blog.action";
import { GetPostDataParams } from "@/lib/actions/shared.types";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const Posts = async () => {
  const posts: GetPostDataParams[] = await getBlogData();
  console.log(posts);
  return (
    <div>
      <div className=" dark:dark-bgGrad h-fit w-full flex-1 flex-col bg-[#EDF2F8] pt-16 max-lg:h-fit max-xs:pt-[72px]">
        <h2 className="text-center text-[2.75rem] font-extrabold capitalize text-black max-xs:text-[2rem] xxl:text-[4rem] dark:text-white">
          My All <span className=" text-primary-500">Blog</span> Posts
        </h2>

        <div className=" flex flex-wrap items-center justify-center">
          {posts.map((post, index) => (
            <Link
              href={`/blog/${post.slug}`}
              key={index}
              className="m-8 w-[90%] max-xs:m-4"
            >
              <div
                className=" flex-center cursor-pointer flex-row rounded-lg bg-white p-4 text-black transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] max-md:flex-col  max-xs:w-full xxl:rounded-xl xxl:p-5 dark:bg-[#0D1321] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
              "
              >
                <div className=" flex-center relative h-[230px] w-full xxl:h-[350px]">
                  <Image
                    src={urlForImage(post.featuredImage)}
                    alt={post.title}
                    fill={true}
                    className=" h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className=" flex-center relative w-full flex-col p-2">
                  <div className=" flex-center rounded-[10px] bg-[#0D1321] px-4 py-2 dark:bg-slate-700 ">
                    <p className="p-text text-center text-white">{post.tags}</p>
                  </div>
                  <h4 className="bold-text mt-4 text-center leading-6 xxl:mt-12 dark:text-white">
                    {post.title}
                  </h4>
                  <p className="p-text mt-2 text-center dark:text-gray-500">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
