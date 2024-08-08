"use client";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full">
      <section
        className="relative bg-cover bg-center h-full text-white flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(/footer.png)` }}
      >
        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center mt-[100px] mb-[100px] w-[90%] m-auto gap-[30px]">
          <div className="bg-[#EFEFEF] text-black w-[330px] md:w-[480px] lg:w-[480px] py-[25px] gap-[20px] flex flex-col justify-center">
            <div className="flex gap-[15px] flex-col items-center w-[90%] m-auto justify-center">
              <p className="text-[#101828] text-[21px] font-[700]">
                Get in touch with us
              </p>
              <p className="text-[#667085] text-[14px] font-[400] text-left">
                Submit your Details to get an Instant{" "}
                <span className="text-[#E98D16] font-[600]">All-inclusive</span>{" "}
                Quote to your email and a{" "}
                <span className="text-[#E98D16] font-[600]">FREE</span> Expert
                consultation
              </p>
            </div>

            <div className="flex justify-center w-[90%] m-auto items-center">
              <form className="w-full max-w-lg md:max-w-md lg:max-w-sm flex flex-col gap-[10px] p-[10px] rounded-md">
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="name"
                    className="block mb-1 text-[14px] font-medium text-[#667085]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="border border-[#D0D5DD] text-[#667085] text-[12px] rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="mobile"
                    className="block mb-1 text-[14px] font-medium text-[#667085]"
                  >
                    Mobile
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="Mobile no."
                    className="border border-[#D0D5DD] text-[#667085] text-[12px] rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="email"
                    className="block mb-1 text-[14px] font-medium text-[#667085]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="border border-[#D0D5DD] text-[#667085] text-[12px] rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="city"
                    className="block mb-1 text-[14px] font-medium text-[#667085]"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="City Name"
                    className="border border-[#D0D5DD] text-[#667085] text-[12px] rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <button
                  type="submit"
                  className="text-white text-[14px] font-[700] bg-[#3424C2] hover:bg-[#3021b7] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Get a Detailed Quotation Now!
                </button>
              </form>
            </div>
          </div>

          <div className="text-black flex flex-col gap-[20px] md:w-[50%] w-[90%] p-[15px] lg:w-[50%] justify-center items-center py-[20px]">
            <Image src="/logob.png" alt="logo" width={100} height={100} />
           
            <p className="text-[24px] font-[600]">
              Feel free to connect with us
            </p>

            <div className="flex lg:flex-row md:flex-row flex-col gap-[20px] justify-center items-center">
              <div className="flex gap-[10px] justify-center items-center">
                <IoCallSharp />
                <p>+91 93112 21210</p>
              </div>
              <div className="flex gap-[10px] justify-center items-center">
                <IoMdMail />
                <p>virtualoffice@teamco.work</p>
              </div>
            </div>
            <div className="flex gap-[10px] justify-center items-start">
              <FaLocationArrow />
              <p>
                704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana, 122007
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-[30px] cursor-pointer">
                <FaFacebookF />
              </p>
              <p className="text-[30px] cursor-pointer">
                <FaInstagram />
              </p>
              <p className="text-[30px] cursor-pointer">
                <FaLinkedinIn />
              </p>
              <p className="text-[30px] cursor-pointer">
                <BsTwitterX />
              </p>
            </div>
          </div>

          <div className="lg:w-[450px] lg:h-[400px] md:w-[450px] md:h-[400px] flex flex-col justify-center">
            <div className="relative w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.790673643923!2d77.0783186742885!3d28.5159449893677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19f8c0d1cadf%3A0x501fd33ebe741a5c!2sRegisterKaro%20-%20Gurgaon!5e0!3m2!1sen!2sin!4v1723065473421!5m2!1sen!2sin"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#2B2F33] text-[#C2C2C2] px-[20px] py-[15px] w-[100%] flex justify-center items-center text-[15px] font-[700]">
        <p className=" m-auto">
          © 2024 - Safe Ledger Private Limited. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
