import React from "react";
import ArrowButtonLeft from "/src/components/Elements/Button/ArrowButtonLeft.jsx";
import ArrowButtonRight from "/src/components/Elements/Button/ArrowButtonRight.jsx";
import CardVertical from "/src/components/Elements/Card/CardVertical.jsx";


const NewPicks = () => {
    return(
        <section className="continue-watching flex flex-col max-w-md sm:max-w-[700px] lg:max-w-[1400px] mb-[3em] mt-[0.5em] mr-[10em] ml-[1em] lg:mb-[20em] lg:mt-[1em] lg:mr-[4em] lg:ml-[4em] sm:mb-[10em] sm:mt-[10em] sm:mr-[2em] sm:ml-[3em]">
          <h3 className="text-white justify-start font-medium lg:text-xl lg:mb-[1em] ml-0">Rilis Baru</h3>
          <div className="cards-slider-1 inline-flex justify-between items-center overflow-x-auto gap-6">
            <ArrowButtonLeft />
            <div className="flex overflow-x-auto gap-6 whitespace-nowrap">
              <CardVertical category="new" num="1"/>
              <CardVertical category="new" num="2"/>
              <CardVertical category="new" num="3"/>
              <CardVertical category="new" num="4"/>
              <CardVertical category="new" num="5"/>
              <CardVertical category="new" num="6"/>
            </div>
            <ArrowButtonRight />
          </div>
        </section>
    );
}

export default NewPicks