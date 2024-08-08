import Image from "next/image";
import React from "react";

const ExpertLayout = () => {
  return (
    <div className="flex w-[75%] m-auto gap-[30px] py-[50px]  justify-between items-center">
      <div className="lg:flex hidden  md:flex     flex-col md:gap-[40px] lg:gap-[40px] w-[50%] justify-center items-start text-start">
        <div className="flex gap-[20px]  items-start">
          <Image src="/call.png" width={50} height={50} alt="logo" />

          <p className="text-[#252B42] leading-tight text-[26px]">
            <span className="font-[600]  ">Expert Guidance:</span> Consultation
            and Company Formation
          </p>
        </div>
        <p className="text-[#252B42] text-[20px] font-[500]">
          Book a free CONSULTATION with our CA/CS and company formation expert.
        </p>
        <button className="  md:flex lg:w-[320px] md:w-[320px] w-[280px] font-[700] space-x-1 text-white bg-[#FFA229] hover:bg-[#f49a26] rounded-[5px] cursor-pointer px-[25px] py-[15px] justify-center items-center gap-[10px]">
          Talk to an Expert
        </button>
      </div>
      <div className="  md:-w-[45%] w-[90%] m-auto lg:w-[45%]  rounded-t-2xl">
        <Image
          src="/pr.png"
          width={400}
          height={350}
          alt="logo"
          className="rounded-t-3xl  "
        />
        <div className="p-[20px] hidden lg:block md:block  w-[400px] bg-[#252B42]">
          <p className="text-[#FFFFFF]     text-[32px] m-auto text-center font-[600]">
            Need our help ?
          </p>
        </div>
        <div className="p-[20px] md:hidden lg:hidden   flex flex-col gap-[10px] justify-center items-center  w-full bg-[#252B42]">
          <p className="text-white  text-center text-[15px] font-[400]">
            Book a free CONSULTATION with our CA/CS and company formation
            expert.
          </p>
          <button className="   lg:w-[320px]   md:w-[320px] w-[200px] font-[700] space-x-1 text-white bg-[#FFA229] hover:bg-[#f49a26] rounded-[8px] cursor-pointer px-[20px] py-[10px] justify-center items-center gap-[10px]">
            Talk to an Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertLayout;
