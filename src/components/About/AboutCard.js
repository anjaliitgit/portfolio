import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Anjali Yadav</span>{" "}
            from <span className="purple">Uttar Pradesh, India</span>.
            <br />
            I’m currently pursuing B.Tech in Electrical Engineering at {" "}
            <span className="purple">KNIT, Sultanpur</span>
            
            {/* <span className="purple">Juspay</span>. */}
            {/* <br />I hold an Integrated M.Sc. (IMSc) in{" "}
            <span className="purple">Mathematics and Computing</span> from{" "}
            <span className="purple">BIT Mesra</span>.
            <br /> */}
            <br />
           With a strong passion for software development and emerging technologies,
           I am deeply passionate about Software Development and continuously work towards building innovative and scalable technology solutions.
          My expertise includes Full-Stack Web Development using  React.js, Node.js, Express.js, and MongoDB   , along with a strong foundation in Data Structures & Algorithms.

          </p>

          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Anjali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
