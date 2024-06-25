import { Images } from "@/utils/DataConstant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const serviceList = [
    {
      _id: 1,
      title: "Services",
      subTab: [
        {
          _id: 1,
          title: "Home",
          path: "/",
        },
        {
          _id: 2,
          title: "Category",
          path: "/category",
        },
        {
          _id: 3,
          title: "Product",
          path: "/product",
        },
        {
          _id: 4,
          title: "Blogs",
          path: "/blogs",
        },
      ],
    },
    {
      _id: 2,
      title: "Privacy",
      subTab: [
        {
          _id: 1,
          title: "Privacy Policy",
          path: "/privacy",
        },
        {
          _id: 2,
          title: "Terms & Condition",
          path: "/termsCondition",
        },
        {
          _id: 3,
          title: "About Us",
          path: "/aboutUs",
        },
        {
          _id: 4,
          title: "Contact Us",
          path: "/contactUs",
        },
      ],
    },
  ];
  return (
    <footer>
      <div className="bg-[#1e1c1e] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 py-20 pl-15 sm:pl-20">
        <div className="justify-center flex flex-col items-center">
          <p className="font-['moon'] text-5xl sm:text-6xl">Pet Shop</p>
          <div className="grid grid-cols-3 gap-5">
            <p className="border rounded-xl border-slate-50 px-3 py-3 hover:cursor-pointer hover:border-blue-400 hover:border-2 hover:text-blue-400">
              <BsInstagram size={14} />
            </p>
            <p className="border rounded-xl border-slate-50 px-3 py-3 hover:cursor-pointer hover:border-blue-400 hover:border-2 hover:text-blue-400">
              <BsFacebook size={14} />
            </p>
            <p className="border rounded-xl border-slate-50 px-3 py-3 hover:cursor-pointer hover:border-blue-400 hover:border-2 hover:text-blue-400">
              <BsLinkedin size={14} />
            </p>
          </div>
          <div className="my-10">
            <span className="text-md sm:text-lg font-medium">For Support</span>
            <p className="text-lg sm:text-2xl font-medium">+91-7999548329</p>
          </div>
        </div>
        {serviceList?.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="justify-center items-center flex-col flex py-4"
            >
              <p className="font-bold text-xl sm:text-2xl pb-5">
                {item?.title}
              </p>
              {item?.subTab?.map((subTab: any, idx: number) => {
                return (
                  <Link
                    href={subTab?.path}
                    key={idx}
                    className="text-sm sm:text-base w-[250px] text-left mb-2 py-1 hover:cursor-pointer pl-20 hover:text-blue-400"
                  >
                    {subTab?.title}
                  </Link>
                );
              })}
            </div>
          );
        })}
        <div className="flex justify-center items-center">
          <Image
            src={Images.downloadOnIcn}
            height={300}
            width={300}
            alt="download_icon"
          />
        </div>
      </div>
      <div className="bg-[#1e1c1c] flex items-center justify-between pb-2 pl-4">
        <div>
          <p className="md:text-sm text-xs">
            &copy;2024-Pet Shop All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
