"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
const ImageSwiper = ({ images }: { images: any[] }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=" m-4 h-[425px] w-full rounded-xl max-md:h-[250px]"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center bg-white text-center text-[18px]"
          >
            <Image
              src={urlForImage(image)}
              alt={`image-${index}`}
              fill={true}
              className="block h-full w-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSwiper;
