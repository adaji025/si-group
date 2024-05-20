import { Button } from "@mantine/core";
import SubsidiaryImage from "../../../assets/png/tatsuniyya.png";
import { useEffect } from "react";
import Aos from "aos";

const Tatsuniyya = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="app-width flex flex-col md:flex-row justify-between items-center gap-20 mt-20"
      data-aos="fade-up"
    >
      <div className="flex-1 order-2 md:order-1">
        <img src={SubsidiaryImage} alt="" />
      </div>
      <div className="flex-1 order-1 md:order-2">
        <h2 className="font-bold text-[32px] lg:text-[48px] lg:w-1/2">
          Tattsuniyya Network{" "}
        </h2>
        <div className="mt-3">
          The Tattsuniyya Network is a unique branch of the SI Group, reaching
          back into the rich history and vibrant culture that defines Africa.
          Here, we celebrate the stories that have shaped us, the folktales
          passed down through generations, and the social and cultural values
          that form the bedrock of our society.
        </div>
        <Button size="md" className="bg-black mt-5 hover:bg-black hover:scale-105 duration-300">
          Visit our website
        </Button>
      </div>
    </div>
  );
};

export default Tatsuniyya;
