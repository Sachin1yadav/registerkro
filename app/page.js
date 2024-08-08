import Accordion from "./components/Accordion";
import Brand from "./components/Brand";
import BuildingLayout from "./components/BuildingLayout";
import ExpertLayout from "./components/ExpertLayout";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProcessCord from "./components/ProcessCord";
import Testimonial from "./components/Testimonial";
import "./globals.css";
export default function HomePage() {
  const items = [
    {
      title: "How can a virtual office benefit my business in India?",
      content:
        "Can I use a virtual office address for official correspondence and marketing materials?Can I use a virtual office address for official correspondence and marketing materials?Can I use a virtual office address for official correspondence and marketing materials?",
    },
    {
      title:
        "Can I legally register my business using a virtual office address in India?",
      content:
        "Can I use a virtual office address for official correspondence and marketing materials?Can I use a virtual office address for official correspondence and marketing materials?Can I use a virtual office address for official correspondence and marketing materials?",
    },
    {
      title:
        "How will I receive my business mail and packages with a virtual office?",
      content:
        "Can I use a virtual office address for official correspondence and marketing materials?Can I use a virtual office address for official correspondence and marketing materials?Can I use a virtual office address for official correspondence and marketing materials?",
    },
    {
      title:
        "Can I use a virtual office address for official correspondence and marketing materials?",
      content:
        "Can I use a virtual office address for official correspondence and marketing materials?Can I use a virtual office address for official correspondence and marketing materials?Can I use a virtual office address for official correspondence and marketing materials?",
    },
    ,
    {
      title:
        "Do virtual office services in India include call answering and forwarding?",
      content:
        "Do virtual office services in India include call answering and forwarding? Do virtual office services in India include call answering and forwarding? Do virtual office services in India include call answering and forwarding?",
    },
  ];
  return (
    <div className="w-full ">
      <div className="bg-[#23A6F0] font text-white py-[15px] w-full flex justify-center items-center md:text-[27px] text-[14px] px-[10px] lg:text-[27px] font-[500]">
        <p>
          Flash sale 20% <span className="font-[700]">Discount</span> for New
          Clients, use code <span className="font-[700]">“QUICK20”</span> at
          Checkout!
        </p>
      </div>

      <Hero />
      <ProcessCord />
      <BuildingLayout />
      <ExpertLayout />
      <Brand />
      <Testimonial />
      <Accordion items={items} />
      <Footer />
    </div>
  );
}
