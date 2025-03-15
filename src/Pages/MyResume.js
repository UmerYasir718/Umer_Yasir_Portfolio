import React, { useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Image,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import aspire from "../assets/resume/aspire.png";
import nodeJs from "../assets/resume/CertificateNodeJs.png";
import react from "../assets/resume/CertificateReact.png";
import codeHoppers from "../assets/resume/codeHoppers.png";
import umt from "../assets/resume/umt.png";
import { techData, toolsData } from "../Data";
export default function MyResume() {
  const [activeSection, setActiveSection] = useState("Certificates");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col md={12} sm={12} lg={6} className="education-part">
            <h1 className="resume-main-heading">𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧</h1>

            <Col md={12}>
              <Card className="card-resume">
                <Card.Img
                  // variant='top'
                  src={umt}
                  className="card-img-resume rounded-circle"
                />
                <Card.Body
                  style={{ position: "relative" }}
                  className="mt-1 mb-3"
                >
                  <Card.Title className="card-title-resume">
                    <div className="title">BS Software Engineering</div>
                    <div className="name">
                      University of Management & Technology
                    </div>
                  </Card.Title>
                  <Card.Text className="card-text-resume">
                    <div className="type">Full-time</div>
                    <div className="duration">2021-Present</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={12}>
              {" "}
              <Card className="card-resume">
                <Card.Img
                  variant="top"
                  src={aspire}
                  className="card-img-resume rounded-circle"
                />
                <Card.Body
                  style={{ position: "relative" }}
                  className="mt-1 mb-3"
                >
                  <Card.Title className="card-title-resume">
                    <div className="title">FSc Pre- Engineering</div>
                    <div className="name">Aspire College Pattoki</div>
                  </Card.Title>
                  <Card.Text className="card-text-resume">
                    <div className="type">Full-time</div>
                    <div className="duration">2019-2021</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Col>
          <Col md={12} sm={12} lg={6} className="experience-part">
            <h1 className="resume-main-heading">𝐄𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞</h1>

            <Col md={12}>
              <Card className="card-resume">
                <Card.Img
                  variant="top"
                  src={codeHoppers}
                  className="card-img-resume rounded-circle"
                />
                <Card.Body
                  style={{ position: "relative" }}
                  className="mt-1 mb-3"
                >
                  <Card.Title className="card-title-resume">
                    <div className="title">Software Engineer</div>
                    <div className="name">CodeHoppers</div>
                  </Card.Title>
                  <Card.Text className="card-text-resume">
                    <div className="type">Full-time</div>
                    <div className="duration">2024-Present</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={12}>
              {" "}
              <Card className="card-resume">
                <Card.Img
                  variant="top"
                  src={codeHoppers}
                  className="card-img-resume rounded-circle"
                />
                <Card.Body
                  style={{ position: "relative" }}
                  className="mt-1 mb-3"
                >
                  <Card.Title className="card-title-resume">
                    <div className="title">Intern as MERN Stack</div>
                    <div className="name">CodeHoppers</div>
                  </Card.Title>
                  <Card.Text className="card-text-resume">
                    <div className="type">Full-time</div>
                    <div className="duration">2023 -2024</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Col>
        </Row>
      </Container>
      <Container>
        <h2 className="section-heading mt-3 mb-4 fw-bold">
          {" "}
          Skills & Certificates
        </h2>
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="section-changing-part">
          <Breadcrumb.Item
            className="section-changing-item"
            active={activeSection === "Certificates"}
            onClick={() => handleSectionChange("Certificates")}
          >
            𝐂𝐞𝐫𝐭𝐢𝐟𝐢𝐜𝐚𝐭𝐞𝐬
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="section-changing-item"
            active={activeSection === "Skills"}
            onClick={() => handleSectionChange("Skills")}
          >
            Technologies
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="section-changing-item"
            active={activeSection === "Tools"}
            onClick={() => handleSectionChange("Tools")}
          >
            Tools
          </Breadcrumb.Item>
        </Breadcrumb>

        {/* Conditionally Render Sections */}
        <div>
          {activeSection === "Certificates" && (
            <div>
              {/* <h3 className='section-heading my-3'>Certificates</h3> */}
              <Container className="my-4">
                <Row className="gap-2 d-flex justify-content-center align-content-center">
                  <Col md={6} sm={12} lg={5}>
                    <Card className="card-certificate">
                      <Card.Img variant="top" src={react} />
                      <Card.Body>
                        <Card.Title className="card-certificate-title">
                          Advanced React
                        </Card.Title>
                        <Card.Text className="card-certificate-text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="card-certificate-badge "
                          >
                            <path
                              fillRule="evenodd"
                              d="M15 8c0 .982-.472 1.854-1.202 2.402a2.995 2.995 0 0 1-.848 2.547 2.995 2.995 0 0 1-2.548.849A2.996 2.996 0 0 1 8 15a2.996 2.996 0 0 1-2.402-1.202 2.995 2.995 0 0 1-2.547-.848 2.995 2.995 0 0 1-.849-2.548A2.996 2.996 0 0 1 1 8c0-.982.472-1.854 1.202-2.402a2.995 2.995 0 0 1 .848-2.547 2.995 2.995 0 0 1 2.548-.849A2.995 2.995 0 0 1 8 1c.982 0 1.854.472 2.402 1.202a2.995 2.995 0 0 1 2.547.848c.695.695.978 1.645.849 2.548A2.996 2.996 0 0 1 15 8Zm-3.291-2.843a.75.75 0 0 1 .135 1.052l-4.25 5.5a.75.75 0 0 1-1.151.043l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.65 1.832 3.7-4.789a.75.75 0 0 1 1.052-.134Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Verified By&nbsp;
                          <span className="card-certificate-badgeBy">Meta</span>
                        </Card.Text>
                        <Button
                          variant="primary"
                          className="card-certificate-button"
                        >
                          <Link
                            to="https://coursera.org/verify/JS9JJNKLW6HD"
                            target="_blank"
                          >
                            Verified{" "}
                            <span>
                              <i className="bi bi-arrow-right"></i>
                            </span>
                          </Link>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6} sm={12} lg={5}>
                    {" "}
                    <Card className="card-certificate">
                      <Card.Img variant="top" src={nodeJs} />
                      <Card.Body>
                        <Card.Title className="card-certificate-title">
                          Node Js
                        </Card.Title>
                        <Card.Text className="card-certificate-text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="card-certificate-badge "
                          >
                            <path
                              fillRule="evenodd"
                              d="M15 8c0 .982-.472 1.854-1.202 2.402a2.995 2.995 0 0 1-.848 2.547 2.995 2.995 0 0 1-2.548.849A2.996 2.996 0 0 1 8 15a2.996 2.996 0 0 1-2.402-1.202 2.995 2.995 0 0 1-2.547-.848 2.995 2.995 0 0 1-.849-2.548A2.996 2.996 0 0 1 1 8c0-.982.472-1.854 1.202-2.402a2.995 2.995 0 0 1 .848-2.547 2.995 2.995 0 0 1 2.548-.849A2.995 2.995 0 0 1 8 1c.982 0 1.854.472 2.402 1.202a2.995 2.995 0 0 1 2.547.848c.695.695.978 1.645.849 2.548A2.996 2.996 0 0 1 15 8Zm-3.291-2.843a.75.75 0 0 1 .135 1.052l-4.25 5.5a.75.75 0 0 1-1.151.043l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.65 1.832 3.7-4.789a.75.75 0 0 1 1.052-.134Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Verified By&nbsp;
                          <span className="card-certificate-badgeBy">IBM</span>
                        </Card.Text>
                        <Button
                          variant="primary"
                          className="card-certificate-button"
                        >
                          <Link
                            to="https://coursera.org/verify/BZTEDZB4SJHH"
                            target="_blank"
                          >
                            Verified{" "}
                            <span>
                              <i className="bi bi-arrow-right"></i>
                            </span>
                          </Link>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          )}
          {activeSection === "Skills" && (
            <div>
              {/* <h3 className='section-heading my-3'>𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬</h3> */}
              <Container>
                <Row className="my-3">
                  {techData.map((tech) => (
                    <Col
                      key={tech.id}
                      md={2}
                      sm={6}
                      className="mb-3 col-6  techCards"
                    >
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip id={`tooltip-${tech.id}`}>
                            {tech.name}
                          </Tooltip>
                        }
                      >
                        <Image src={tech.image} alt={tech.name} fluid />
                      </OverlayTrigger>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          )}
          {activeSection === "Tools" && (
            <div>
              {/* <h3 className='section-heading my-3'>𝐓𝐨𝐨𝐥𝐬</h3> */}
              <Container>
                <Row className="my-3">
                  {toolsData.map((tool) => (
                    <Col
                      key={tool.id}
                      md={2}
                      sm={6}
                      className="mb-3 col-6 toolCards"
                    >
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip id={`tooltip-${tool.id}`}>
                            {tool.name}
                          </Tooltip>
                        }
                      >
                        <Image src={tool.image} alt={tool.name} fluid />
                      </OverlayTrigger>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
