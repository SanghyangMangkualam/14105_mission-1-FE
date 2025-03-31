import React from "react";
import info from "../../../assets/images/icons/information-outline.svg";
import mute from "../../../assets/images/icons/volume_off.svg";

const ButtonContainer = (props) => {
  const { type } = props
    return (
        <div className="button-container flex gap-3 items-center text-xs max-w-full mt-[0.5em] lg:mt-[5em]">
            <button className="button-watch text-md text-white px-3 py-1 rounded-2xl bg-blue-900 lg:px-6 lg:py-2" type={type}>
              Mulai
            </button>
              <button className="button-info text-md text-white px-3 py-1 rounded-2xl bg-neutral-800 lg:px-6 lg:py-2 lg:rounded-4xl" type={type}>
                <div className="info-content inline-flex items-center">
                  <img className="filter invert max-w-[12px] max-h-[12px] mr-[0.5em]" id="info" src={info} alt="Info" />
                  Selengkapnya
                </div>
              </button>
              <p className="rated text-md text-neutral-400 px-1 py-1 border-1 border-neutral-400 rounded-xl lg:px-2 lg:py-2 lg:rounded-10xl">18+</p>
              <button className="mute ml-auto" type={type}>
                <img className="max-w-[24px] max-h-[24px] lg:max-w-[32px] lg:max-h-[32px]" src={mute} alt="mute" />
              </button>
        </div>
    );
};

export default ButtonContainer;