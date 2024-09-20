import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import backend from "../assets/about/backend.png";
import fullStack from "../assets/about/creator.png";
import frontend from "../assets/about/mobile.png";
import software from "../assets/about/web.png";
export default function About() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={10}>
            <h1 className='about-text-box'>
              <div className='about-main-heading'>𝐎𝐯𝐞𝐫𝐯𝐢𝐞𝐰</div>
              <div className='introduction-line'>
                𝐈'𝐦 𝐚 𝐬𝐤𝐢𝐥𝐥𝐞𝐝 𝐬𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐰𝐢𝐭𝐡 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞 𝐢𝐧 𝐓𝐲𝐩𝐞𝐒𝐜𝐫𝐢𝐩𝐭
                𝐚𝐧𝐝 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭, 𝐚𝐧𝐝 𝐞𝐱𝐩𝐞𝐫𝐭 𝐢𝐬𝐞 𝐢𝐧 𝐟𝐫𝐚𝐦𝐞𝐰𝐨𝐫𝐤𝐬 𝐥𝐢𝐤𝐞 𝐑𝐞𝐚𝐜𝐭,
                𝐍𝐨𝐝𝐞.𝐣𝐬, 𝐚𝐧𝐝 𝐓𝐡𝐫𝐞𝐞.𝐣𝐬. 𝐈'𝐦 𝐚 𝐪𝐮𝐢𝐜𝐤 𝐥𝐞𝐚𝐫𝐧𝐞𝐫 𝐚𝐧𝐝 𝐜𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐞
                𝐜𝐥𝐨𝐬𝐞𝐥𝐲 𝐰𝐢𝐭𝐡 𝐜𝐥𝐢𝐞𝐧𝐭𝐬 𝐭𝐨 𝐜𝐫𝐞𝐚𝐭𝐞 𝐞𝐟𝐟𝐢𝐜𝐢𝐞𝐧𝐭, 𝐬𝐜𝐚𝐥𝐚𝐛𝐥𝐞, 𝐚𝐧𝐝
                𝐮𝐬𝐞𝐫-𝐟𝐫𝐢𝐞𝐧𝐝𝐥𝐲 𝐬𝐨𝐥𝐮𝐭𝐢𝐨𝐧𝐬 𝐭𝐡𝐚𝐭 𝐬𝐨𝐥𝐯𝐞 𝐫𝐞𝐚𝐥-𝐰𝐨𝐫𝐥𝐝 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐬. 𝐋𝐞𝐭'𝐬
                𝐰𝐨𝐫𝐤 𝐭𝐨𝐠𝐞𝐭𝐡𝐞𝐫 𝐭𝐨 𝐛𝐫𝐢𝐧𝐠 𝐲𝐨𝐮𝐫 𝐢𝐝𝐞𝐚𝐬 𝐭𝐨 𝐥𝐢𝐟𝐞!
              </div>
            </h1>
          </Col>
        </Row>
        <Row className='my-3 gap-2 '>
          <Col md={5} sm={12}>
            <Card className='rounded card-about'>
              <Card.Img
                variant='top'
                src={software}
                className='card-img-top-about '
              />
              <Card.Body>
                <Card.Title className='card-title-about'>
                  Software Engineer
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} sm={12}>
            <Card className='rounded card-about'>
              <Card.Img
                variant='top'
                src={fullStack}
                className='card-img-top-about '
              />
              <Card.Body>
                <Card.Title className='card-title-about'>
                  Full Stack Developer
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} sm={12}>
            <Card className='rounded card-about'>
              <Card.Img
                variant='top'
                src={frontend}
                className='card-img-top-about '
              />
              <Card.Body>
                <Card.Title className='card-title-about'>
                  Frontend Developer{" "}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} sm={12}>
            <Card className='rounded card-about'>
              <Card.Img
                variant='top'
                src={backend}
                className='card-img-top-about '
              />
              <Card.Body>
                <Card.Title className='card-title-about'>
                  Backend Developer
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
