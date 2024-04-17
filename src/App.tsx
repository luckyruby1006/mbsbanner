import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import WheelComponent from "./WheelLucky";
import MyVerticallyCenteredModal from "./components/MyVerticallyCenteredModal";
import Margin95_doc from "assets/images/doc/Margin95_doc.jpg";
import NGT_doc from "assets/images/doc/NGT_doc.jpg";
import ZeroFee_doc from "assets/images/doc/ZeroFee_doc.jpg";

function App() {
  const [index, setIndex] = useState(0);
  const [isShowWinner, setIsShowWinner] = useState(false);
  const [infoWinner, setInfoWinner] = useState("");

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };
  const segments = [
    "Tài khoản Lộc phát",
    "Đầu tư như ý",
    "Danh mục sinh lời",
    "Tài khoản Lộc phát",
    "Đầu tư như ý",
    "Danh mục sinh lời",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#34A24F",
    "#EC3F3F",
    "#fed019",
  ];
  const onFinished = (winner: any) => {
    setInfoWinner(winner);
    setIsShowWinner(true);
  };
  return (
    <Container style={{ position: "relative" }} fluid>
      <Row>
        <Col xs={12} className="background-banner">
          <div className="container-wheel">
            <WheelComponent
              segments={segments}
              segColors={segColors}
              winningSegment={""}
              onFinished={(winner) => onFinished(winner)}
              primaryColor="gray"
              contrastColor="white"
              buttonText="Quay"
              isOnlyOnce={false}
              upDuration={100}
              downDuration={700}
              size={360}
            />
          </div>
        </Col>
      </Row>
      <div className="banner">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              title="First slide"
              width="100%"
              src={Margin95_doc}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              title="First slide"
              width="100%"
              src={NGT_doc}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              title="First slide"
              width="100%"
              src={ZeroFee_doc}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <MyVerticallyCenteredModal
        infoWinner={infoWinner}
        show={isShowWinner}
        onHide={() => {
          setIsShowWinner(false);
          setInfoWinner("");
        }}
      />
    </Container>
  );
}

export default App;
