import { Accordion, Button } from "@mantine/core";
import Ellipse1 from "../../../assets/svg/ellipse.svg";
import Ellipse2 from "../../../assets/svg/ellipse-2.svg";
import { useEffect } from "react";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const groceries = [
    {
      emoji: Ellipse1,
      value: "Informing and Inspiring:",
      description:
        "SI Magazine, our flagship publication, acts as a knowledge hub, offering thought-provoking content designed to empower and inspire millions across Nigeria and greater Africa",
    },
    {
      emoji: Ellipse2,
      value: "Driving Social Impact",
      description:
        "SI Magazine, our flagship publication, acts as a knowledge hub, offering thought-provoking content designed to empower and inspire millions across Nigeria and greater Africa",
    },
    {
      emoji: Ellipse2,
      value: "Empowering Women and Youth",
      description:
        "SI Magazine, our flagship publication, acts as a knowledge hub, offering thought-provoking content designed to empower and inspire millions across Nigeria and greater Africa",
    },
    {
      emoji: Ellipse2,
      value: "Celebrating Heritage",
      description:
        "SI Magazine, our flagship publication, acts as a knowledge hub, offering thought-provoking content designed to empower and inspire millions across Nigeria and greater Africa",
    },
  ];
  return (
    <div id="about" className="bg-[#F7F8FA] py-20" data-aos="fade-up mt-[70px]">
      <div className="app-width flex flex-col md:flex-row justify-between items-center gap-20">
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
        <div className="flex-1 w-full">
          <Accordion defaultValue="Informing and Inspiring:" className="w-full">
            {groceries.map((item) => (
              <Accordion.Item
                key={item.value}
                value={item.value}
                className="bg-white rounded-md mb-2 w-full"
              >
                <Accordion.Control>
                  <div className="flex items-center gap-2">
                    <img src={item.emoji} alt="" />
                    
                    {item.value}
                  </div>
                </Accordion.Control>
                <Accordion.Panel>{item.description}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default About;
