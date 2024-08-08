import Image from "next/image";
import React from "react";

const Downloadsection = () => {
  return (
    <div className="w-full">
      <div className="py-[30px]  md:hidden lg:hidden flex pl-[30px] w-[100%] justify-between     ">
        <p className="gradient-text text-[24px] font-[700]">Benefits</p>
        <div className="bg-[#FF7704] flex justify-center items-center text-[#FFFFFF] w-[90px] h-[30px] text-[10px]">
          New reviews{" "}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center w-full items-center gap-[20px]   lg:mt-[-100px] lg:z-10">
        {/* Card 1 */}
        <div
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          className="relative cursor-pointer   bg-[#FFFFFF] hover:bg-[#23A6F0] hover:text-white rounded-[20px] w-[330px] h-[220px] p-[30px] flex flex-col gap-[10px] justify-center items-start transition-all duration-300 ease-in-out group"
        >
          <Image
            className="group-hover:filter group-hover:brightness-0 group-hover:invert"
            src="/Vector.png"
            width={50}
            height={50}
            alt="logo"
          />
          <p className="text-[#252B42] font-[700] text-[24px] group-hover:text-white">
            Unleash Flexibility
          </p>
          <p className="text-[#737373] font-[500] text-[14px] group-hover:text-white">
            Work from anywhere in India with a prestigious virtual address.
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          className="relative cursor-pointer   bg-[#FFFFFF] hover:bg-[#23A6F0] hover:text-white rounded-[20px] w-[330px] h-[220px] p-[30px] flex flex-col gap-[10px] justify-center items-start transition-all duration-300 ease-in-out group"
        >
          <Image
            className="group-hover:filter group-hover:brightness-0 group-hover:invert"
            src="/Vector.png"
            width={50}
            height={50}
            alt="logo"
          />
          <p className="text-[#252B42] font-[700] text-[24px] group-hover:text-white">
            Unleash Flexibility
          </p>
          <p className="text-[#737373] font-[500] text-[14px] group-hover:text-white">
            Work from anywhere in India with a prestigious virtual address.
          </p>
        </div>

        {/* Card 3 */}
        <div
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          className="relative cursor-pointer   bg-[#FFFFFF] hover:bg-[#23A6F0] hover:text-white rounded-[20px] w-[330px] h-[220px] p-[30px] flex flex-col gap-[10px] justify-center items-start transition-all duration-300 ease-in-out group"
        >
          <Image
            className="group-hover:filter group-hover:brightness-0 group-hover:invert"
            src="/Vector.png"
            width={50}
            height={50}
            alt="logo"
          />
          <p className="text-[#252B42] font-[700] text-[24px] group-hover:text-white">
            Unleash Flexibility
          </p>
          <p className="text-[#737373] font-[500] text-[14px] group-hover:text-white">
            Work from anywhere in India with a prestigious virtual address.
          </p>
        </div>
      </div>
      {/* ......................... */}
      <div className="flex flex-col md:flex-row mt-[100px] justify-between items-center  md:w-[75%] w-[90%] lg:w-[75%] py-[20px] m-auto  ">
        <div className="w-full md:w-[50%]   flex flex-col gap-[20px] border-green-400 text-center md:text-left">
          <p className="text-[#1C4670] md:text-[48px] lg:text-[48pxpx]  text-[30.22px] font-[800] leading-tight">
            FREE DOWNLOAD:
          </p>
          <p className="text-[#1C4670] md:text-[32px] lg:text-[32px]  text-[24px] font-[700] leading-tight">
            The Ultimate Checklist For Virtual Office 2024
          </p>
          <p className="text-[#1C4670]  md:text-[24px] lg:text-[24px]  text-[15px] font-[400] leading-6">
            Discover the step-by-step procedures and essential considerations
            you need to know before setting up a Virtual Office in India.
          </p>
          <button className="hidden md:flex w-[400px] font-[700] space-x-1 text-white bg-[#FFA229] hover:bg-[#f49a26] rounded-[5px] cursor-pointer px-[25px] py-[15px] justify-center items-center gap-[10px]">
            Send Me The Checklist
          </button>
        </div>
        <div className="w-full flex justify-center items-center flex-col py-[20px] md:w-[30%] md:mr-[80px]   border-blue-400">
          <Image
            src="/book.png"
            width={196}
            height={267}
            alt="logo"
            className="md:hidden"
          />
          <Image
            src="/book.png"
            width={350}
            height={470}
            alt="logo"
            className="hidden md:block"
          />{" "}
          <div className="flex flex-col md:hidden w-[90%] justify-center items-center">
            <div className="flex w-full justify-between items-center ">
              <Image src="/Google.png" width={40} height={40} alt="logo" />
              <div className="flex justify-between items-center gap-[10px] ">
                <Image src="/Union.png" width={20} height={20} alt="logo" />

                <p className="text-[16px] text-[#252525]">
                  4.7/5 | 15.7K+ Happy Reviews
                </p>
              </div>
            </div>
            <button className=" w-full font-[700] space-x-1 text-white bg-[#FFA229] hover:bg-[#f49a26] rounded-[8px] cursor-pointer px-[25px] py-[15px]   gap-[10px] mt-4 mx-auto">
              Send Me The Checklist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloadsection;
