import Slider from "react-slick";
import Bodoo from "../../../assets/svg/partners/bodoo.svg";
import Nestle from "../../../assets/svg/partners/nestle.svg";
import Qonto from "../../../assets/svg/partners/qonto.svg";
import S_Conn from "../../../assets/svg/partners/s-conn.svg";
import WWF from "../../../assets/svg/partners/wwf.svg";
import Vinci from "../../../assets/svg/partners/vinci.svg";
import Electra from "../../../assets/svg/partners/electra.svg";

const Partners = () => {
  const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="overflow-hidden py-10">
      <div className="mb-5 text-center font-medium text-lg">Our Esteemed Partners</div>
      <Slider {...settings}>
        <div>
          <img src={Bodoo} alt="logo" />
        </div>
        <div>
          <img src={Nestle} alt="logo" />
        </div>
        <div>
          <img src={Qonto} alt="logo" />
        </div>
        <div>
          <img src={S_Conn} alt="logo" />
        </div>
        <div>
          <img src={WWF} alt="logo" />
        </div>
        <div>
          <img src={Vinci} alt="logo" />
        </div>
        <div>
          <img src={Electra} alt="logo" />
        </div>
      </Slider>
    </div>
  );
};

export default Partners;
