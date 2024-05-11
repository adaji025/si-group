import { Button } from "@mantine/core";
import SubsidiaryImage from "../../../assets/png/magazines.png";

const Magazine = () => {
  return (
    <div className="app-width flex flex-col md:flex-row justify-between items-center gap-20 mt-20">
      <div className="flex-1">
        <div className="bg-[#92CD0033]/20 px-2 py-3 rounded w-max text-xs text-[#2C6700] font-medium">
          Our Subsidiaries
        </div>
        <h2 className="font-bold text-[32px] lg:text-[48px]">SI Magazine</h2>
        <div className="mt-3">
          At SI Magazine, our flagship publication, acts as a knowledge hub,
          offering thought-provoking content designed to empower and inspire
          millions across Nigeria and greater Africa. "Rewiring minds" with
          thought-provoking content that empowers and inspires 10 million
          Nigerians and greater Africa by 2028.
        </div>
        <Button size="md" className="bg-black mt-5">
          Visit our website
        </Button>
      </div>
      <div className="flex-1">
        <img src={SubsidiaryImage} alt="" />
      </div>
    </div>
  );
};

export default Magazine;
