import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/cara.png";
import projImg2 from "../assets/img/portaljo.png";
import projImg3 from "../assets/img/firede.png";
import projImg4 from "../assets/img/socialmedia.png";
import projImg5 from "../assets/img/todolistpic.jpg";
import projImg6 from "../assets/img/portpic.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "E-Com Website",
      description: "",
      imgUrl: projImg1,
      buttonText: "View",
      buttonUrl: "https://e-com-website-san.netlify.app/"
    },
    {
      title: "To-Do List",
      description: "",
      imgUrl: projImg5,
      buttonText: "View",
      buttonUrl: "https://itsreacttodo.netlify.app/"
    },
    {
      title: "Job Portal",
      description: "",
      imgUrl: projImg2,
      buttonText: "View",
      buttonUrl: "https://github.com/Sankeerthanakm/jobportal.git"
    },
   
    {
      title: "Portfolio",
      description: "",
      imgUrl: projImg6,
      buttonText: "View",
      buttonUrl: "https://sankportfolio.netlify.app/"
    },
    {
      title: "Real time fire detection system",
      description: "",
      imgUrl: projImg3,
      // buttonText: "View",
      buttonUrl: "#"
    },
    
    
    {
      title: "Social Media Platform",
      description: "",
      imgUrl: projImg4,
      // buttonText: "View",
      buttonUrl: "#"
    },
    
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Check out my recent projects.Here you'll find a selection of my work, demonstrating my skills and passion for web development, particularly in the MERN stack. Each project represents a significant learning experience and a step forward in my journey as a developer. I invite you to explore and learn more about the creative and technical aspects of my work.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.slice(0, 3).map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects.slice(3, 6).map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projects.slice(3, 6).map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane> */}
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
}
