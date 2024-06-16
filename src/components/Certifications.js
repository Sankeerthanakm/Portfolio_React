// Certifications.js
import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CertificationCard } from "./CertificationCard";
import certImg1 from "../assets/img/sql.jpg"; 
import certImg2 from "../assets/img/iotin.jpg";
import certImg3 from "../assets/img/pyt.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certifications = () => {
  const certifications = [
    {
      title: "Certification 1",
      imgUrl: certImg1,
    },
    {
      title: "Certification 2",
      imgUrl: certImg2,
    },
    {
      title: "Certification 3",
      imgUrl: certImg3,
    },
   
  ];

  return (
    <section className="certification project" id="certifications">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Certifications</h2>
                  <p>Here are some of my certifications</p>
                  <Tab.Container id="certifications-tabs" defaultActiveKey="first">
                    {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            certifications.map((certification, index) => {
                              return (
                                <CertificationCard
                                  key={index}
                                  {...certification}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  );
};
