import React from "react";

const MyOrders = () => {
  //filter by status
  const LeftSide = () => {
    return <div className="w-[25%]"></div>;
  };
  //search bar, order data - name, pack, amount, deliver status
  const RightSide = () => {};
  return (
    <div className="flex w-full bg-gray-100 pl-2">
      <LeftSide />
    </div>
  );
};

export default MyOrders;
