"use client";
import { CustomButton } from "@/components/Button/CustomButton";
import StarComponent from "@/components/StarComponent";
import Loader from "@/elements/Loader";
import { Toast, productsData } from "@/utils/DataConstant";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { SiPrime } from "react-icons/si";
import { MdStorefront } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

const ProductDetail = ({ params }: any) => {
  const pathUrl = usePathname();
  const [state, setState] = useState({
    loader: true,
    productDetail: {
      _id: "",
      name: "",
      slug: "",
      image: "",
      offerPrice: 0,
      actualPrice: 0,
      discountPercent: 0,
      description: "",
      maxQuantity: 0,
      imageArray: [],
      category: "",
      otherInfo: "",
    },
    selectedImage: "",
    quantity: 0,
    isWishlist: false,
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
  const addToCart = () => {
    Toast("success", "Product Added Successfully!");
    updateState("quantity", 1);
  };
  const addQuantity = () => {
    const { quantity } = state;
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
  const changeWishlist = () => {
    updateState("isWishlist", !state?.isWishlist);
  };
  const onShare = () => {
    const baseUrl = "http://localhost:3000";
    const basePath = baseUrl + pathUrl;
    Toast("success", "Link copied successfully!");
    navigator.clipboard.writeText(basePath);
  };
  useEffect(() => {
    updateState("loader", true);
    const timeOut = setTimeout(() => {
      let filterData = productsData?.find(
        (elem) => elem?.slug === params?.slug
      );
      updateState({
        loader: false,
        productDetail: filterData,
        selectedImage: filterData?.image,
      });
    }, 2000);
    return () => clearTimeout(timeOut);
  }, []);
  const ImageSection = () => {
    const { selectedImage, productDetail } = state;
    const { name, imageArray } = productDetail;
    return (
      <>
        <div className="border-2 h-fit overflow-hidden rounded-xl mr-3 flex md:flex-col w-[80%] md:w-auto bg-rd-500">
          {imageArray?.map((item, index) => {
            return (
              <div
                onClick={() => updateState("selectedImage", item)}
                className="border hover:cursor-pointer bg-red-400"
              >
                <Image src={item} alt={name} width={200} height={200} />
              </div>
            );
          })}
        </div>
        <div className="border-2 overflow-hidden rounded-xl sm:w-full md:w-[40%] sm:bg-red-400">
          <Image
            src={selectedImage}
            alt={name}
            width={200}
            height={200}
            className="w-full sm:h-[400px] md:h-[600px]"
          />
        </div>
      </>
    );
  };
  const FirstSection = () => {
    const { productDetail, quantity, isWishlist } = state;
    const { name, description, offerPrice, actualPrice, discountPercent } =
      productDetail;
    return (
      <>
        <div className="px-4 sm:px-4 py-1 items-center">
          <h2 className="font-bold sm:text-2xl">{name}</h2>
        </div>
        <div className="px-4 sm:px-4 py-1 items-center">
          <p>{description}</p>
        </div>
        <div className="px-4 sm:px-4 py-1 items-center">
          <StarComponent totalStars={5} rating={4} />
        </div>
        <div className="flex px-4 sm:px-4 py-2 items-center">
          <span className="">&#8377;</span>
          <p className="line-through text-gray-400 ml-1">{actualPrice}</p>
          <p className="ml-3 font-bold">{offerPrice}</p>
          <div className="bg-green-500 flex rounded-lg justify-center items-center ml-3 shadow-xl py-1">
            <div className="bg-white h-2 w-2 rounded-xl mx-1" />
            <span className="pr-3 md:text-sm text-sm text-white">
              {discountPercent}%
            </span>
          </div>
        </div>
        <div className="px-4 sm:px-4 py-2 items-center flex w-full">
          {quantity === 0 ? (
            <CustomButton
              onClick={() => addToCart()}
              title="Add to Cart"
              className={"w-[50%] sm:w-[25%] md:w-[50%] lg:w-[25%]"}
            />
          ) : (
            <div className="border flex rounded-xl md:w-[40%] lg:w-[20%] overflow-hidden">
              <div
                onClick={() => removeQuantity()}
                className="w-[25%] bg-gray-100 border flex justify-center items-center hover:cursor-pointer hover:bg-gray-200"
              >
                <FaMinus size={15} />
              </div>
              <div className="w-[50%] py-3 px-5 flex justify-center items-center">
                {quantity}
              </div>
              <div
                onClick={() => addQuantity()}
                className="w-[25%] bg-gray-100 border flex justify-center items-center hover:cursor-pointer hover:bg-gray-200"
              >
                <FaPlus size={15} />
              </div>
            </div>
          )}
          <div
            onClick={() => changeWishlist()}
            className="bg-gray-300 transition-transform duration-500 transform ease-in p-2 rounded-lg shadow-lg ml-2 hover:cursor-pointer"
          >
            {isWishlist ? (
              <IoIosHeart className="text-xl md:text-2xl" color="#dc2626" />
            ) : (
              <IoIosHeartEmpty className="text-xl md:text-2xl" />
            )}
          </div>
          <div
            onClick={() => onShare()}
            className="bg-gray-300 transition-transform duration-500 transform ease-in p-2 rounded-lg shadow-lg ml-2 hover:cursor-pointer"
          >
            <IoShareSocialOutline className="text-xl md:text-2xl" />
          </div>
        </div>
      </>
    );
  };
  const SecondSection = () => {
    return (
      <div className="border-2 w-[90%] ml-4 sm:ml-0 sm:w-[60%] md:w-[90%] lg:w-[70%] grid rounded-md sm:mx-4 my-2 items-center">
        <div className="flex w-[100%]">
          <div className="w-[90%] pl-4 py-4">
            <p className="font-semibold text-xs">4 Hours</p>
            <span className="text-xs">Premium Express Delivery in Gwalior</span>
          </div>
          <div className="w-[10%] py-4">
            <SiPrime size={25} />
          </div>
        </div>
        <div className="border-b-2" />
        <div>
          <div className="w-[90%] pl-4 py-4">
            <div className="flex justify-between">
              <p className="font-semibold text-xs">Our Delivery Options</p>
              <p className="font-semibold text-xs">Options at checkout</p>
            </div>
            <div className="flex mt-3">
              <div className="flex justify-center items-center">
                <MdStorefront size={14} />
                <p className="text-xs ml-2 font-semibold">Click & Collect</p>
              </div>
              <div className="flex justify-center items-center ml-4">
                <CiDeliveryTruck size={14} />
                <p className="text-xs ml-2 font-semibold">Click & Collect</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const DetailSection = () => {
    return (
      <div className="border-2 md:w-[60%] md:pl-2 text-black mt-2 sm:mt-2 md:mt-0">
        {FirstSection()}
        {SecondSection()}
      </div>
    );
  };
  return (
    <>
      {state?.loader ? (
        <Loader />
      ) : (
        <>
          <div className="md:flex mx-4 my-4">
            <ImageSection />
            <DetailSection />
          </div>
          {state?.productDetail?.otherInfo && (
            <div className="text-black mb-4">
              <p className="text-xl font-bold px-4 my-3">Product Description</p>
              <div
                className="px-4 text-sm"
                dangerouslySetInnerHTML={{
                  __html: state?.productDetail?.otherInfo,
                }}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetail;
