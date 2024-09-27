"use client";
import { UserSideBar } from "@/utils/DataConstant";
import React, { useCallback, useState } from "react";
import UserProfile from "./userProfile";
import UserNotification from "./userNotification";

const Profile = () => {
  const [state, setState] = useState({
    selectedTab: "notification",
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
  return (
    <div className="flex w-full bg-gray-100 pl-2">
      {leftSideBar()}
      <div className="md:w-[75%] bg-gray-100 ml-4 mr-4 md:mt-3 mb-4">
        {state?.selectedTab === "profile" ? (
          <UserProfile />
        ) : state?.selectedTab === "notification" ? (
          <UserNotification />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Profile;
