import React from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { projectData } from "../Data";
export default function Portfolio() {
  return (
    <div>
      <Container fluid>
        <h1 className='portfolio-main-heading mb-3'>Portfolio</h1>
        <Alert className="d-flex justify-content-center fs-3" style={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold' }}>
          !!!!!!!!!!!!!!!!!!!!!!!!!!!     Page is under development        !!!!!!!!!!!!!!!!!!!!!!!!!!!
        </Alert>
        <Row className=''>
          {projectData.map((project) => (
            <Col key={project.id} sm={12} md={6} lg={5} xl={4} className='mb-3'>
              <Card className='card-project'>
                <Card.Img
                  variant='top'
                  src={project.image}
                  className='card-project-image'
                // fluid
                />
                <Card.Body>
                  <Card.Title className='card-project-title'>
                    {project.name}
                  </Card.Title>
                  <Card.Text className='card-project-text'>
                    {project.description}
                    <div className='card-project-tech'>
                      <span className='card-project-tech-heading'>
                        Tech Stack:
                      </span>{" "}
                      {project.tech}
                    </div>
                  </Card.Text>
                  <div className='card-project-footer'>
                    <Card.Link className='card-project-live'>
                      <i className='bi bi-box-arrow-up-right'></i>&nbsp;Live
                      Preview
                    </Card.Link>
                    <Card.Link className='card-project-code'>
                      <i className='bi bi-github'></i> &nbsp;View Code
                    </Card.Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
