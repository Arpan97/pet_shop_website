"use client";
import { CustomButton } from "@/components/Button/CustomButton";
import Input from "@/components/Input/Input";
import { Images, Toast } from "@/utils/DataConstant";
import moment from "moment";
import Image from "next/image";
import React, { useCallback, useState } from "react";

const UserProfile = () => {
  const [state, setState] = useState({
    userDetail: {
      firstName: "Arpan",
      lastName: "Govila",
      mobileNo: "7999548329",
      emailId: "arpan.govila74@gmail.com",
      createdAt: new Date().toString(),
      isPassword: true,
    },
    password: "",
    confirmPassword: "",
    isNewError: false,
    isConfirmError: false,
    errorNewMessage: "",
    errorConfirmMessage: "",
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
  const verifyPassword = () => {
    const { password, confirmPassword } = state;
    if (password.trim() !== confirmPassword.trim()) {
      Toast("error", "Password is different");
    }
  };
  const passwordMatch = (key: string, val: string) => {
    updateState(key, val);
    if (val?.length <= 0) {
      updateState({
        isNewError: key === "password" ? true : false,
        isConfirmError: key === "confirmPassword" ? true : false,
        errorMessage: "Password should not be empty",
        errorNewMessage:
          key === "password" ? "Password should not be empty" : "",
        errorConfirmMessage:
          key === "confirmPassword"
            ? "Confirm Password should not be empty"
            : "",
      });
    } else if (val?.length < 8) {
      updateState({
        isNewError: key === "password" ? true : false,
        isConfirmError: key === "confirmPassword" ? true : false,
        errorNewMessage:
          key === "password" ? "Password should be greater than 8 digits" : "",
        errorConfirmMessage:
          key === "confirmPassword"
            ? "Confirm Password should be greater than 8 digits"
            : "",
      });
    } else {
      updateState({
        isNewError: false,
        isConfirmError: false,
        errorNewMessage: "",
        errorConfirmMessage: "",
      });
    }
  };
  const renderProfile = () => {
    const {
      userDetail,
      password,
      confirmPassword,
      errorNewMessage,
      errorConfirmMessage,
      isNewError,
      isConfirmError,
    } = state;
    return (
      <div className="md:w-full border-2 rounded-xl overflow-scroll">
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
                  {moment(userDetail?.createdAt).format("DD MMM YYYY hh:mm:ss")}
                </span>
              </p>
            </div>
            {userDetail?.isPassword && (
              <div>
                <Input
                  label="New Password:"
                  placeholder="New Password"
                  value={password}
                  onChange={(txt: string) => passwordMatch("password", txt)}
                  isPassword
                  isError={isNewError}
                  errorMsg={errorNewMessage}
                />
                <Input
                  label="Confirm Password:"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(txt: string) =>
                    passwordMatch("confirmPassword", txt)
                  }
                  isPassword
                  isError={isConfirmError}
                  errorMsg={errorConfirmMessage}
                />
                <div className="flex justify-center w-[60%] mt-4">
                  <CustomButton
                    onClick={verifyPassword}
                    title="Update Password"
                    className="w-52"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  return <div className="">{renderProfile()}</div>;
};

export default UserProfile;
