import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ComputersCanvas from "../components/canvas/Computer";
// import './Home.css'; // Ensure you have your CSS styles for the page here

export default function Home() {
  return (
    <div className="home-section my-5">
      <Container >
        <Row className="">
          <Col md={12} sm={12}>
            <h1 className="main-text-box">
              𝐇𝐢, 👋
              <div>
                𝐌𝐲 𝐍𝐚𝐦𝐞 𝐢𝐬 </div>
              <div className="name-heading">
                𝐔𝐦𝐞𝐫 𝐘𝐚𝐬𝐢𝐫  </div>
              <div className="profession">
                𝐀 𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫
              </div>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} style={{ display: "flex" }} className="main-container ">
            <ComputersCanvas />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
