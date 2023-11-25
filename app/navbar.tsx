import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const TikTokIcon = ({ color = "#000000" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="h-5 w-5"
    >
      <path
        fill="currentColor"
        d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
      />
    </svg>
  );
};

const NavItem = ({ children, dropdown }) => {
  const isIcon =
    children.type && children.type.name && children.type.name.endsWith("Icon");

  return (
    <div className="relative overflow-hidden group">
      <div className="hover:text-[#E1C200] cursor-pointer transition duration-300 ease-in-out">
        {children}
        {!isIcon && dropdown && (
          <div className="absolute left-0 mt-2 bg-[#212122] text-white p-2 rounded-md hidden group-hover:block">
            {/* Dropdown Content */}
            {dropdown.map((item, index) => (
              <div key={index} className="py-1">
                {item}
              </div>
            ))}
          </div>
        )}
        {!isIcon && (
          <span className="absolute bg-[#E1C200] h-0.5 left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full font-extralight"></span>
        )}
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <div id="top-announcement" className="bg-[#E1C200] text-center uppercase">
        <h1 className="px-5 font-bold text-sm/6 text-gray-800 py-2">
          visit us on Tiktok <span className="font-medium">@</span>bravaland.com
        </h1>
      </div>

      <div
        id="navbar"
        className="bg-[#212122] text-white py-8 px-8 flex justify-between items-center lowercase  drop-shadow-2xl"
      >
        <div className="flex items-center space-x-4">
          <NavItem dropdown={["Brand Item 1", "Brand Item 2"]}>Brand <KeyboardArrowDownOutlinedIcon className="text-base"/></NavItem>
          <NavItem dropdown={["Shop Item 1", "Shop Item 2"]}>Shop <KeyboardArrowDownOutlinedIcon className="text-base"/></NavItem>
          <NavItem>Premium</NavItem>
          <NavItem>Giftcards</NavItem>
        </div>

        <div className="flex items-center space-x-4">
          <NavItem>Become an Affiliate</NavItem>
          <TwitterIcon className="hover:text-[#E1C200] cursor-pointer font-extralight"/>
          <NavItem>
            <TikTokIcon />
          </NavItem>
          <InstagramIcon className="hover:text-[#E1C200] cursor-pointer font-extralight"/>
          <PermIdentityOutlinedIcon className="hover:text-[#E1C200] cursor-pointer font-extralight"/>
          <SearchOutlinedIcon className="hover:text-[#E1C200] cursor-pointer font-extralight"/>
          <LocalMallOutlinedIcon className="hover:text-[#E1C200] cursor-pointer font-extralight"/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
