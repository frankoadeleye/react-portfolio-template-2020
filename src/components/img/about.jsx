import React from "react";
import "../css/main.css";
import { Navigation } from "../navigation";
import portrait from "./img/portrait.jpg";

const Jobs = ({ jobnumber, company, position, duty }) => {
  return (
    <>
      <div className={`job ${jobnumber}`}>
        <h3>{company}</h3>
        <h6>{position}</h6>
        <p>{duty}</p>
      </div>
    </>
  );
};

export function About() {
  return (
    <div className="about-container">
      <header>
        <Navigation about="current" />
        {/* to add the class current to any item in the Nav component that has prop 'about  */}
      </header>
      <main id="about" className="about-main-container">
        <h1 className="lg-heading">
          About
          <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          <img src={portrait} alt="John Doe" className="bio-image" />

          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              magni nam nisi quae vitae? Quod molestiae ipsa autem natus eum vel
              ducimus nulla harum voluptatem eligendi! Unde, reiciendis?
              Praesentium, laborum.
            </p>
          </div>
          <Jobs
            jobnumber="job-1"
            company="123 Webshop"
            position="Full Stack Developer"
            duty="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates perferendis totam enim. Nesciunt porro dolores expedita
            dolor necessitatibus deserunt nemo."
          />
          <Jobs
            jobnumber="job-2"
            company="Designers ABC"
            position="Front End Developer"
            duty=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perferendis totam enim. Nesciunt porro dolores expedita
              dolor necessitatibus deserunt nemo."
          />

          <Jobs
            jobnumber="job-3"
            company="Webworks"
            position="Graphic Designer"
            duty=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perferendis totam enim. Nesciunt porro dolores expedita
              dolor necessitatibus deserunt nemo."
          />
        </div>
      </main>
      <footer id="main-footer">Copyright &copy; 2018</footer>
    </div>
  );
}
