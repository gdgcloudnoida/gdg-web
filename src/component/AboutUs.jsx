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
  return (
    <div
      className="flex items-center justify-center min-h-screen flex-col gap-10 py-[50px]"
      id="About-us"
    >
      <h1
        className="text-3xl text-white bg-transparent w-full text-center z-10"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        Meet our Team
      </h1>
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
          Student Coordinators
        </h1>
        <div className="flex justify-center items-center bg-transparent flex-wrap gap-10">
          <CoordinatorCard
            name="Mohd Zaid Khan "
            course=""
            branch="Management Team"
            year=""
            img={zaid}
            linkedin="https://www.linkedin.com/in/zeddkhan03/"
            delay="0s"
          />
          <CoordinatorCard
            name="Gautam Manak"
            course=""
            branch="Management Team"
            year=""
            img={gautam}
            linkedin="https://www.linkedin.com/in/gautammanak1"
            delay="0.3s"
          />
          <CoordinatorCard
            name="Ashish chanchal"
            course=""
            branch="Management team"
            year=""
            img={ashish}
            linkedin="https://www.linkedin.com/in/ashish2002"
            delay="0.6s"
          />
          <CoordinatorCard
            name="Atul Sharma"
            course=""
            branch="Web Dev Team"
            year=""
            img={atul}
            linkedin="https://www.linkedin.com/in/atul-sharma-11735b1b3/"
            delay="0.75s"
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
        {/*  Managing Team*/}
        </h1>
        <div className="flex justify-center items-center bg-transparent flex-wrap gap-10">
          <CoordinatorCard
            name="Dev Chauhan"
            course=""
            branch="Web Dev Team"
            year=""
            img={Dev}
            delay="0s"
            linkedin="http://linkedin.com/in/bitwisedhruv"
          />
          <CoordinatorCard
            name="SWATI PALIWAL"
            course=""
            branch="Graphics Designer"
            year=""
            img={swati}
            delay="0.3s"
            linkedin="https://www.linkedin.com/in/swati-paliwal-65b4471a2"
          />
          <CoordinatorCard
            name="Ashu"
            course=""
            branch="Graphics Designer"
            year=""
            img={ashu}
            delay="0.6s"
            linkedin="https://www.linkedin.com/in/ashu-kr/"
          />
          <CoordinatorCard
            name="Aarifa"
            course=""
            branch="Sponsorship and Management team "
            year=""
            img={arifa}
            delay="0.75s"
            linkedin="https://www.linkedin.com/in/aarifa-839a62222"
          />
        </div>
        <h1
          className="text-3xl text-white bg-transparent w-full text-center z-10 uppercase"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
        {/*  Managing Team*/}
        </h1>
        <div className="flex justify-center items-center bg-transparent flex-wrap gap-10">
        <CoordinatorCard
          name="Javed Ahmed Khan"
          course=""
          branch="UST India, Network Operation Associate-Cloud"
          year=""
          img={javed}
          delay="0s"
          linkedin="https://www.linkedin.com/in/javedakhan2010"
        />
        <CoordinatorCard
          name="Shekhar Patel"
          course=""
          branch="Vidoe Editor"
          year=""
          img={shekhar}
          delay="0.3s"
          linkedin="https://www.linkedin.com/in/shekhar-patel-149bb0224"
        />
        <CoordinatorCard
          name="Aniketa"
          course=""
          branch="Design and Social Media Team"
          year=""
          img={aniketa}
          delay="0.6s"
          linkedin="https://www.linkedin.com/in/aniketakumari/"
        />
        <CoordinatorCard
          name="Harshit Goel"
          course=""
          branch="Ground Volunteer"
          year=""
          img={harshit}
          delay="0.75s"
          linkedin="https://www.linkedin.com/in/harshit-goel-3880a022b"
        />
        </div>    
        <h1
          className="text-3xl text-white bg-transparent w-full text-center z-10 uppercase"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
        {/*  Managing Team*/}
        </h1>
      <div className="flex justify-center items-center bg-transparent flex-wrap gap-10">
      <CoordinatorCard
          name="Vishesh Rai"
          course=""
          branch="Marketing Team"
          year=""
          img={vishesh}
          delay="0s"
          linkedin="https://www.linkedin.com/in/vishesh-rai-btech-cse/"
        />
      </div>
      </div>
    </div>
  );
}

export default AboutUs;
