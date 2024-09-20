import React from "react";
import { Col, Container, Row } from "react-bootstrap";
export default function Contact() {
  return (
    <div>
      <Container>
        <Row>
          <h1 className='contact-main-heading mb-3'>Contact</h1>
          <Col md={4} lg={6} sm={12} className='contact-column'>
            <i className='bi bi-telephone fs-2 text-primary'></i>&nbsp;
            <span className='contact-text fs-5'>+923314911420</span>
          </Col>
          <Col md={4} lg={6} sm={12} className='contact-column'>
            <i className='bi bi-envelope fs-2 text-danger'></i>&nbsp;
            <span className='contact-text fs-5'>umeryasir718@gmail.com</span>
          </Col>
          <Col md={4} lg={6} sm={12} className='contact-link-column'>
            {/* <ButtonGroup aria-label='Basic example'> */}
            {/* <Button variant='light' className='contact-link '>
              <i className='bi bi-github fs-2 '></i>
            </Button>
            <Button variant='primary' className='contact-link '>
              <i className='bi bi-linkedin fs-2'></i>
            </Button>
            <Button variant='success' className='contact-link '>
              <i className='bi bi-whatsapp fs-2'></i>
            </Button> */}
            {/* </ButtonGroup> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
