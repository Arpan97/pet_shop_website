import Image from "next/image";
import React, { useState } from "react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

interface ProductProps {
  data: any;
}

const ProductCard = ({ data }: ProductProps) => {
  const [isWishlist, setIsWishlist] = useState(true);
  const {
    _id,
    name,
    image,
    offerPrice,
    actualPrice,
    discountPercent,
    description,
  } = data;
  return (
    <div key={_id} className="border-2 rounded-lg overflow-hidden ">
      <div>
        <Image
          className="w-[100%] md:h-[250px] h-[200px]"
          src={image}
          alt={name}
          height={100}
          width={200}
        />
      </div>
      <div className="w-full">
        <p className="md:text-xl text-sm font-semibold py-2 px-4 ">{name}</p>
        <p className="md:text-sm text-xs font-medium py-2 px-4 md:h-[60px] h-[40px] ">
          {description?.length > 100
            ? `${description?.slice(0, 100)}...`
            : description}
        </p>
      </div>
      <div className="text-black py-2 px-4 flex items-center">
        <span>&#8377;</span>
        <span className="md:text-lg text-sm line-through ml-1 text-gray-400">
          {offerPrice}
        </span>
        <span className="md:text-lg text-sm font-bold ml-3 text-black">
          {actualPrice}/-
        </span>
        <div className="bg-green-500 flex rounded-lg justify-center items-center ml-3 shadow-xl py-1">
          <div className="bg-white h-2 w-2 rounded-xl mx-2" />
          <span className="pr-4 text-sm text-white">{discountPercent}%</span>
        </div>
      </div>
      <div className="flex gap-6 mb-4">
        <div className="bg-gray-300 p-2 rounded-lg shadow-lg ml-4 hover:cursor-pointer">
          {isWishlist ? (
            <IoIosHeart className="text-xl md:text-2xl" color="#dc2626" />
          ) : (
            <IoIosHeartEmpty />
          )}
        </div>
        <button className="bg-black w-[75%] shadow-lg rounded-lg text-white font-bold">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
