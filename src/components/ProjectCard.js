import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, buttonText, buttonUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <Button 
            variant="dark" 
            href={buttonUrl} 
            target="_blank" 
            className="mt-2 custom-button"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </Col>
  );
}
