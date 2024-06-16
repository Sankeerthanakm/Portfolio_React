import { Col } from "react-bootstrap";

export const CertificationCard = ({ title, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="cert-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="cert-txtx">
          {/* <h4>{title}</h4> */}
        </div>
      </div>
    </Col>
  );
}
