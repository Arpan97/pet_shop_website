"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { NavBarData } from "./NavBarData";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const pathName = usePathname();
  const isLogin = true;
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-gray-100 text-black flex justify-between w-full shadow-xl transition-all duration-300 ${
        isScroll ? "fixed top-0 animate-fadeInDown" : ""
      } z-50`}
    >
      <div className="flex justify-between items-center w-full md:w-1/5 py-4">
        <h2 className="font-bold font-['moon'] text-4xl md:ml-14 ml-3">
          Pet Shop
        </h2>
        <button className="md:hidden px-4 py-2" onClick={toggleDrawer}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isDrawerOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>
      <div className="hidden md:flex md:w-4/5 md:justify-end items-center">
        {NavBarData.map((item) => {
          const isActive = pathName === item.link;
          return (
            <Link
              className={`px-4 mx-2 py-2 rounded-lg hover:cursor-pointer hover:text-blue-400 ${
                isActive ? "text-blue-400 font-semibold" : "text-black"
              }`}
              href={item.link}
              key={item.pathName}
            >
              {item.pathName}
            </Link>
          );
        })}
        {isLogin && (
          <Link
            className={`px-4 mx-2 py-2 rounded-lg hover:cursor-pointer hover:text-blue-400 ${
              pathName === "/cart"
                ? "text-blue-400 font-semibold"
                : "text-black"
            }`}
            href={"/cart"}
            key={"/cart"}
          >
            Cart
          </Link>
        )}
        {isLogin ? (
          <div className="px-4 py-2 mr-4 rounded-lg bg-blue-400 text-white shadow-xl">
            Logout
          </div>
        ) : (
          <div className="px-4 py-2 mr-4 rounded-lg">Login</div>
        )}
      </div>
      {isDrawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleDrawer}
          ></div>
          <div className="fixed inset-y-0 left-0 w-64 bg-white z-50 p-4 shadow-lg">
            <button className="px-4 py-2 mb-4" onClick={toggleDrawer}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {NavBarData.map((item) => {
              const isActive = pathName === item.link;
              return (
                <Link
                  className={`block px-4 py-2 mb-2 rounded-lg ${
                    isActive
                      ? "bg-blue-500 text-white shadow-xl font-semibold"
                      : "text-black"
                  }`}
                  href={item.link}
                  key={item.pathName}
                  onClick={toggleDrawer}
                >
                  {item.pathName}
                </Link>
              );
            })}
            {isLogin && (
              <Link
                className={`block px-4 py-2 mb-2 rounded-lg ${
                  pathName === "/cart"
                    ? "bg-blue-500 text-white shadow-xl font-semibold"
                    : "text-black"
                }`}
                href={"/cart"}
                key={"/cart"}
                onClick={toggleDrawer}
              >
                Cart
              </Link>
            )}
            {isLogin ? (
              <div className="px-4 py-2 rounded-lg">Logout</div>
            ) : (
              <div className="px-4 py-2 rounded-lg">Login</div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
