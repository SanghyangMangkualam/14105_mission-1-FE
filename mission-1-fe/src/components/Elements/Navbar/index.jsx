import React from "react";
import Logo from "../../../assets/images/icons/Logo.svg";
import Avatar from "../../../assets/images/icons/avatar.svg";
import Dropdown from "../../../assets/images/icons/avatar_v.svg";
const Navbar = () => {
    return (
        <nav className="top-3 left-0 right-0 flex justify-between items-center w-full bg-transparent lg:top-4">
            <div className="flex items-center gap-2 w-lg">
                <div className="logo-navbar-responsive ml-5">
                    <img src={Logo} alt="logo" className="h-[44px] w-[103.55px]" />
                </div>
                <a className="text-sm no-underline text-stone-100 font-extralight hover:text-gray-300" href="#">Series</a>
                <a className="text-sm no-underline text-stone-100 font-extralight hover:text-gray-300" href="#">Film</a>
                <a className="text-sm no-underline text-stone-100 font-extralight hover:text-gray-300" href="#">Daftar Saya</a>
            </div>
            <div className="profile flex items-center justify-end w-[10px]">
                <div className="flex items-center justify-end w-full">
                    <div id="avatar" className="avatar h-[40px] w-[40px] pr-2 flex items-center">
                        <img src={Avatar} alt="avatar" className="align-middle" />
                        <div className="dropdown w-[14px] h-[9px] ml-2">
                            <img src={Dropdown} alt="dropdown" className="w-[14px] h-[10px]" />
                        </div>
                    </div>
                    <div className="dropdown w-[14px] h-[9px] mr-5">
                        <img src={Dropdown} alt="dropdown" className="w-[14px] h-[10px]" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;