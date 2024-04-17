import { memo } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Butbinhnuoc from "assets/images/butbinhnuoc.png";
import Butso from "assets/images/butso.png";
import Ombs from "assets/images/ombs.png";
const showBG = (infoWinner: string) => {
  switch (infoWinner) {
    case "Tài khoản Lộc phát":
      return <img width="450px" src={Butbinhnuoc} />
    case "Đầu tư như ý":
      return <img width="450px" src={Butso} />
    case "Danh mục sinh lời":
      return <img width="450px" src={Ombs} />
    default:
      return
  }
}
function MyVerticallyCenteredModal({ infoWinner, onHide, ...rest }: any) {

  return (
    <Modal
      {...rest}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Chúc mừng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{infoWinner}</h4>
        {showBG(infoWinner)}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Đóng</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default memo(MyVerticallyCenteredModal);
