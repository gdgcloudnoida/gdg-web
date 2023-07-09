import React from "react";
import Dev from "../assets/Dev.png";
import swati from "../assets/swati.jpg";
import arifa from "../assets/arifa.jpg";
import javed from "../assets/javed.jpg";
import zaid from "../assets/zaid.jpg";
import shekhar from "../assets/shekhar.jpg";
import gautam from "../assets/Gautam.jpeg";
import ashu from "../assets/ashu.jpg";
import harshit from "../assets/harshit.jpg";
import vishesh from "../assets/vishesh.jpg";
import sponser1 from "../assets/jetbran.png";

import aniketa from "../assets/aniketa.jpg";
import ashish from "../assets/Ashish.jpg";
import atul from "../assets/atul.jpg";
import shushilSir from "../assets/shushil-sir.jpeg";
import pushkarSir from "../assets/pushkar-sir.jpeg";
import pulkitaMam from "../assets/pulkita-mam.jpeg";
import CoordinatorCard from "./CoordinatorCard";
import FacultyCoordinatorCard from "./FacultyCoordinatorCard";
import "../styles/aboutus.scss";

function AboutUs() {
  const data = [
    {
      image: zaid,
      name: "MOHD ZAID KHAN",
      team: "Management Team",
      link: "https://www.linkedin.com/in/zeddkhan03/"
    },
    {
      image: zaid,
      name: "MOHD ZAID KHAN",
      team: "Management Team",
      link: "https://www.linkedin.com/in/zeddkhan03/"
    },
    {
      image: zaid,
      name: "MOHD ZAID KHAN",
      team: "Management Team",
      link: "https://www.linkedin.com/in/zeddkhan03/"
    },
    {
      image: zaid,
      name: "MOHD ZAID KHAN",
      team: "Management Team",
      link: "https://www.linkedin.com/in/zeddkhan03/"
    },
  ];
  return (
    <div
      className="flex items-center justify-center min-h-screen flex-col gap-10 py-[50px]"
      id="About-us"
    >
      
      <div className="bg-transparent w-full flex justify-center items-center flex-col gap-10 py-[20px]">
        <h1
          className="text-3xl text-white bg-transparent w-full text-center z-10 uppercase"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Event Organizers
        </h1>
        <div className="flex justify-center items-center bg-transparent flex-wrap gap-10">
          <FacultyCoordinatorCard
            name="Pushkar Sharan"
            position="Publicis Sapient, Senior Manager, Cloud COE
            NOIDA"
            img={pushkarSir}
            delay="0.5s"
          />
          <FacultyCoordinatorCard
            name="Sushil Kumar"
            position="Wayfair, Staff Software Engineer NOIDA"
            img={shushilSir}
            delay="1.25s"
          />
          <FacultyCoordinatorCard
            name="Pulkita Marwah"
            position="Searce, Cloud Consultant
            GURGAON"
            img={pulkitaMam}
            delay="1.5s"
          />
        </div>
      </div>
      <div className="bg-transparent w-full flex justify-center items-center flex-col gap-10 py-[20px]">
        <h1
          className="text-3xl text-white bg-transparent w-full text-center z-10 uppercase"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Meet our Team
        </h1>

        <div className="flex justify-center items-center bg-transparent flex-wrap gap-10">
          {data.map(data=>{
            return(
              <CoordinatorCard
            name={data.name}
            branch={data.team}
            year=""
            img={data.image}
            linkedin={data.link}
            delay="0s"
          />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
