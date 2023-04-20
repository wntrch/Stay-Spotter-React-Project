import { Card, CardImg, Col, Row } from "reactstrap";

const RentalDetail = ({ rental }) => {
  const {
    image,
    name,
    additionalImages,
    link,
    price,
    details,
    location,
    amenities,
    checkin,
  } = rental;

  const handleClick = () => {
    window.open(link, "_blank");
  };

  const checkinLines = checkin.split("\n");

  return (
    <div className="detail-page-container">
      <div style={{ marginTop: "30px" }}>
        <h3 style={{ marginBottom: "20px" }}>{name}</h3>
        <p style={{ fontSize: "14px" }}>{location}</p>
      </div>
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
                Check Availability
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
        ></Col>
      </Row>
      <div>
        <Row className="text-section">
          <Col sm="12" md="6">
            <h4>Modern A-Frame Home</h4>
            <p>{details}</p>
            <h5>Main Amenities</h5>
            <ul>
              {amenities.map((amenities, index) => (
                <li key={index}>{amenities}</li>
              ))}
            </ul>
          </Col>
          <Col sm="12" md="6">
            <h4>Pricing</h4>
            <p>{price}</p>
            <h4>Check-in</h4>
            {checkinLines.map((line, index) => (
              <p key={index} style={{ marginBottom: '0.5rem' }}>{line}</p>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RentalDetail;
