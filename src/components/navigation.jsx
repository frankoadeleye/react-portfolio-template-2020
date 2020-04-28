import React, { Component } from "react";
import { Link } from "react-router-dom";
import ResumeFile from "../YourResume.pdf";

const List = ({ link, route, classNames }) => {
  return (
    <>
      <li className={classNames}>
        <Link to={route}>
          <span className="nav-link">{link}</span>
        </Link>
      </li>
    </>
  );
};
const Resume = ({ link, classNames }) => {
  return (
    <>
      <li className={classNames}>
        <a href={ResumeFile} className="nav-link">
          <i className="fa fa-file"></i> {link}
        </a>
      </li>
    </>
  );
};

const MenuBtn = () => {
  return (
    <>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </>
  );
};
const showClass = "show";
const closeClass = "close";
export class Navigation extends Component {
  state = {
    showMenu: false
  };

  toggleMenu = () => {
    if (!this.state.showMenu) {
      this.setState({ showMenu: true });
    } else {
      this.setState({ showMenu: false });
    }
  };
  render() {
    return (
      <>
        <div
          className={`menu-btn ${!this.state.showMenu ? "" : closeClass} `}
          onClick={this.toggleMenu}
        >
          <MenuBtn />
        </div>
        <nav className={`menu ${!this.state.showMenu ? "" : showClass}`}>
          <div
            className={`menu-branding ${!this.state.showMenu ? "" : showClass}`}
          >
            <div className="portrait"></div>
          </div>
          <ul class={`menu-nav ${!this.state.showMenu ? "" : showClass}`}>
            <List
              route="/"
              link="Home"
              classNames={`nav-item ${!this.state.showMenu ? "" : showClass} ${
                this.props.home
              }`}
            />
            <List
              route="/about"
              link="About"
              classNames={`nav-item ${!this.state.showMenu ? "" : showClass} ${
                this.props.about
              }`}
            />
            <List
              route="/work"
              link="Work"
              classNames={`nav-item ${!this.state.showMenu ? "" : showClass} ${
                this.props.work
              }`}
            />
            <List
              route="/contact"
              link="How To Reach Me"
              classNames={`nav-item ${!this.state.showMenu ? "" : showClass} ${
                this.props.contact
              }`}
            />
            <Resume
              classNames={`nav-item ${!this.state.showMenu ? "" : showClass}`}
              link="Resume"
            />
          </ul>
        </nav>
      </>
    );
  }
}
