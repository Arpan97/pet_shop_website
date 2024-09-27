import List from "@/components/ListView/List";
import { notificationList } from "@/utils/DataConstant";
import Image from "next/image";
import React from "react";

const UserNotification = () => {
  const renderList = (item: any) => {
    const { _id, status, image, title, description } = item;
    const statusColor =
      status === 0
        ? "border-b-blue-400"
        : status === 1
        ? "border-b-green-500"
        : status === 2
        ? "border-b-red-500"
        : "border-b-red-300";
    return (
      <div
        key={_id}
        className={`${statusColor} border-b-2 w-full mt-3 mb-3 text-black sm:px-4 sm:py-4 shadow-lg rounded-xl overflow-hidden cursor-pointer`}
      >
        <div className="flex sm:flex-row flex-col">
          <div className="sm:w-[15%] w-[full]">
            <Image
              src={image}
              alt={title}
              width={200}
              height={200}
              className="w-full"
            />
          </div>
          <div className="w-[60%] px-4 sm:pt-0 pt-3">
            <p className="font-bold text-xl">{title}</p>
            <p className="sm:text-sm text-xs">{description}</p>
          </div>
          <div className="sm:border-0 border-b-2 sm:my-0 my-2" />
        </div>
      </div>
    );
  };

  return <List data={notificationList} renderList={renderList} />;
};

export default UserNotification;
