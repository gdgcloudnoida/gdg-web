import React from "react";
import "../styles/event.scss";
import cloudCatalyst from "../assets/cloudcatalyst.webp";

const Events = () => {
  return (
    <section
      className="w-full min-h-[80vh] flex flex-col items-center p-12 gap-7 bg-white"
      id="event"
    >
      <h1 className="text-5xl font-extrabold">Events</h1>
      <div class="container">
        <div class="blog-post">
          <div class="blog-post_img">
            <img src={cloudCatalyst} alt="" />
          </div>
          <div class="blog-post_info">
            <div class="blog-post_date">
              <span>JUL 22, 2023</span>
            </div>
            <h1 class="blog-post_title">
              Cloud Catalyst - GDG Cloud Noida - Launch Event
            </h1>
            <p class="blog-post_text">
              Cloud Catalyst, the inaugural event of GDG Cloud Noida chapter, is
              a transformative conference exploring Cloud, DevOps, Data, and AI,
              featuring expert speakers, captivating sessions, and abundant
              networking opportunities.
            </p>
            <a
              href="https://gdg.community.dev/events/details/google-gdg-cloud-noida-presents-cloud-catalyst-gdg-cloud-noida-launch-event/"
              class="blog-post_cta"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
