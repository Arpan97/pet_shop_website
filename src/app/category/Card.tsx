import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  data: any;
}

const Card = ({ data }: CardProps) => {
  const { _id, name, description, image, totalProduct } = data;
  return (
    <Link
      href={"/product"}
      key={_id}
      className="border-2 md:h-[320px] overflow-hidden group hover:cursor-pointer rounded-xl pb-4 md:pb-0"
    >
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          style={{ width: "100%", height: 200 }}
        />
      </div>
      <div className="text-black md:pt-2 px-2">
        <span className="font-bold">{name}</span>
        <p className="text-xs md:text-sm h-[40px] tracking-tight">
          {description?.length > 60
            ? `${description?.slice(0, 60)}...`
            : description}
        </p>
      </div>
      <div className="text-black md:text-sm text-xs flex justify-between mx-2 items-center mt-2">
        <p className="font-bold">{totalProduct} Products</p>
        <p className="transition-transform duration-500 ease-in-out transform hover:scale-110 font-semibold text-xs underline hover:cursor-pointer">{`View Product >>>`}</p>
      </div>
    </Link>
  );
};

export default Card;
