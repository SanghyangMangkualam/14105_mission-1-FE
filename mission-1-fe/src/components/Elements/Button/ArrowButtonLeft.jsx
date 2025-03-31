import React from "react";
import ArrowLeft from "../../../assets/images/icons/arrow-left.svg";
const ArrowButtonLeft = () => {
    return (
        <button className="ml-auto border-1 border-gray-400 bg-zinc-700 rounded-4xl z-3" id="right-1" type="button">
            <img className="filter invert w-[30px] h-[30px]" src={ArrowLeft} alt="left" />
        </button>
    );
};

export default ArrowButtonLeft;
