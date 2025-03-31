import React from "react";
import ArrowButtonLeft from "/src/components/Elements/Button/ArrowButtonLeft.jsx";
import ArrowButtonRight from "/src/components/Elements/Button/ArrowButtonRight.jsx";
import CardHorizontal from "/src/components/Elements/Card/CardHorizontal.jsx";


const ContinueWatching = () => {
    return(
        <section className="continue-watching flex flex-col max-w-md sm:max-w-[700px] lg:max-w-[1400px] mb-[3em] mt-[0.5em] mr-[10em] ml-[1em] lg:mb-[1em] lg:mt-[1em] lg:mr-[4em] lg:ml-[4em] sm:mb-[10em] sm:mt-[10em] sm:mr-[2em] sm:ml-[3em]">
          <h3 className="text-white justify-start font-medium lg:text-xl lg:mb-[1em] ml-0">Melanjutkan Tontonan Film</h3>
          <div className="cards-slider-1 inline-flex justify-between items-center overflow-x-auto gap-6">
            <ArrowButtonLeft />
            <div className="flex gap-6">
              <CardHorizontal title="Rio" rating="6.9/10" num="1"/>
              <CardHorizontal title="Run Into You" rating="8/10" num="2"/>
              <CardHorizontal title="Shazam! Fury of the Gods" rating="5.9/10" num="3"/>
              <CardHorizontal title="Avatar:The Way of Water" rating="7.5/10" num="4"/>
              <CardHorizontal title="Fast X" rating="5.7/10" num="5"/>
            </div>
            <ArrowButtonRight />
          </div>
        </section>
    );
}

export default ContinueWatching