import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myimg.jpeg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span> 
            </h1>
            <p className="home-about-body">
             
 Hi! I'm <span className="purple">Anjali Yadav</span>.

  <br />
  <br />

  An aspiring <span className="purple">Software Engineer</span> and
  <span className="purple"> Full-Stack Developer</span> focused on building
  modern, scalable, and user-friendly web applications.

  <br />
  <br />

  Skilled in
  <span className="purple"> React.js</span>,
  <span className="purple"> Node.js</span>,
  <span className="purple"> Express.js</span>,
  <span className="purple"> MongoDB</span>, and
  <span className="purple"> Data Structures & Algorithms</span>.

  <br />
  <br />

  Always eager to learn, collaborate, and contribute to impactful projects.
          
            </p>
          </Col>
          <Col md={4} className="myAvtar d-flex align-items-center">
          <Tilt>
  <img
    src={myImg}
    className="profile-image"
    alt="Anjali Yadav"
  />
</Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
