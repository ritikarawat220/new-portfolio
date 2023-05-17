import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Img from "../../Assets/ritika img.png";
import Card from "react-bootstrap/Card";
import GitHubCalendar from "react-github-calendar";

function About () {
    return (
        <Container fluid className="about-section">
         <Container>
            <div className="paraimp">
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                 <strong className="purple">About Me!</strong>
            </h1>
            <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="para" style={{ textAlign: "justify" }}>
          Hi, I'm Ritika Rawat, a passionate web developer from Uttarakhand, India. I discovered my love for programming in late 2022 and pursued a career in software development. I enrolled in the prestigious Microverse online program in 2023 to refine my skills.

During my time at Microverse, I gained expertise in HTML5, CSS3/SCSS, JavaScript, React, Redux, and Ruby. I prioritized a mobile-first approach and implemented test-driven development to ensure reliable and robust code.

Collaboration played a vital role in my growth as a developer. Through pair programming and industry-standard gitflow practices, I effectively collaborated with diverse teams, managing code repositories and ensuring seamless version control. I also mentored junior developers, providing guidance and code reviews to foster their growth.

I embraced the kanban method for efficient and agile development of interactive applications, consistently delivering projects ahead of deadlines. Driven by my passion for creating dynamic and feature-rich applications, I am dedicated to continuous improvement and expanding my knowledge base.

Every day, I actively enhance projects, seek networking opportunities, and explore new avenues for learning and growth. With a proven track record of delivering high-quality projects, I am eager to take on new challenges and contribute to the ever-evolving field of software development.</p>
          <p style={{ color: "rgb(155 126 172)" }}>
          "Let your code be a catalyst for positive change in the world."{" "}
          </p>
          <footer className="blockquote-footer">Ritika</footer>
        </blockquote>
      </Card.Body>
    </Card>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={Img} alt="about" className="rr-img" />
          </Col>
        </Row>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="ritikarawat220"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
      </Container>
    </Container>
  );
}

export default About;