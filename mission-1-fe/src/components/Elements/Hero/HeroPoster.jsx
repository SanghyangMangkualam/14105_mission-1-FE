import React from "react";
import poster from "../../../assets/images/posters/poster-hero.png";

const HeroPoster = () => {
    return (
        <div className="hero-poster relative w-screen h-full">
            <img src={poster} alt="poster" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
    );
};

export default HeroPoster;