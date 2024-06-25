"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { AllCategoryData, categoryData } from "@/utils/DataConstant";
import List from "@/components/ListView/List";
import Loader from "@/elements/Loader";
import { Metadata } from "next";

const Category = () => {
  const [loader, setLoader] = useState(true);
  const [categoryList, setCategoryList] = useState<any>([]);
  const [selectedTab, setSelectedTab] = useState({
    _id: 1,
    title: "All",
    type: "all",
  });
  const onChangeTab = (item: any) => {
    setSelectedTab(item);
    if (item?._id === 1) {
      setCategoryList(AllCategoryData);
    } else {
      let filteredData = AllCategoryData?.filter((itm: any) => {
        return itm?.type.toLowerCase() === item?.type.toLowerCase();
      });
      setCategoryList(filteredData);
    }
  };
  const renderCategory = (item: any, index: number) => {
    return <Card data={item} key={index} />;
  };

  useEffect(() => {
    setLoader(true);
    const timeout = setTimeout(() => {
      setLoader(false);
      setCategoryList(AllCategoryData);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="my-4">
          <div className="flex justify-center items-center mb-4">
            <div className="w-full md:w-auto overflow-x-auto whitespace-nowrap ">
              <div className="inline-flex space-x-2 md:space-x-4">
                {categoryData?.map((item: any, index: number) => {
                  const isSelected = selectedTab?._id === item?._id;
                  return (
                    <div
                      className={`${
                        isSelected
                          ? "bg-black rounded-3xl shadow-xl"
                          : "bg-transparent"
                      } py-2 px-4 text-center hover:cursor-pointer ml-3`}
                      key={index}
                      onClick={() => onChangeTab(item)}
                    >
                      <span
                        className={`${
                          isSelected ? "text-white" : "text-black"
                        }`}
                      >
                        {item?.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:mx-3 md:my-3 ml-2 mr-2">
            <List data={categoryList} renderList={renderCategory} />
          </div>
        </div>
      )}
    </>
  );
};

export default Category;

// but it is not used in use client type
// export const metadata: Metadata = {
//   title: "Category",
//   description: "Category",
// };
