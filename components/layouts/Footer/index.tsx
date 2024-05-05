import { footerIcons } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full shadow-top">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col xl:flex-row gap-8 pt-14 pb-14">
          <p className="text-[#475569] mb-5 text-center lg:text-left text-lg lg:mr-10">
            Design amazing digital experiences that create more happy in the
            world.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 min-[890px]:grid-cols-5 lg:grid-cols-5 gap-4 xl:gap-8 w-full max-w-sm mx-auto sm:max-w-3xl min-[890px]:max-w-full">
            <div className="w-full  text-left">
              <h4 className="text-xl text-[#475569] font-medium mb-7">
                Pagedone
              </h4>
              <ul className=" transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Pricing{" "}
                    <button
                      className="ml-1 text-white bg-[#2501FF] py-[2px] px-2 rounded-3xl  text-sm"
                    >
                      New
                    </button>
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Pro Version
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="w-full  text-left">
              <h4 className="text-xl text-[#475569] font-medium mb-7">
                Products
              </h4>
              <ul className=" transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Figma UI System
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Icons Assets
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Responsive Blocks
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Components Library
                  </a>
                </li>
                <li className="">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Plugin Guide
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="w-full  text-left">
              <h4 className="text-xl text-[#475569] font-medium mb-7">
                Resources
              </h4>
              <ul className="  transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    FAQs
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Quick Start
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Documentation
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    User Guide
                  </a>
                </li>
                <li className="">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Plugin Guide
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="w-full text-left">
              <h4 className="text-xl text-[#475569] font-medium mb-7">Blogs</h4>
              <ul className="transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    News
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Tips &amp; Tricks
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    New Updates
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Events
                  </a>
                </li>
                <li className="">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Editorial
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="w-full text-left">
              <h4 className="text-xl text-[#475569] font-medium mb-7">
                Support
              </h4>
              <ul className="transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Customer Support
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Cookies
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    License
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col sm:justify-between sm:flex-row bg-[#101828] p-7 px-16">
        <span className="text-sm text-white">
          © 2077 Untitled UI. All rights reserved.
        </span>
        <div className="flex mt-6 space-x-6 sm:justify-center sm:mt-0 ">
          {footerIcons.map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt={item.alt}
              className="text-white cursor-pointer"
              width={22}
              height={22}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
