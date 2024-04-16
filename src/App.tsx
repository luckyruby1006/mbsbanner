import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import WheelComponent from "./WheelLucky";
import MyVerticallyCenteredModal from "./components/MyVerticallyCenteredModal";
import Background_QuaySo from "assets/images/Background_QuaySo_doc.jpg";

function App() {
  const [index, setIndex] = useState(0);
  const [isShowWinner, setIsShowWinner] = useState(false);
  const [infoWinner, setInfoWinner] = useState("");

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };
  const segments = [
    "Giải thưởng 1",
    "Giải thưởng tài năng",
    "Giải nhất",
    "Giải nhì",
    "Giải ba",
    "Giải bốn",
    "Giải năm",
    "Giải sáu",
    "Giải bảy",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
    "#F0CF50",
  ];
  const onFinished = (winner: any) => {
    setInfoWinner(winner);
    setIsShowWinner(true);
  };
  return (
    <Container style={{ position:"relative" }} fluid>
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
              downDuration={500}
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
              height="600px"
              src="https://sweb.mbs.com.vn/ulf/images/web/NGT_S24_Login_420x140px.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              title="Second slide"
              width="100%"
              height="600px"
              src="https://sweb.mbs.com.vn/ulf/images/web/UudaiPS_S24Login_420x140px.jpg"
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
