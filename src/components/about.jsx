import React from "react";
import { Navigation } from "./navigation";
import portrait from "./img/portrait.jpg";
import Footer from "./footer";
import { PageInfoText } from "./PageInfo";

const Job = ({ number, company, position, details }) => {
  return (
    <>
      <div class={`job ${number}`}>
        <h3>{company}</h3>
        <h6>{position}</h6>
        <p>{details}</p>
      </div>
    </>
  );
};

export function About() {
  return (
    <div className="about-container">
      <Navigation about="current" />
      <main id="about">
        <PageInfoText
          Big1="About"
          Big2="Me"
          small="Let me tell you a few things..."
        />
        <div class="about-info">
          <img src={portrait} alt="John Doe" class="bio-image" />

          <div class="bio">
            <h3 class="text-secondary">BIO</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              magni nam nisi quae vitae? Quod molestiae ipsa autem natus eum vel
              ducimus nulla harum voluptatem eligendi! Unde, reiciendis?
              Praesentium, laborum.
            </p>
          </div>

          <Job
            number="job-1"
            company="123 WebShop"
            position="Full Stack Developer"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perferendis totam enim. Nesciunt porro dolores expedita
              dolor necessitatibus deserunt nemo."
          />
          <Job
            number="job-2"
            company="123 WebShop"
            position="Full Stack Developer"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perferendis totam enim. Nesciunt porro dolores expedita
              dolor necessitatibus deserunt nemo."
          />
          <Job
            number="job-3"
            company="123 WebShop"
            position="Full Stack Developer"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perferendis totam enim. Nesciunt porro dolores expedita
              dolor necessitatibus deserunt nemo."
          />
          <Job
            number="job-4"
            company="123 WebShop"
            position="Full Stack Developer"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perferendis totam enim. Nesciunt porro dolores expedita
              dolor necessitatibus deserunt nemo."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
