import ArrowRight from "../assets/svg/arrow-right.svg";
const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] py-20 text-white">
      <div className="app-width grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h4 className="font-bold">Subsidiaries</h4>
          <div className="grid gap-3 font-medium text-[#D0DAF5] mt-5">
            <div>BMCCI</div>
            <div>WCA</div>
            <div>SI Magazine</div>
            <div>BML</div>
            <div>Tattsuniyya Network</div>
          </div>
        </div>
        <div>
          <h4 className="font-bold">Explore</h4>
          <div className="grid gap-3 font-medium text-[#D0DAF5] mt-5">
            <div>Resources</div>
            <div>Blog</div>
            <div>Documents</div>
          </div>
        </div>
        <div>
          <h4 className="font-bold">Company</h4>
          <div className="grid gap-3 font-medium text-[#D0DAF5] mt-5">
            <div>About us</div>
            <div>Partners</div>
            <div>Contact us</div>
          </div>
        </div>
        <div className="bg-[#25449B0D]/5 p-5 -translate-y-[20px]">
          <h4 className="font-bold">Join Us</h4>
          <div className="flex mt-3">
            <input
              type="text"
              placeholder="Email address"
              className="w-full outline-none bg-[#0D0D0D] px-2 rounded-l-md text-[#D0DAF5] text-sm"
            />
            <div>
              <div className="flex justify-center items-center h-[50px] w-[50px] rounded-r-md bg-white">
                <img src={ArrowRight} alt="" />
              </div>
            </div>
          </div>
          <div className="mt-5 text-[#D0DAF5] text-sm">
            We are a collective of passionate individuals working in unison to
            make this vision a reality.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
