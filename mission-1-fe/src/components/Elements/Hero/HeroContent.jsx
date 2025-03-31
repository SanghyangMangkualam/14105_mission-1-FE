import React from "react";
import ButtonContainer from "../Button/ButtonContainer.jsx";


const HeroContent = ({ title, synopsis }) => (
            <div className="absolute inset-0 z-0 block items-end justify-start max-w-md sm:max-w-[700px] lg:max-w-[1400px] mb-[4em] mt-[4em] mr-[10em] ml-[1em] lg:mb-[20em] lg:mt-[17em] lg:mr-[4em] lg:ml-[4em] sm:mb-[10em] sm:mt-[10em] sm:mr-[2em] sm:ml-[3em]">
                <div className="content z-10 text-white max-w-sm lg:max-w-2xl bottom-10">
                <h1 className="text-2xl md:text-6xl font-medium mb-[0.25em]">{title}</h1>
                <p className="text-xs font-light md:text-base">{synopsis}</p>
                </div>
                <ButtonContainer />
            </div>
);

export default HeroContent;