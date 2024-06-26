"use client";
import List from "@/components/ListView/List";
import { OrderFilterData, orderHistory } from "@/utils/DataConstant";
import React, { useEffect, useState } from "react";
import SearchOrder from "./SearchOrder";
import OrderCard from "./OrderCard";

const MyOrders = () => {
  const [input, setInput] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [orderData, setOrderData] = useState<any>([]);

  const handleFilter = (item: any) => {
    setFilterType(item);
    if (item === "all") setOrderData(orderHistory);
    else {
      let filterData = orderHistory?.filter((itm: any) => {
        const statusType =
          itm?.status === 0
            ? "pending"
            : itm?.status === 1
            ? "delivered"
            : itm?.status === 2
            ? "cancelled"
            : "refunded";
        return item === statusType;
      });
      setOrderData(filterData);
    }
  };
  const renderCategory = (item: any) => {
    return (
      <label className="md:text-base text-sm cursor-pointer">
        <input
          type="radio"
          value={item?.key}
          checked={filterType === item?.key}
          onChange={() => handleFilter(item?.key)}
          className="mr-2 cursor-pointer"
        />
        <span className="sm:text-base text-sm">{item?.title}</span>
      </label>
    );
  };
  const LeftSection = () => {
    return (
      <div className="md:w-[25%] border-2 shadow-lg rounded-xl h-fit md:mt-3">
        <div className="text-black px-5 py-5">
          <p className="font-bold text-sm md:text-xl">Filter</p>
          <div className="flex flex-col">
            <List data={OrderFilterData} renderList={renderCategory} />
          </div>
        </div>
      </div>
    );
  };
  const onInputSearch = (val: any) => {
    setInput(val);
    if (val === "") setOrderData(orderHistory);
    else {
      const filtered = orderHistory?.filter((item) =>
        item?.title?.toLowerCase().includes(val?.toLowerCase())
      );
      setOrderData(filtered);
    }
  };
  const renderOrder = (item: any) => {
    return <OrderCard data={item} />;
  };
  const RightSide = () => {
    return (
      <div className="md:w-[75%] md:mt-3 bg-gray-100 ml-4 mr-4">
        <SearchOrder value={input} setInput={(value) => onInputSearch(value)} />
        <List data={orderData} renderList={renderOrder} />
      </div>
    );
  };
  useEffect(() => {
    setOrderData(orderHistory);
  }, []);
  return (
    <div className="flex w-full bg-gray-100 pl-2">
      {LeftSection()}
      {RightSide()}
    </div>
  );
};

export default MyOrders;
