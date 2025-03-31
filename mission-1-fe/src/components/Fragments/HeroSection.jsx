import React from "react";
import HeroPoster from "../Elements/Hero/HeroPoster.jsx";
import HeroContent from "../Elements/Hero/HeroContent.jsx";

const HeroSection = () => {
    return (
        <>
            <section className="hero relative w-full mt-0 mb-4 lg:pt-0">
                <div className="relative">
                    <HeroPoster />
                    <HeroContent
                        title="Duty After School"
                        synopsis="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
                    />
                </div>
            </section>
        </>
    );
};

export default HeroSection;
