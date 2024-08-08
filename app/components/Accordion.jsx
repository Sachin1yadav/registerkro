"use client";

import React, { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className=" ">
    <button
      type="button"
      className="flex items-center justify-between w-full p-4 text-left bg-[#F2F5FE] dark:bg-white"
      onClick={onClick}
    >
      <span className="text-lg font-semibold">{title}</span>
      <svg
        className={`w-5 h-5 transform transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    {isOpen && <div className="p-4 bg-[#F2F5FE]  ">{content}</div>}
  </div>
);

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-[30px] m-auto justify-center items-center my-[100px] md:lg:w-[75%] w-[90%] lg:w-[75%]">
      <div className="w-[90%] flex flex-col justify-center items-center gap-[15px]">
        <p className="text-[#2962FF] text-[32px] font-[600]">
          Questions in mind?
        </p>
        <span className="text-[#303A42] text-[20px] font-[400]">
          Read our FAQ
        </span>
        <hr />
      </div>
      <div className="  flex flex-col gap-[30px]     rounded-lg w-[90%] m-auto  ">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
