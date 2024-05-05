"use client";
import Link from "next/link";
import React, { useState } from "react";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white sticky top-0 w-full shadow-lg">
      <div className="px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center py-4 md:space-x-10">
          <div className="flex justify-start">
            <Link href="/" className="text-2xl font-medium">
              Logo
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-xl"
              onClick={toggleMenu}
            >
              <span>&#9776;</span>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-16 left-0 w-full bg-white shadow-lg md:block md:static md:bg-none md:shadow-none`}
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  href="/posts"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  href="/posts/create"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Create Post
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex items-center gap-6 w-[70%] justify-end">
            <button type="button" className="font-medium px-4 py-2 text-center">
              Register
            </button>
            <button
              type="button"
              className="text-white bg-[#485AFF] font-medium rounded-lg px-6 py-2 text-center"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;
