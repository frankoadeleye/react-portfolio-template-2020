import React, { Component } from "react";
import { Navigation } from "./navigation";
import { PageInfoText } from "./PageInfo";

const SocialLink = ({ name, link }) => {
  return (
    <a href={link}>
      <i className={`fab ${name}`}></i>
    </a>
  );
};

export class HomePage extends Component {
  render() {
    return (
      <div className="home-container">
        <Navigation home="current" />
        <main id="home">
          <PageInfoText
            Big1="John"
            Big2="Doe"
            small=" Web Developer, Programmer, Designer & Entrepreneur"
          />
          <div class="icons">
            <SocialLink name=" fa-twitter fa-2x" link="#" />
            <SocialLink name=" fa-facebook fa-2x" link="#" />
            <SocialLink name=" fa-linkedin fa-2x" link="#" />
            <SocialLink name=" fa-github fa-2x" link="#" />
          </div>
          <br />
        </main>
      </div>
    );
  }
}
