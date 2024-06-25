"use client";
import { BannerData, Images } from "@/utils/DataConstant";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full bg-gray-100 my-4">
      <Carousel
        swipeable={true}
        arrows={false}
        draggable={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {BannerData.map((item: any, index: any) => (
          <div key={index} className="w-full h-auto relative">
            <Image
              src={item?.bannerImg}
              height={100}
              objectFit="cover"
              width={50}
              sizes="100vw"
              alt={`banner${index + 1}`}
              style={{ width: "100%", height: 300 }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
