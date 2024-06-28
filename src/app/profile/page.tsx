"use client";
import { Images, UserSideBar } from "@/utils/DataConstant";
import moment from "moment";
import Image from "next/image";
import React, { useCallback, useState } from "react";

const Profile = () => {
  const [state, setState] = useState({
    selectedTab: "profile",
    userDetail: {
      firstName: "Arpan",
      lastName: "Govila",
      mobileNo: "7999548329",
      emailId: "arpan.govila74@gmail.com",
      createdAt: new Date().toLocaleString(),
      isPassword: false,
    },
    password: "",
    confirmPassword: "",
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
  const leftSideBar = () => {
    return (
      <div className="md:w-[25%] border-2 shadow-lg rounded-xl h-fit md:mt-3 overflow-hidden">
        <div className="text-black">
          {UserSideBar?.map((item: any) => {
            return (
              <div
                onClick={() => updateState("selectedTab", item?.slug)}
                key={item?._id}
                className={`${
                  state?.selectedTab === item?.slug
                    ? "bg-blue-400 text-white"
                    : "bg-transparent text-black"
                } border flex justify-between items-center py-5 px-5 hover:cursor-pointer hover:bg-blue-400 hover:text-white`}
              >
                <div className="" key={item?._id}>
                  <h1>{item?.title}</h1>
                </div>
                <div>
                  <p>{`>`}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  const rightSideBar = () => {
    const { userDetail, password, confirmPassword } = state;
    return (
      <div className="md:w-[75%] bg-gray-100 ml-4 mr-4 border-2 rounded-xl overflow-scroll md:mt-3">
        <div className="flex text-black justify-between px-5 py-5">
          <Image
            src={Images.userProfile}
            alt="user"
            width={100}
            height={100}
            className="rounded-full w-32 h-32 shadow-xl"
          />
          <span className="text-red-400">Edit</span>
        </div>
        <div className="text-black px-5 py-5">
          <p className="font-bold text-2xl">Personal Details</p>
          <div className="px-4 py-4">
            <div>
              <p className="font-semibold py-2">
                First Name:{" "}
                <span className="ml-2 font-normal">
                  {userDetail?.firstName}
                </span>
              </p>
              <p className="font-semibold py-2">
                Last Name:{" "}
                <span className="ml-2 font-normal">{userDetail?.lastName}</span>
              </p>
              <p className="font-semibold py-2">
                Email ID:{" "}
                <span className="ml-2 font-normal">{userDetail?.emailId}</span>
              </p>
              <p className="font-semibold py-2">
                Mobile Number:{" "}
                <span className="ml-2 font-normal">{userDetail?.mobileNo}</span>
              </p>
              <p className="font-semibold py-2">
                Created On:{" "}
                <span className="ml-2 font-normal">
                  {moment(userDetail?.createdAt).format("DD-MM-YYYY")}
                </span>
              </p>
            </div>
            {userDetail?.isPassword && (
              <div>
                <input placeholder="Create Password" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="flex w-full bg-gray-100 pl-2">
      {leftSideBar()}
      {rightSideBar()}
    </div>
  );
};

export default Profile;
