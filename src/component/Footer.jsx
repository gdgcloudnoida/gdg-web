import React from "react";
import "../styles/footer.scss";
import logo from "../assets/logo.png";
import cxilogo from "../assets/cxi_logo.png";

function Footer() {
  return (
    <div
      className=" w-full flex justify-evenly items-center flex-col bg-transparent  pb-1"
      id="footer"
    >
      <div
        className="bg-transparent text-white flex flex-col items-center gap-10 text-container text-center p-10"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h1 className="text-3xl text-white bg-transparent">
          © {new Date().getFullYear()}{" "}
          <a
            href="hhttps://gdg.community.dev/gdg-cloud-noida/"
            className="underline bg-transparent text-blue-500"
          >
            CXI
          </a>
          , Cloud Catalyst - GDG Cloud Noida - Launch Event
        </h1>
        <pre>
        <h1 className="text-xl text-white bg-transparent">
          Designed by{" "}
          <a
            href="https://github.com/devcode8"
            className="underline bg-transparent"
          >
            Dev Chauhan 
          </a>
            . Edited by{" "}
          <a
            href="https://github.com/atul120212"
            className="underline bg-transparent"
          >
            Atul Sharma
          </a>
          
        </h1>
        </pre>
      </div>
    </div>
  );
}

export default Footer;
