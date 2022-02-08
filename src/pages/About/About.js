import React from "react";

import "../../index.css";
import "./About.css";

import image1 from "../../Images/image1.jpg";
import image2 from "../../Images/image2.jpg";
import image3 from "../../Images/image3.jpg";

function About() {
  return (
    <div className="about">
      <div className="container">
        <h1>About</h1>
        <div className="about__text">
          <p>This is a cool shop!</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <div className="about__images">
            <img src={image1} alt="Fashion" />
            <img src={image2} alt="Fashion" />
            <img src={image3} alt="Fashion" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
