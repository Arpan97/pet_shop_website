"use client";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";

interface CategoryCardProps {
  title?: string;
  categoryList?: any;
}
const CategoryCard = ({ title, categoryList }: CategoryCardProps) => {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-between items-center w-[95%] ml-3 md:ml-10 ">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          {title}
        </h1>
        <Link href={"/category"} className="text-black">
          Show All
        </Link>
        {/* <label className="text-black hover:cursor-pointer">Show All</label> */}
      </div>
      <div className="h-full relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 my-9 mx-4 md:mx-8 lg:mx-10 ">
        {categoryList?.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="relative flex justify-center items-center "
            >
              <DirectionAwareHover imageUrl={item?.img} className="w-full">
                <div className="text-center">
                  <p className="font-bold text-xl">{item?.title}</p>
                  <p className="font-normal text-sm">$1299 / night</p>
                </div>
              </DirectionAwareHover>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryCard;
