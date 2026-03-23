import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myPic.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate Frontend Developer who enjoys transforming ideas
              into clean, responsive, and user-friendly web experiences. I
              specialize in building modern interfaces that are not only
              visually appealing but also highly performant and scalable.
              <br />
              <br /> Over time, I’ve worked on a variety of projects including
              <i>
                <b className="purple">
                  {" "}
                  ERP systems, POS solutions, and business websites,{" "}
                </b>{" "}
              </i>{" "}
              which helped me gain strong experience in real-world application
              development.
              <br />
              <br />
              I’m highly skilled in{" "}
              <i>
                <b className="purple">
                  JavaScript, React.js, and modern frontend technologies,
                </b>
              </i>{" "}
              and I love creating seamless user interfaces using tools like
              Material UI, Bootstrap, and responsive design principles.
              <br />
              <br />
              My key focus is on developing high-quality web applications,
              improving user experience, and writing clean, maintainable code.
              Whenever possible, I enjoy building projects using React.js and
              modern frameworks, continuously learning new technologies to stay
              up-to-date in the fast-evolving frontend ecosystem.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
