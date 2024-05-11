import { Button } from "@mantine/core";
import SubsidiaryImage from "../../../assets/png/wc.png";

const WomenCommunity = () => {
  return (
    <div className="app-width flex flex-col md:flex-row justify-between items-center gap-20 mt-20">
      <div className="flex-1 order-2 md:order-1">
        <img src={SubsidiaryImage} alt="" />
      </div>
      <div className="flex-1  order-1 md:order-2">
        <div className="bg-[#92CD0033]/20 px-2 py-3 rounded w-max text-xs text-[#2C6700] font-medium">
          Our Subsidiaries
        </div>
        <h2 className="font-bold text-[32px] lg:text-[48px]">
          Women Community in Africa (WCA)
        </h2>
        <div className="mt-3">
          Women Community in Africa (WCA) is the advocacy arm of Beyond Mentors
          Community Care Initiatives, and a coalition of NGOs and CSOs which was
          established to identify, amplify, and address issues which inhibits
          and affect the sustainable development of the African women and
          children. Championing the needs of women, youth, and girls.
        </div>
        <Button size="md" className="bg-black mt-5">
          Visit our website
        </Button>
      </div>
    </div>
  );
};

export default WomenCommunity;
