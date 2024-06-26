import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface OrderProps {
  data: any;
}

const OrderCard = ({ data }: OrderProps) => {
  const { push } = useRouter();
  const {
    _id,
    title,
    slug,
    color,
    image,
    quantity,
    orderPrice,
    paymentType,
    status,
    deliveredOn,
    cancelledOn,
    reason,
    returnedOn,
  } = data;
  const statusType =
    status === 0
      ? "On the Way"
      : status === 1
      ? "Delivered"
      : status === 2
      ? "Cancelled"
      : status === 3
      ? "Refund"
      : "";
  const statusColor =
    status === 0
      ? "border-b-blue-400"
      : status === 1
      ? "border-b-green-500"
      : status === 2
      ? "border-b-red-500"
      : "border-b-red-300";
  const statusTextColor =
    status === 0
      ? "text-blue-400 font-semibold sm:mb-0 mb-2"
      : status === 1
      ? "text-green-500 font-semibold sm:mb-0 mb-2"
      : status === 2
      ? "text-red-500 font-semibold sm:mb-0 mb-2"
      : status === 3
      ? "text-red-300 font-semibold sm:mb-0 mb-2"
      : "text-black font-semibold sm:mb-0 mb-2";

  return (
    <div
      onClick={() => push(`/order/${slug}`)}
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
          <p className="sm:text-sm text-xs">
            {quantity}*{orderPrice} = &#8377;{quantity * orderPrice}
          </p>
          {color && <span className="sm:text-sm text-xs">Color: {color}</span>}
          <p className="sm:text-sm text-xs">Payment: {paymentType}</p>
        </div>
        <div className="sm:border-0 border-b-2 sm:my-0 my-2" />
        <div className="sm:w-[25%] w-[100%] items-center flex flex-col px-4 sm:px-0 sm:pt-4">
          <p className={`${statusTextColor}`}>{statusType}</p>
          <span className="text-sm">
            {status === 3
              ? returnedOn
              : status === 2
              ? cancelledOn
              : deliveredOn}
          </span>
        </div>
      </div>
      {status === 2 || status === 3 ? (
        <div className="flex p-4">
          <p className="font-bold text-sm">Reason: </p>
          <span className="ml-4 text-sm">{reason}</span>
        </div>
      ) : null}
    </div>
  );
};

export default OrderCard;
