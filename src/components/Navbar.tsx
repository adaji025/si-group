import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styles from "./Navbar.module.css";

const navMenuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About us",
    url: "#about",
  },
  {
    title: "Our Subsidiaries",
    url: "/Become-a-tutor",
  },
  {
    title: "The Board",
    url: "/contact-us",
  },
  {
    title: "Contact Us",
    url: "/learn-more",
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const router = useLocation();
  const navigate = useNavigate();

  return (
    <div className="z-[999] bg-[#121212] text-white  w-full fixed top-0 bg-primary">
      <nav className={`px-5 lg:px-12 max-w-[1440px] ${styles.navbarItems}`}>
        <div className="text-2xl font-bold">Logo</div>
        <div
          className={`cursor-pointer pr-2 ${styles.menuIcon}`}
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <AiOutlineClose size={25} color="white" />
          ) : (
            <AiOutlineMenu size={25} color="white" />
          )}
        </div>
        <div
          className={` ${
            menu ? styles.nav_menu + " " + styles.active : styles.nav_menu
          }`}
        >
          {navMenuItems.map((menu, idx) => (
            <div
              key={idx}
              className={`flex gap-2 items-center relative font-semibold border-b-4 border-transparent text-base md:text-lg cursor-pointer hover:border-pink hover:lg:text-primary-green-50 hover:lg:border-primary-green-50   transition- duration-200 ${
                router.pathname === menu.url
                  ? "lg:border-pink lg:text-primary-green-50"
                  : ""
              } `}
              onClick={() => {
                navigate(menu.url);
                setMenu(false);
              }}
            >
              {menu.title}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
