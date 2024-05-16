import { Fragment } from "react/jsx-runtime";
import Navbar from "../../components/Navbar";
import Partners from "./components/Partners";
import About from "./components/About";
import WomenCommunity from "./components/WomenCommunity";
import Magazine from "./components/Magazine";
import BeyoundMentors from "./components/BeyoundMentors";
import Tatsuniyya from "./components/Tatsuniyya";
import BoardMembers from "./components/BoardMembers";
import BottomBanner from "./components/BottomBanner";
import Footer from "../../components/Footer";
import AOS from "aos";

import { useEffect } from "react";
import BMCCI from "./components/BMCCI";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="home-banner min-h-[70vh] md:min-h-screen flex items-center mt-[60px]">
        <div className="flex justify-start">
          <div
            className="max-w-[700px] px-5 lg:px-12 text-white z-10"
            data-aos="zoom-in"
          >
            <h2 className="font-bold text-[32px] md:text-[44px] lg:text-[64px] text-start">
              Advancing Humanity in Every Human
            </h2>
            <div className="mt-3 font-medium">
              The SI Group is a collective dedicated to fostering progress and
              unlocking the potential within every Nigerian. We believe in the
              power of information, community engagement, and cultural heritage
              to propel individuals and our nation forward.
            </div>
          </div>
        </div>
      </div>
      <Partners />
      <About />
      <BeyoundMentors />
      <div id="subsidiaries" className="mt-[70px]">
        <BMCCI />
        <WomenCommunity />
        <Magazine />
        <Tatsuniyya />
      </div>
      <div id="board" className="mt-44">
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#92CD0033]/20 px-2 py-3 rounded w-max text-xs text-[#2C6700] font-medium">
            Behind SI GROUP
          </div>
          <h2 className="font-bold text-[32px] lg:text-[48px]">
            Meet the Board
          </h2>
        </div>
        <BoardMembers />
      </div>
      <BottomBanner />
      <Footer />
    </Fragment>
  );
};

export default Home;
