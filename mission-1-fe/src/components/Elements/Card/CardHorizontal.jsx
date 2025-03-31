import React from "react";
import star from "../../../assets/images/icons/star.svg";

const CardHorizontal = ({ title, rating, num }) => {
  const posterPath = `/src/assets/images/posters/continue-watching/poster-h-${num}.png`;

  return (
    <div className="relative rounded-[8px] w-[302px] h-[162px] lg:w-full lg:h-auto lg:max-w-[270px] sm:w-[250px] sm:h-[135px]">
      <img src={posterPath} className="w-full h-full object-cover rounded-lg lg:rounded-md sm:rounded-md" />
      <div className="absolute inset-x-0 bottom-0 py-2 px-3 flex justify-between items-end z-10 lg:px-4 sm:px-2">
        <h6 className="text-white text-[18px] font-bold z-10 lg:text-base sm:text-sm">{title}</h6>
        <div className="flex items-center text-white text-[14px] z-10 lg:text-xs sm:text-[10px]">
          <img id="star" src={star} alt="star" className="w-[16px] h-[16px] lg:w-[10px] lg:h-[10px] sm:w-[8px] sm:h-[8px]" />
          {rating}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black opacity-80 to-transparent z-0 lg:rounded-lg sm:rounded-md"></div>
    </div>
  );
};

export default CardHorizontal;

