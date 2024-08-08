"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="md:py-[30px] py-[15px] lg:py-[30px] lg:bg-transparent bg-white top-0 left-0 w-full flex justify-between items-center z-50">
      <nav className="flex justify-between items-center w-[90%] m-auto">
        <div>
          <Link href="/" className="text-black lg:text-white">
            <Image
              src="/logob.png" // Use black logo for mobile
              width={80}
              height={80}
              alt="logo"
              className="block lg:hidden"
            />
            <Image
              src="/logo.png" // Use white logo for desktop
              width={100}
              height={90}
              alt="logo"
              className="hidden lg:block"
            />
          </Link>
        </div>
        <div className="relative lg:hidden">
          <div
            className="flex font-[700] space-x-1 text-black rounded-[5px] cursor-pointer px-[25px] py-[10px] justify-center items-center gap-[10px]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <p className="text-[20px] m-auto">
              <RiMenu3Line />
            </p>
          </div>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md py-2">
              <Link
                href="/option1"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Option 1
              </Link>
              <Link
                href="/option2"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Option 2
              </Link>
              <Link
                href="/option3"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Option 3
              </Link>
            </div>
          )}
        </div>
        <div className="hidden lg:flex">
          <div className="flex font-[700] space-x-1 text-white bg-[#23A6F0] rounded-[5px] cursor-pointer px-[25px] py-[10px] justify-center items-center gap-[10px]">
            <p>Explore</p>
            <p className="text-[14px] m-auto">
              <FaArrowRightLong />
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
