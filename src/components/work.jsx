import React from "react";
import { Navigation } from "./navigation";
import { PageInfoText } from "./PageInfo";
import image1 from "./img/projects/project1.jpg";
import image2 from "./img/projects/project2.jpg";
import image3 from "./img/projects/project3.jpg";
import image4 from "./img/projects/project4.jpg";
import image5 from "./img/projects/project5.jpg";

const Project = ({ projectImageSrc }) => {
  return (
    <>
      <div className="item">
        <a href="#!">
          <img src={projectImageSrc} alt="Project" />
        </a>
        <a href="#" className="btn-light">
          <i className="fas fa-eye"></i> Project
        </a>
        <a href="#" className="btn-dark">
          <i className="fab fa-github"></i> Github
        </a>
      </div>
    </>
  );
};

export function Work() {
  return (
    <main className="work-container">
      <header>
        <Navigation work="current" />
      </header>
      <main>
        <PageInfoText
          Big1="My"
          Big2="Work"
          small=" Check out some of my projects..."
        />
        <div className="projects">
          <Project projectImageSrc={image1} />
          <Project projectImageSrc={image2} />
          <Project projectImageSrc={image3} />
          <Project projectImageSrc={image4} />
          <Project projectImageSrc={image5} />
        </div>
      </main>
    </main>
  );
}
