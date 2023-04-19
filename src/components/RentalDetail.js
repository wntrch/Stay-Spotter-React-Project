import { Card, CardImg, Col, Row } from "reactstrap";

const RentalDetail = ({ rental }) => {
  const { image, name, additionalImages, link } = rental;

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="detail-page-container">
      <Row>
        <Col sm="6" md="5" lg="5" className="m-4">
          <Card>
            <div className="left-image-container">
              <CardImg className="detail-card-left" src={image} alt={name} />
            </div>
          </Card>
        </Col>
        <Col sm="6" md="5" lg="6" className="m-4">
          <Row>
            {additionalImages.map((image, index) => (
              <Col key={index} sm="6" className="mb-2">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={image}
                    alt={`Additional image ${index + 1}`}
                    className="additional-images"
                  />
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            <Col
              sm="6"
              md="5"
              lg="3"
              className="m-4 hover-cursor"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button onClick={handleClick} className="button">
                Book Rental
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <h3>{name}</h3>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RentalDetail;
