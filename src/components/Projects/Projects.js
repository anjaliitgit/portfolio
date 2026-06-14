import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Screenshot (507).png";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ask AI"
              description="AI-powered chat application that delivers intelligent responses and real-time messaging. Built with React, Node.js, Express, MongoDB, and WebSockets, with JWT authentication and persistent chat history."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Investify-Where wealth Grows"
              description="Full-stack stock trading simulator that allows users to buy and sell virtual stocks, track portfolio performance, and manage personalized watchlists. Built with React, Node.js, Express, and MongoDB, featuring secure authentication and seamless trading operations"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Pro-Rental"
              description="Property rental platform for listing, managing, and discovering rental properties. Developed with Node.js, Express, MongoDB Atlas, and Passport.js, featuring secure authentication, user reviews, and efficient property management."
              ghLink="https://github.com/anjaliitgit/Rental-App"
              demoLink="https://rental-app-ikfd.onrender.com"              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Reposphere"
              description="Developer collaboration platform that enables users to create, organize, and manage code repositories in a centralized workspace. Built with React, Node.js, Express, and MongoDB, featuring secure authentication and project management capabilities."
              ghLink="https://github.com/anjaliitgit/Rental-App"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

         {/* <Col md={4} className="project-card">
        <ProjectCard
    imgPath={suicide}
    isBlog={false}
    title="RetentionIQ - Dropout Risk Predictor"
    description="Built a machine learning solution using Decision Trees and advanced EDA techniques to predict female student dropout risk with 90%+ accuracy. Integrated Gemini AI to generate personalized intervention recommendations including scholarships and mentorship programs."
    ghLink="https://github.com/anjaliitgit/RetentionIQ"
    demoLink="https://studentpulse-ai.streamlit.app/"
  />
</Col> */}

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
