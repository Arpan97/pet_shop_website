"use client";
import React from "react";
import styles from "./heroStyle.module.css";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";
import { Images } from "@/utils/DataConstant";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-gray-100 p-8 h-[80vh] md:h-[70vh]">
      <div className="md:w-1/2 space-y-4 text-center md:text-left md:ps-20">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Welcome to Pet Shop
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Your one-stop shop for all your pet needs.
        </p>
        <p className="text-base md:text-lg text-gray-600">
          Quality products for your furry friends.
        </p>
        <button
          className={`${styles.buttonHero} relative bg-gray-200 text-gray-800 py-3 md:py-4 px-5 md:px-6 rounded-xl font-extrabold text-base md:text-lg shadow-lg overflow-hidden`}
        >
          Explore Now
        </button>
      </div>
      <BackgroundGradient className="rounded-[22px] max-w-sm">
        <div className=" mt-8 md:mt-0 flex justify-center">
          <Image
            src={Images.heroBanner}
            alt="Pet Shop"
            width={500}
            height={500}
            className="rounded-[22px] md:w-[600px] md:h-[400px]"
          />
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default Hero;
