"use client";
import { Images, Toast } from "@/utils/DataConstant";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Cart = () => {
  const [state, setState] = useState({
    totalItems: 0,
    totalPrice: 0,
    discountPrice: 0,
    deliveryCharge: 0,
    packagingCharge: 0,
    totalAmount: 0,
    savingAmount: 0,
    quantity: 1,
  });
  const updateState = (key?: any, value?: any) => {
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
  };
  const addQuantity = () => {
    const { quantity } = state;
    Toast("success", "Product Added Successfully!");
    updateState("quantity", quantity + 1);
  };
  const removeQuantity = () => {
    const { quantity } = state;
    Toast("success", "Product Removed Successfully!");
    if (quantity === 0) {
      updateState("quantity", 0);
    } else {
      updateState("quantity", quantity - 1);
    }
  };
  const LeftSide = () => {
    return (
      <div className="bg-white sm:w-[70%] mx-5 h-fit border rounded-xl ml-3 text-black overflow-hidden">
        <div className="px-3 py-3 w-[100%] flex">
          <div className="overflow-hidden rounded-xl w-[20%]">
            <Image
              src={Images.goldenRetriever}
              alt="cartImg"
              width={150}
              height={100}
              className="w-full"
            />
          </div>
          <div className="w-[60%] px-4 py-2 sm:py-4">
            <div>
              <p className="text-lg sm:text-xl font-bold">
                Pug - A breed of Dog
              </p>
              <p className="text-xs sm:text-sm text-gray-400">Pack of 1</p>
            </div>
            <div className="flex text-gray-400 my-2 sm:my-4">
              <p className="font-semibold text-xs sm:text-xs">Seller: </p>
              <span className="font-semibold text-xs ml-2">Pet Family</span>
            </div>
            <div className="flex py-2 items-center">
              <span className="text-gray-400 text-sm sm:text-base">
                &#8377;
              </span>
              <p className="line-through text-gray-400 text-sm sm:text-base">
                {17000}
              </p>
              <p className="ml-2 font-bold text-sm sm:text-base">{15000}</p>
              <div className="bg-green-500 flex rounded-lg justify-center items-center ml-3 shadow-xl py-1">
                <div className="bg-white h-1 sm:h-2 w-1 sm:w-2 rounded-xl mx-1" />
                <span className="sm:pr-3 pr-2 sm:text-sm text-xs text-white">
                  {20}%
                </span>
              </div>
            </div>
          </div>
          <div className="w-[20%] flex flex-col justify-between">
            <div className="sm:flex sm:px-4 py-4 text-xs justify-between">
              <p className="">{`Delivery in ${"2"} days, ${"Thu"} |`}</p>
              <span className="text-gray-400 line-through ml-1">&#8377;40</span>
              <span className="text-green-500 ml-1">Free</span>
            </div>
            <div className="border flex rounded-xl w-[100%] sm:w-[80%] md:w-[80%] lg:w-[80%] overflow-hidden ">
              <div
                onClick={() => removeQuantity()}
                className="w-[25%] bg-gray-100 border flex justify-center items-center hover:cursor-pointer hover:bg-gray-200"
              >
                <FaMinus className="text-[8px] sm:text-[15px]" />
              </div>
              <div className="w-[50%] py-3 px-5 flex justify-center items-center sm:text-base text-xs">
                {state?.quantity}
              </div>
              <div
                onClick={() => addQuantity()}
                className="w-[25%] bg-gray-100 border flex justify-center items-center hover:cursor-pointer hover:bg-gray-200"
              >
                <FaPlus className="text-[8px] sm:text-[15px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-2 my-2" />
      </div>
    );
  };
  const RightSide = () => {
    const {
      totalItems,
      totalPrice,
      discountPrice,
      deliveryCharge,
      packagingCharge,
      totalAmount,
      savingAmount,
    } = state;
    return (
      <div className="sm:w-[25%] mt-3 sm:mt-0 mr-5 sm:mr-0 h-fit border bg-white rounded-xl ml-3 text-black">
        <div className="py-5 font-bold flex items-center px-4 text-gray-400">
          <p className="uppercase">Price Details</p>
        </div>
        <div className="border-b-2" />
        <div>
          <div className="pt-5 pb-3 flex items-center px-4 justify-between">
            <p className="font-bold">{`Price (${totalItems} items)`}</p>
            <span>&#8377;{totalPrice}</span>
          </div>
          <div className="pb-3 flex items-center px-4 justify-between">
            <p className="font-bold">{`Discount`}</p>
            <span className="text-green-500">-&#8377;{discountPrice}</span>
          </div>
          <div className="pb-3 flex items-center px-4 justify-between">
            <p className="font-bold">{`Delivery Charges`}</p>
            <div>
              <span className="line-through text-gray-400 mr-2">
                &#8377;{deliveryCharge}
              </span>
              <span className="text-green-500">Free</span>
            </div>
          </div>
          <div className="pb-3 flex items-center px-4 justify-between">
            <p className="font-bold">{`Secured Packaging Fee`}</p>
            <span>&#8377;{packagingCharge}</span>
          </div>
        </div>
        <div className="border-t-2 border-dotted w-[92%] ml-4" />
        <div className="pt-5 pb-3 flex items-center px-4 justify-between">
          <p className="font-bold">Total Amount</p>
          <span>&#8377;{totalAmount}</span>
        </div>
        <div className="border-t-2 border-dotted w-[92%] ml-4" />
        <div className="pt-5 pb-3 font-bold flex items-center px-4 justify-between text-green-500">
          <p>You will save &#8377;{savingAmount} on this order</p>
        </div>
      </div>
    );
  };
  useEffect(() => {
    const { totalItems, quantity } = state;
    updateState({
      totalItems: totalItems + quantity,
      totalPrice: quantity * 17000,
      discountPrice: (17000 - 15000) * quantity,
      totalAmount: quantity * 15000,
      savingAmount: quantity * 17000 - quantity * 15000,
    });
  }, [state?.quantity]);
  return (
    <div className="sm:flex sm:flex-row flex-col w-full py-3">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Cart;
