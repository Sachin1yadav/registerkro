import Image from "next/image";
import React from "react";

const ProcessCord = () => {
  return (
    <div className="flex w-[90%] gap-[30px] flex-col justify-center items-center m-auto">
      <div className="flex w-[90%] text-center flex-col gap-[20px] m-auto items-center">
        <p className="text-[#252B42] leading-tight text-[20px] lg:text-[28px] md:text-[28px]">
          Get Your Virtual Office Up and Running in{" "}
          <span className="font-[700] text-[26px] lg:text-[32px] md:text-[32px]">
            3 Easy Steps!
          </span>
        </p>
        <p className="text-[#2E2E2E] text-[16px] lg:text-[20px] md:text-[20px]">
          Procedure to obtain Virtual office address.
        </p>
      </div>
      <div className="relative flex lg:w-[75%] md:w-[75%] w-[90%] flex-col lg:flex-row md:flex-row justify-center items-center lg:gap-[50px] gap-[10px] md:gap-[50px] m-auto">
        <div className="flex flex-col w-[90%] lg:w-[80%] md:w-[80%] md:p-[20px] p-[10px] lg:p-[20px] gap-[20px] justify-center items-center relative">
          <div className="bg-custom-gradient rounded-tr-3xl rounded-br-3xl rounded-tl-3xl w-[100px] h-[100px] flex justify-center items-center">
            <Image
              src="/img11.png"
              width={50}
              height={50}
              alt="Step 1"
              className="m-auto"
            />
          </div>
          <p className="text-[#252B42] text-[16px] font-[700] text-center">
            Connect With
            <br /> RegisterKaro
          </p>
          <p className="text-[#737373] text-[14px] font-[500] text-center">
            Reach out to our friendly customer support team through chat, email,
            or phone. They&apos;ll guide you through the process.
          </p>
        </div>

        <div className="flex flex-col w-[90%] lg:w-[80%] md:w-[80%] md:p-[20px] p-[10px] lg:p-[20px] gap-[20px] justify-center items-center relative mt-[50px] lg:mt-0">
          <div className="bg-custom-gradient rounded-tr-3xl rounded-br-3xl rounded-tl-3xl w-[100px] h-[100px] flex justify-center items-center">
            <Image
              src="/img222.png"
              width={50}
              height={50}
              alt="Step 2"
              className="m-auto"
            />
          </div>
          <p className="text-[#252B42] text-[16px] font-[700] text-center">
            Connect With
            <br /> RegisterKaro
          </p>
          <p className="text-[#737373] text-[14px] font-[500] text-center">
            Reach out to our friendly customer support team through chat, email,
            or phone. They&apos;ll guide you through the process.
          </p>
        </div>

        <div className="flex flex-col w-[90%] lg:w-[80%] md:w-[80%] md:p-[20px] p-[10px] lg:p-[20px] gap-[20px] justify-center items-center relative mt-[50px] lg:mt-0">
          <div className="bg-custom-gradient rounded-tr-3xl rounded-br-3xl rounded-tl-3xl w-[100px] h-[100px] flex justify-center items-center">
            <Image
              src="/img33.png"
              width={50}
              height={50}
              alt="Step 3"
              className="m-auto"
            />
          </div>
          <p className="text-[#252B42] text-[16px] font-[700] text-center">
            Connect With
            <br /> RegisterKaro
          </p>
          <p className="text-[#737373] text-[14px] font-[500] text-center">
            Reach out to our friendly customer support team through chat, email,
            or phone. They&apos;ll guide you through the process.
          </p>
        </div>

        {/* Arrows */}
        <div className="absolute top-[30px]   left-[calc(16.5%+40px)]  transform -translate-y-1/2 hidden lg:block">
          <Image
            src="/ar.png"
            width={200}
            height={200}
            alt="Arrow"
            className="rotate-0"
          />
        </div>
        <div className="absolute top-[100px]    left-[calc(48.66%+80px)] transform -translate-y-1/2 hidden lg:block">
          <Image
            src="/ar2.png"
            width={200}
            height={200}
            alt="Arrow"
            className="rotate-0"
          />
        </div>
        {/* <div className="absolute top-[50px] border-2 border-green-400 left-1/2 transform -translate-x-1/2 lg:hidden">
          <Image
            src="/ar.png"
            width={180}
            height={180}
            alt="Arrow"
            className="rotate-90"
          />
        </div> */}
        {/* <div className="absolute  top-[30px]   left-1/2 transform -translate-x-1/2 lg:hidden mt-[50px]">
          <Image
            src="/ar2.png"
            width={180}
            height={180}
            alt="Arrow"
            className="rotate-90"
          />
        </div> */}
      </div>
    </div>
  );
};

export default ProcessCord;
