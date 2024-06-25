"use client";
import Hero from "@/components/Hero/Hero";
import Banner from "@/components/Pages/Home/Banner";
import CategoryCard from "@/components/Pages/Home/CategoryCard";
import RecommendedProduct from "@/components/Pages/RecommendedProduct/RecommendedProduct";
import Loader from "@/elements/Loader";
import { categoryData } from "@/utils/DataConstant";
import { useEffect, useState } from "react";

export default function Home() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(true);
    const timeoutId = setTimeout(() => {
      setLoader(false);
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className="bg-gray-100">
      {loader ? (
        <Loader />
      ) : (
        <>
          <Hero />
          <CategoryCard title="Popular Category" categoryList={categoryData} />
          <Banner />
          <RecommendedProduct />
          <Banner />
        </>
      )}
    </div>
  );
}
