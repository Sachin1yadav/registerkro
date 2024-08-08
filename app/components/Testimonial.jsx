"use client";
import Image from "next/image";
import React, { useState } from "react";

const SlideContent1 = () => (
  <div className="flex items-center gap-[30px] flex-col justify-center md:lg-[75%] m-auto w-[90%] lg:w-[75%] h-full rounded-lg p-4">
    <div>
      <p className="text-[#000000] text-[32px] font-[700]">
        Client Testimonial{" "}
      </p>
    </div>
    <div className="flex justify-between lg:flex-row md:flex-row flex-col items-center">
      <div className="lg:w-[40%] md:w-[40%]">
        <Image src="/br.png" width={300} height={300} alt="logo" />
      </div>
      <div className="lg:w-[60%] md:w-[60%] w-[90%] flex flex-col gap-[30px]">
        <p className="text-[16px] font-[400]">
          The LaunchWise team is very professional and 100% transparent. We
          would surely recommend them to everyone who wants to have a new
          business setup or those who already have a company. Their experts are
          thorough with all corners of business. They have surely earned us as
          their permanent client.
        </p>
        <p className="text-[16px] font-[600]">
           - Sunil Duggal, CEO, Dabur Healthcare
        </p>
      </div>
    </div>
  </div>
);

const SlideContent2 = () => (
  <div className="flex items-center gap-[30px] flex-col justify-center md:lg-[75%] m-auto w-[90%] lg:w-[75%] h-full rounded-lg p-4">
    <div>
      <p className="text-[#000000] text-[32px] font-[700]">
        Client Testimonial{" "}
      </p>
    </div>
    <div className="flex justify-between lg:flex-row md:flex-row flex-col items-center">
      <div className="lg:w-[40%] md:w-[40%]">
        <Image src="/br.png" width={300} height={300} alt="logo" />
      </div>
      <div className="lg:w-[60%] md:w-[60%] w-[90%] flex flex-col gap-[30px]">
        <p className="text-[16px] font-[400]">
          The LaunchWise team is very professional and 100% transparent. We
          would surely recommend them to everyone who wants to have a new
          business setup or those who already have a company. Their experts are
          thorough with all corners of business. They have surely earned us as
          their permanent client.
        </p>
        <p className="text-[16px] font-[600]">
           - Sunil Duggal, CEO, Dabur Healthcare
        </p>
      </div>
    </div>
  </div>
);

const components = [
  <SlideContent1 key="slide1" />,
  <SlideContent2 key="slide2" />,
  <SlideContent1 key="slide3" />,
  <SlideContent2 key="slide4" />,
  <SlideContent1 key="slide5" />,
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === components.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-[90%] m-auto my-[50px]">
      <div className="relative lg:h-[400px] md:h-[400px] h-[90vh] overflow-hidden rounded-lg">
        {components.map((Component, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {Component}
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {components.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-white"
            }`}
            aria-current={index === currentIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-gray-700 dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-gray-700 dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Testimonial;
