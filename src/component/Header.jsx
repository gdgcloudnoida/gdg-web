import React from "react";

import "../styles/header.scss";


// import figma from "../assets/figma-logo.png";
// import html from "../assets/html-logo.png";
// import css from "../assets/css-logo.png";
// import js from "../assets/javascript-logo.png";
// import image from "../assets/header-img.png";
import logo from "../assets/2.png";


function Header() {
  return (
    <div className="flex justify-center items-center text-white" id="header">
      {/* <div className="gradient"></div> */}
      <div className="header-container relative flex justify-center items-center flex-wrap">
        <div
          className="header-text bg-transparent uppercase flex items-center justify-center flex-col gap-3"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={logo} alt="" className="w-[200px]" />
          <h1 className="frontend-text bg-transparent text-gray-700">GDG Cloud Noida </h1>
          
        </div>
      </div>
      <div class="arrow">
        <span></span>
        <span></span>
        <span></span>
    </div>
    </div>
  );
}

export default Header;
