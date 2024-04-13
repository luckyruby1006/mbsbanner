import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

function App() {
  const [index, setIndex] = useState(0);


  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };
  return (
    <Container fluid>
      <Row style={{ height: "80vh" }}>
        <Col>
          <iframe
            src="https://wheelofnames.com/"
            title="Quay Thưởng"
            width="100%"
            height="100%"
          />
        </Col>
      </Row>
      <Row style={{ height: "20vh" }}>
        <Col>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img title="First slide" width="100%" src="https://sweb.mbs.com.vn/ulf/images/web/NGT_S24_Login_420x140px.jpg" />
              <Carousel.Caption>
                <h3>First slide label</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img title="First slide" width="100%" src="https://sweb.mbs.com.vn/ulf/images/web/UudaiPS_S24Login_420x140px.jpg" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
