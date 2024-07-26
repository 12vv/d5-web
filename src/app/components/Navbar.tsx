"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import "./index.css";
import CapsuleBtn from "./CapsuleBtn";

const navLinks = [
  {
    title: "关于",
    path: "/#index",
  },
  {
    title: "项目",
    path: "/#",
  },
  {
    title: "联系",
    path: "/contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        // 这里可以调整滚动触发的高度
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] navbar ${
        scroll ? "navbar-scroll" : ""
      }`}
    >
      <div className="flex container py-6 2xl:py-10 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-xl md:text-2xl text-white font-semibold"
        >
          <img src="/images/logo.png" className="h-[20px] md:h-[40px]" />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:p-0 space-x-2 md:flex-row md:space-x-4 mt-0 text-[20px] md:text-[16px] font-bold">
            {navLinks.map((link, index) => (
              <li key={index} className="px-2 md:px-4">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <CapsuleBtn />
          {/* <button>免费注册</button> */}
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
