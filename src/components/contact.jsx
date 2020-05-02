import React from "react";
import { Navigation } from "./navigation";
import Footer from "./footer";
import { PageInfoText } from "./PageInfo";

export function Contact() {
  return (
    <div className="contact-container">
      <Navigation contact="current" />
      <main id="contact">
        <PageInfoText
          Big1="Contact"
          Big2="Me"
          className="contactBig2"
          small="This is how you can reach me..."
        />
        <div className="boxes">
          <div>
            <span className="text-secondary">Email: </span> johndoe@test.com
          </div>
          <div>
            <span className="text-secondary">Phone: </span> (555) 555-5555
          </div>
          <div>
            <span className="text-secondary">Address: </span> 50 Main st Boston
            MA 02101
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
