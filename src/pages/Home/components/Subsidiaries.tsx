import { Button } from "@mantine/core";
import SubsidiaryImage from "../../../assets/png/subsidiary.png";
import { useEffect } from "react";
import Aos from "aos";

const Subsidiaries = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="app-width flex flex-col md:flex-row justify-between items-center gap-20 mt-20"
      data-aos="fade-up"
    >
      <div className="flex-1">
        <div className="bg-[#92CD0033]/20 px-2 py-3 rounded w-max text-xs text-[#2C6700] font-medium">
          Our Subsidiaries
        </div>
        <h2 className="font-bold text-[32px] lg:text-[48px]">
          Beyond Mentors Community Care Initiatives (BMCCI)
        </h2>
        <div className="mt-3">
          A platform for implementing impactful CSR initiatives, focusing on
          solutions for social development challenges. We are devoted to the
          social, economic and educational development; counselling and
          mentoring of rural and urban communities in Northern Nigeria..
        </div>
        <Button size="md" className="bg-black mt-5 hover:bg-black hover:scale-105 duration-300">
          Visit our website
        </Button>
      </div>
      <div className="flex-1">
        <img src={SubsidiaryImage} alt="" />
      </div>
    </div>
  );
};

export default Subsidiaries;
