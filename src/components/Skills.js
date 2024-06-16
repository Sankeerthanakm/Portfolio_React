import React, { useState } from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [activeTab, setActiveTab] = useState('education');

  return (
    <>
      <style>
        {`
          .section-gap {
            margin-bottom: 50px; /* Adjust the value as needed */
          }
          .tabs {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
          }
          .tab {
            cursor: pointer;
            padding: 10px 20px;
            margin: 0 10px;
            background-color: #f1f1f1;
            border-radius: 5px;
            border: none;
            outline: none;
            transition: background-color 0.3s ease;
          }
          .tab:hover {
            background-color: #ddd;
          }
          .tab.active {
            background-color: #007bff;
            color: #fff;
          }
          .content {
            display: flex;
            justify-content: center;
          }
          .timeline-item {
            margin-bottom: 20px;
            position: relative;
          }
          .timeline-item::before {
            content: "";
            position: absolute;
            left: -10px;
            top: 10px;
            height: 100%;
            width: 2px;
            background-color: #007bff;
          }
          .timeline-item::after {
            content: "";
            position: absolute;
            left: -15px;
            top: 10px;
            height: 15px;
            width: 15px;
            background-color: #007bff;
            border-radius: 50%;
          }
          .timeline-content {
            padding-left: 30px;
          }
          .timeline-content h3 {
            margin-top: 0;
          }
        `}
      </style>

      <section className="skill section-gap" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>About</h2>
                <p>My name is Sankeerthana. I'm from Kasaragod, Kerala. I completed B.Tech in Computer Science and
                  Engineering from University College of Engineering Kariavattom, Trivandrum. Now I am working as a
                  graduate apprentice trainee at Bharat Electronics Limited, Bangalore. Along with that, I am interning
                  in full-stack development at ICT Academy of Kerala virtually. During my academics, I actively
                  contributed to a group project which is an impressive real-time fire recognition system built on Python.
                  I also create visually appealing websites and am enthusiastic about honing my skills in full-stack development.
                  Now I am excited about contributing to innovative projects and eager to secure a position where my skills will make a meaningful impact on the team. Thank you!</p>
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
      </section>

      <section className="skill section-gap" id="qualification">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>Qualifications</h2>
                <p>My personal journey</p>
                <div className="tabs">
                  <button className={`tab ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>Education</button>
                  <button className={`tab ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => setActiveTab('experience')}>Experience</button>
                </div>
                <div className="content">
                  {activeTab === 'education' && (
                    <Timeline position="alternate">
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <h3>B.Tech in Computer Science and Engineering</h3>
                          <p>University College of Engineering Kariavattom, Trivandrum</p>
                          <span>2019 - 2023</span>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>
                          <h3>Higher Secondary</h3>
                          <p>Holy Family Higher Secondary School , Rajapuram</p>
                          <span>2017 - 2018</span>
                        </TimelineContent>
                      </TimelineItem>
                    </Timeline>
                  )}
                  {activeTab === 'experience' && (
                    <Timeline position="alternate">
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <h3>Bharat Electronics Limited (BEL), Bangalore <i>(Trainee)</i></h3>
                          <p>Frontend Developer <br />
                            Utilizing frontend technologies such as React and JavaScript, to design and implement graphical user interfaces for various projects. Participating in training sessions and workshops to continuously improve skills in programming languages, software development methodologies, and emerging technologies.</p>
                          <span>Feb 2024 - present</span>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>
                          <h3>ICTAK, Trivandrum <i>(Intern)</i></h3>
                          <p>Full Stack Development <br />
                            Achieved growth for Full stack development in building web applications using Javascript, NodeJs, ExpressJs, MongoDB, and React. Experience in REST APIs, Database management, and deployment processes. Done different projects using MERN stack.</p>
                          <span>Dec 2023 - May 2024</span>
                        </TimelineContent>
                      </TimelineItem>
                    </Timeline>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
      </section>

      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>Skills</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text.</p>
                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>HTML</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Image" />
                    <h5>CSS</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="Image" />
                    <h5>Javascript</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>Python</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>Reactjs</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Image" />
                    <h5>Nodejs</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="Image" />
                    <h5>Expressjs</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>Mongodb</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="Image" />
                    <h5>MySQL</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>GIT</h5>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
  </>
  );
};

export default Skills;

