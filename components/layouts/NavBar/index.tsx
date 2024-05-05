import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <nav className="bg-white sticky w-full z-20 top-0 start-0 shadow-md">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 px-12">
        <div className="flex items-center gap-5">
          <Link href="/">
            <span className="text-2xl font-semibold whitespace-nowrap">
              Logo
            </span>
          </Link>
          <ul className="flex font-medium relative top-[2px]">
            <li>
              <Link href="/posts" className="block py-2 px-3 text-whiterounded">
                Posts
              </Link>
            </li>
            <li>
              <Link href="/posts/create" className="block py-2 px-3 rounded">
                Create Post
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse  md:flex">
          <button
            type="button"
            className="font-medium text-sm px-4 py-2 text-center"
          >
            Register
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default index;
