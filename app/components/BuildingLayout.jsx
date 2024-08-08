import Image from "next/image";
import React from "react";

const BuildingLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row md:w-lg-[75%] w-[90%] lg:w-[75%] py-[50px] justify-between items-center m-auto gap-[50px]">
      <div className="md:w-[50%] w-[90%] lg:w-[50%]">
        <Image
          src="/buld.png"
          width={450}
          height={450}
          alt="Building Logo"
          quality={100}
          layout="responsive"
        />
      </div>
      <div className="flex flex-col gap-[30px] p-[10px] md:w-[50%] w-[90%] lg:w-[50%]">
        <div className="flex flex-col w-[100%] gap-[10px]">
          <p className="text-[#000000DE] text-[24px] font-[700]">
            Accessible. Affordable. Adaptable
          </p>
          <p className="text-[#000000DE] text-[13px] font-[400] leading-tight">
            Whether you&apos;re an established enterprise or a scaling startup,
            your Virtual office should drive your business forward. Our virtual
            office solutions take your business places! (Accessible. Affordable.
            Adaptable)
          </p>
        </div>
        <div className="flex items-start w-[100%] gap-[30px]">
          <div className="w-[90%]">
            <div className="flex items-start flex-col gap-[10px]">
              <div className="flex items-center justify-start text-left">
                <Image
                  src="/sine.png"
                  width={50}
                  height={50}
                  alt="logo"
                  className="m-auto items-start"
                />
              </div>
              <p className="text-[#000000DE] text-[20px] font-[500]">
                Professional Image & Enhanced Credibility
              </p>
              <p className="text-[#6B6B6BDE] text-[12px] font-[400] leading-tight">
                Elevate your company&apos;s image and attract top talent with a
                professional virtual address for websites, business cards, and
                marketing materials.
              </p>
            </div>
          </div>
          <div className="w-[90%]">
            <div className="flex flex-col items-start gap-[10px]">
              <div className="flex items-center justify-start text-left">
                <Image
                  src="/sine.png"
                  width={50}
                  height={50}
                  alt="logo"
                  className="m-auto items-start"
                />
              </div>
              <p className="text-[#000000DE] text-[20px] font-[500]">
                Unmatched Work Flexibility
              </p>
              <p className="text-[#6B6B6BDE] text-[12px] font-[400] leading-tight">
                Improve work-life balance by eliminating commutes and allowing
                flexible schedules.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-[100%] gap-[30px]">
          <div className="w-[90%]">
            <div className="flex flex-col items-start gap-[10px]">
              <div className="flex items-center justify-start text-left">
                <Image
                  src="/sine.png"
                  width={50}
                  height={50}
                  alt="logo"
                  className="m-auto items-start"
                />
              </div>
              <p className="text-[#000000DE] text-[20px] font-[500]">
                Streamlined Business Operations
              </p>
              <p className="text-[#6B6B6BDE] text-[12px] font-[400] leading-tight">
                Access essential services like virtual assistants, answering
                services, and teleconferencing – all under one roof.
              </p>
            </div>
          </div>
          <div className="w-[90%]">
            <div className="flex items-start flex-col gap-[10px]">
              <div className="flex items-center justify-start text-left">
                <Image
                  src="/sine.png"
                  width={50}
                  height={50}
                  alt="logo"
                  className="m-auto items-start"
                />
              </div>
              <p className="text-[#000000DE] text-[20px] font-[500]">
                Scalable & Cost-Effective Solution
              </p>
              <p className="text-[#6B6B6BDE] text-[12px] font-[400] leading-tight">
                Choose a virtual office plan that fits your needs and budget,
                with options for various locations and service levels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingLayout;
