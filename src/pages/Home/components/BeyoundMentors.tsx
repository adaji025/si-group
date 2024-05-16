import { Button } from "@mantine/core";
import SubsidiaryImage from "../../../assets/png/mentors.png";
import { useEffect } from "react";
import Aos from "aos";

const BeyoundMentors = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="app-width flex flex-col md:flex-row justify-between items-center gap-20 mt-20" data-aos="fade-up">
      <div className="flex-1 order-2 md:order-1">
        <img src={SubsidiaryImage} alt="" />
      </div>
      <div className="flex-1  order-1 md:order-2">
        <div className="bg-[#92CD0033]/20 px-4 py-3 rounded w-max text-xs text-[#2C6700] font-medium">
          Our Subsidiaries
        </div>
        <h2 className="font-bold text-[32px] lg:text-[48px] lg:w-2/3">
          Beyond Mentors Limited (BML)
        </h2>
        <div className="mt-3">
          BML is the engine room of human capital development within the SI
          Group. We recognize the transformative power of knowledge and skills
          in a world increasingly driven by technology. Our mission is to equip
          Nigerians with the tools they need to thrive in the 4th Industrial
          Revolution and beyond.
        </div>
          <Button size="md" className="bg-black mt-5 hover:bg-black hover:scale-105 duration-300">
          Visit our website
        </Button>
      </div>
    </div>
  );
};

export default BeyoundMentors;
