import React from "react";
import poster from "../../../assets/images/posters/poster-hero.png";

const HeroPoster = () => {
    return (
        <div className="relative">
            <div className="hero-poster relative">
            <img src={poster} alt="poster" className="w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        </div>
    );
};

export default HeroPoster;