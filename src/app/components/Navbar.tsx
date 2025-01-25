"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import "./index.css";
import CapsuleBtn from "./CapsuleBtn";

const navLinks = [
  // {
  //   title: "关于",
  //   path: "/#index",
  // },
  // {
  //   title: "项目",
  //   path: "/#",
  // },
  // {
  //   title: "联系",
  //   path: "/contact",
  // },
  // {
  //   title: "合作",
  //   path: "/#",
  // },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  // const [scroll, setScroll] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 10) {
  //       // 这里可以调整滚动触发的高度
  //       setScroll(true);
  //     } else {
  //       setScroll(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const [showNavbar, setShowNavbar] = useState(true); // 控制导航栏的显示或隐藏
  const lastScrollY = useRef(0); // 保存上一次的滚动位置

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // 如果向下滚动，隐藏导航栏；如果向上滚动，显示导航栏
    if (currentScrollY > lastScrollY.current) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    // 监听窗口的滚动事件
    window.addEventListener("scroll", handleScroll);

    // 组件卸载时清除事件监听
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        // backgroundColor: "lightblue",
        transition: "transform 0.3s ease-in-out",
        transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
      }}
      className={`fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] navbar px-8 md:px-44  min-[1701px]:px-32 navbar-scroll`}
    >
      <div className="flex container py-6 2xl:py-10 flex-wrap items-center justify-between mx-auto px-4 ">
        <Link
          href={"/"}
          className="text-xl xl:text-2xl text-white font-semibold"
        >
          <img src="/images/logo.png" className="h-[20px] xl:h-[30px]" />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 rounded text-blue-400 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 rounded text-blue-400 hover:text-white hover:border-white"
              // border-slate-200 border
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:p-0 space-x-2 md:flex-row md:space-x-4 mt-0 text-[20px] xl:text-[16px] font-bold">
            {navLinks.map((link, index) => (
              <li key={index} className="px-2 md:px-10 2xl:px-16">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        {/* <div> */}
        {/* <CapsuleBtn /> */}
        {/* <button>免费注册</button> */}
        {/* </div> */}
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
