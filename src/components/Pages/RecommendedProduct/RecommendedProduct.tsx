"use client";
import React, { useCallback, useEffect, useState } from "react";
import { recommendedProduct } from "@/utils/DataConstant";
import ProductCard from "./ProductCard";

const RecommendedProduct = () => {
  const [state, setState] = useState({
    categoryList: [],
    productList: [],
    selectedProduct: "",
  });
  const updateState = useCallback((key?: any, value?: any) => {
    if (typeof key === "object") {
      setState((prevState: any) => ({
        ...prevState,
        ...key,
      }));
    } else {
      setState((prevState: any) => ({
        ...prevState,
        [key]: value,
      }));
    }
  }, []);
  const onTabClick = (item: any) => {
    const productData = recommendedProduct?.filter((itm: any) => {
      return itm?.category === item;
    });
    if (productData?.length > 0) {
      updateState({
        selectedProduct: item,
        productList: productData,
      });
    }
  };
  useEffect(() => {
    const category: any = [];
    recommendedProduct?.forEach((item: any) => {
      category.push(item?.category);
    });
    const uniqueCategories = Array.from(new Set(category));
    updateState("categoryList", uniqueCategories);
    if (uniqueCategories?.length > 0) {
      const productData = recommendedProduct?.filter((item: any) => {
        return item?.category === uniqueCategories[0];
      });
      updateState({
        selectedProduct: uniqueCategories[0],
        productList: productData,
      });
    }
    return () => {};
  }, []);
  return (
    <>
      <div className="flex justify-center items-center w-[95%] ml-3 md:ml-10 mt-4 ">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Recommended Product
        </h1>
      </div>
      <div className="border-2 shadow-xl md:mx-10 mt-5 rounded-xl overflow-hidden md:flex">
        <div className="md:w-[25%] w-[100%] flex-none border-2 overflow-hidden text-center bg-gray-100 text-black rounded-l-xl rounded-r-xl md:rounded-r-none">
          {state?.categoryList?.map((item: any, index: number) => {
            return (
              <div
                key={index}
                onClick={() => onTabClick(item)}
                className={`py-5 border-b-2 border-b-gray text-sm md:text-lg hover:cursor-pointer ${
                  state?.selectedProduct === item
                    ? "bg-black text-white"
                    : "bg-transparent"
                }`}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="text-black md:w-[75%] border-2 overflow-hidden grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-3">
          {state?.productList?.map((item: any, index: number) => {
            return <ProductCard key={index} data={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default RecommendedProduct;
