import Image from "next/image";
import React from "react";

const Brand = () => {
  return (
    <div className="flex flex-col py-[50px]   md:w-[75%] w-[90%]  lg:w-[75%] m-auto gap-[30px]">
      <div className="flex justify-between w-[100%] m-auto flex-wrap lg:gap-[15px] md:gap-[15px] gap-[30px] items-center">
        <Image src="/brand1.png" width={150} height={40} alt="logo" />
        <Image src="/brand2.png" width={150} height={40} alt="logo" />
        <Image src="/brand3.png" width={150} height={40} alt="logo" />
        <Image src="/brand4.png" width={150} height={40} alt="logo" />
        <Image src="/brand5.png" width={150} height={40} alt="logo" />
        <Image src="/brand6.png" width={150} height={40} alt="logo" />
      </div>
      <div className=" bg-custom-gradient   flex-col gap-[30px] lg:flex-row md:flex-row items-center m-auto w-[100%] py-[20px] px-[25px] flex  justify-evenly">
        <div className="md:w-[40%]  w-[90%] lg:w-[40%]">
          <p className="text-[24px] font-[700] text-[white]">
            Subscribe For Latest Newsletter
          </p>
        </div>

        <div className="lg:w-[450px]  md:w-[450px] w-[100%]  lg:gap-0 md:gap-0 gap-[15px]  flex flex-col lg:flex-row md:flex-row">
          <input
            type="emai"
            placeholder="Your Email"
            className="lg:w-[350px] w-[100%] md:w-[350px] rounded-[5px] lg:rounded-[0] md:rounded-[0] h-[50px] p-[20px]  text-[14px] md:rounded-l-[5px] lg:rounded-l-[5px]"
          />
          <button className="p-[15px] hidden lg:flex md:flex w-[100px] items-end h-[50px] bg-[#3C4647] text-[#FFFFFF] lg:rounded-[0] md:rounded-[0]  rounded-[5px] lg:rounded-r-[5px]  md:rounded-r-[5px] text-[14px] font-[400]">
            Subscribe
          </button>
        </div>
        <div className="w-full mt-[-10px]   lg:hidden md:hidden flex justify-end items-center">
          <button className="p-[15px] text-end w-[100px] lg:hidden md:hidden flex items-end h-[50px] bg-[#3C4647] text-[#FFFFFF] rounded-[5px] lg:rounded-r-[5px]  md:rounded-r-[5px] text-[14px] font-[400]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Brand;
