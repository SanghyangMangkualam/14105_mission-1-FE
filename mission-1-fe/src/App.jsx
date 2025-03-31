import React from "react";
import Navbar from "./components/Elements/Navbar/index.jsx";
import HeroPoster from "./components/Elements/Hero/HeroPoster.jsx";
import HeroContent from "./components/Elements/Hero/HeroContent.jsx";

const App = () => {
    return (
      <>
        <Navbar />
        <section className="hero fixed top-[44px] w-full">
          <div className="relative ">
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

export default App;
