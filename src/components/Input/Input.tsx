import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: Function;
  isPassword?: boolean;
  isError?: boolean;
  errorMsg?: string;
}

const Input = ({
  label,
  placeholder,
  value,
  onChange = () => {},
  isPassword = false,
  isError = false,
  errorMsg = "",
}: InputProps) => {
  const [isShow, setIsShow] = useState(false);
  const onChangeText = (e: any) => {
    onChange(e.target.value);
  };
  const onShowPassword = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="">
      <div className="flex items-center mt-2">
        <div className="w-[20%]">
          <p className="font-bold text-base mr-4">{label}</p>
        </div>
        <div className="">
          <div className="flex overflow-hidden bg-white border-2 rounded-lg items-center px-2">
            {isPassword ? (
              <input
                placeholder={placeholder}
                value={value}
                onChange={(e: any) => onChangeText(e)}
                className="w-96 py-4"
                type={isShow ? "text" : "password"}
              />
            ) : (
              <input
                placeholder={placeholder}
                value={value}
                onChange={(e: any) => onChangeText(e)}
                className="w-96 py-4"
              />
            )}
            {isPassword && (
              <div
                className="hover:cursor-pointer mx-auto"
                onClick={onShowPassword}
              >
                {isShow ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </div>
            )}
          </div>
          {isError && (
            <p className="text-red-500 text-[10px] font-bold pl-1">
              {errorMsg}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
