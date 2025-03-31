import React from "react";
import ArrowRight from "../../../assets/images/icons/arrow-right.svg";

const ArrowButtonRight = () => {
    return (
        <button className="ml-auto border-1 border-gray-400 bg-zinc-700 rounded-4xl z-3" id="left-1" type="button">
            <img className="filter invert w-[30px] h-[30px]" src={ArrowRight} alt="right" />
        </button>
    );
};

export default ArrowButtonRight;
