import React from "react";
import Logo from "../../../assets/images/icons/Logo.svg";
import Avatar from "../../../assets/images/icons/avatar.svg";
import Dropdown from "../../../assets/images/icons/avatar_v.svg";
const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 flex justify-between items-center max-h-[94px] w-full bg-gray-900">
            <div className="logo-navbar-responsive ml-5">
                <img src={Logo} alt="logo" className="h-[44px] w-[103.55px]" />
            </div>
            <div className="links flex items-center space-x-8 my-[34.5px]">
                <a className="no-underline text-white hover:text-gray-300" href="#">Series</a>
                <a className="no-underline text-white hover:text-gray-300" href="#">Film</a>
                <a className="no-underline text-white hover:text-gray-300" href="#">Daftar Saya</a>
            </div>
            <div className="profile flex items-center mr-5">
                <div id="avatar" className="h-[40px] w-[40px]">
                    <img src={Avatar} alt="avatar" className="align-middle" />
                </div>
                <div className="drop-down-toggle w-[14px] h-[9px] pl-[15px]">
                    <img src={Dropdown} alt="dropdown" className="w-[14px] h-[9px]" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;