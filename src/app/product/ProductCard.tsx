"use client";
import { CustomButton } from "@/components/Button/CustomButton";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

interface CardProps {
  data: any;
}

const ProductCard = ({ data }: CardProps) => {
  const {
    _id,
    name,
    slug,
    offerPrice,
    actualPrice,
    discountPercent,
    description,
    image,
  } = data;
  const [isWishlist, setIsWishlist] = useState(false);
  return (
    <div className="border-2 md:h-[350px] h-[340px] overflow-hidden group hover:cursor-pointer rounded-xl pb-4 md:pb-0">
      <Link href={`/product/${slug}`} key={_id}>
        <div className="overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            style={{ width: "100%", height: 180 }}
          />
        </div>
        <div className="text-black md:pt-2 px-2">
          <span className="font-bold">{name}</span>
          <p className="text-xs md:text-sm md:h-[40px] tracking-tight">
            {description?.length > 60
              ? `${description?.slice(0, 60)}...`
              : description}
          </p>
        </div>
        <div className="text-black py-2 md:px-4 px-2 flex items-center">
          <span className="md:text-base text-sm">&#8377;</span>
          <span className="md:text-base text-sm line-through ml-1 text-gray-400">
            {actualPrice}
          </span>
          <span className="md:text-base text-sm font-bold ml-3 text-black">
            {offerPrice}/-
          </span>
          <div className="bg-green-500 flex rounded-lg justify-center items-center ml-3 shadow-xl py-1">
            <div className="bg-white h-2 w-2 rounded-xl mx-1" />
            <span className="pr-3 md:text-sm text-sm text-white">
              {discountPercent}%
            </span>
          </div>
        </div>
      </Link>
      <div className="flex gap-5 mb-4">
        <div
          onClick={() => setIsWishlist((prevState) => !prevState)}
          className="bg-gray-300 transition-transform duration-500 transform ease-in p-2 rounded-lg shadow-lg ml-2 hover:cursor-pointer"
        >
          {isWishlist ? (
            <IoIosHeart className="text-xl md:text-2xl" color="#dc2626" />
          ) : (
            <IoIosHeartEmpty className="text-xl md:text-2xl" />
          )}
        </div>
        <button className="bg-blue-400 lg:w-[75%] w-[70%] shadow-lg rounded-lg text-white font-bold">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
