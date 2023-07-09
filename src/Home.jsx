import React from "react";
import Header from "./component/Header";
import AboutUs from "./component/AboutUs";
import Faq from "./component/Faq";
import AOS from "aos";

import "aos/dist/aos.css";
import AboutGDG from "./component/AboutGDG";

function Home() {
  AOS.init();
  
  return (
    <div>
      <Header />
      <AboutGDG/>
      <AboutUs />
      <Faq/>
    </div>
  );
}

export default Home;
