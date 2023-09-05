import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import GitHubCalendar from 'react-github-calendar';
import Img from '../../Assets/ritika img.png';

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <div className="paraimp">
          <Row style={{ justifyContent: 'center', padding: '10px' }}>
            <Col
              md={7}
              style={{
                justifyContent: 'center',
                paddingTop: '30px',
                paddingBottom: '50px',
              }}
            >
              <h1 style={{ fontSize: '2.1em', paddingBottom: '20px', color: '#ff0067' }}>
                <strong className="purple">About Me!</strong>
              </h1>
              <Card className="quote-card-view">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p className="para" style={{ textAlign: 'justify' }}>
                      Hi, I&apos;m Ritika Rawat, a passionate web developer from Uttarakhand, India.
                      I discovered my love for programming
                      in late 2021 and pursued a career in software
                      development.
                      During my time at Microverse, I gained expertise in HTML5, CSS3/SCSS,
                      JavaScript, React, Redux, and Ruby.
                      Collaboration and mentoring are my strengths, and I prioritize a
                      mobile-first approach and test-driven development.
                      I love to create amazing web experiences for users!

                      I firmly believe that my technical expertise,
                      creative thinking, and innate eye for design converge
                      harmoniously,
                      allowing me to deliver innovative solutions that
                      deeply resonate with users.
                      Collaborating with me means breathing life into your
                      digital projects and witnessing them flourish beyond your expectations.
                      Let&apos;s join forces and embark on a
                      journey of transforming ideas into extraordinary
                      digital experiences!
                    </p>

                    <p className="quote">
                      &quot;Let your code be a catalyst for positive change in the world.&quot;
                    </p>

                    <footer className="blockquote-footer">Ritika</footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={5}
              style={{ paddingTop: '120px', paddingBottom: '50px' }}
              className="about-img"
            >
              <img src={Img} alt="about" className="rr-img" />
            </Col>
          </Row>
        </div>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <h1 className="project-heading" style={{ paddingBottom: '20px' }}>
            Days I
            {' '}
            <strong className="purple">Code</strong>
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
