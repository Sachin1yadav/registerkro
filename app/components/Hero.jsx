import Head from "next/head";
import Downloadsection from "./Downloadsection";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Get Your Instant Virtual Office | Expert Guidance</title>
        <meta
          name="description"
          content="Work from anywhere and grow everywhere with our instant virtual office solutions. Get in touch for a free consultation and all-inclusive quote."
        />
        <meta
          name="keywords"
          content="virtual office, remote work, office solutions, business consultation, expert guidance"
        />
        <meta
          property="og:title"
          content="Get Your Instant Virtual Office | Expert Guidance"
        />
        <meta
          property="og:description"
          content="Work from anywhere and grow everywhere with our instant virtual office solutions. Get in touch for a free consultation and all-inclusive quote."
        />
        <meta property="og:image" content="/path-to-your-social-image.png" />
        <meta
          property="og:url"
          content="https://www.yourwebsite.com/your-page"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Get Your Instant Virtual Office | Expert Guidance"
        />
        <meta
          name="twitter:description"
          content="Work from anywhere and grow everywhere with our instant virtual office solutions. Get in touch for a free consultation and all-inclusive quote."
        />
        <meta name="twitter:image" content="/path-to-your-social-image.png" />
      </Head>
      <section
        className="relative bg-cover bg-center h-full text-white flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(/background.png)` }}
      >
        <Header />
        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center mt-[50px] mb-[200px] w-[90%] m-auto gap-[20px]">
          <div className="md:w-[50%] w-[90%] lg:w-[50%] py-[20px]">
            <h1 className="lg:text-[48px] text-[24px] md:text-[48px] text-center lg:text-start md:text-start font-[800]">
              Work From Anywhere, Grow Everywhere.
              <br /> Get Your Instant Virtual Office
            </h1>
          </div>
          <div className="bg-[#FFFFFF] text-black w-[330px] md:w-[480px] lg:w-[480px] py-[25px] gap-[20px] flex flex-col justify-center">
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
                    className="block mb-1 text-[14px] font-medium text-[#667085] dark:text-white"
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
                    className="block mb-1 text-[14px] font-medium text-[#667085] dark:text-white"
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
                    className="block mb-1 text-[14px] font-medium text-[#667085] dark:text-white"
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
                    className="block mb-1 text-[14px] font-medium text-[#667085] dark:text-white"
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
        </div>
      </section>
      <Downloadsection />
    </div>
  );
};

export default Hero;
