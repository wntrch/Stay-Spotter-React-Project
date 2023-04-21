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
      <Row style={{ backgroundColor: "#666666", color: "#FFF" }}>
        <Col sm="12">
          <h2 className="text-center mt-4 mb-4" style={{ fontWeight: "bold" }}>
            {name}
          </h2>
        </Col>
      </Row>
      <Row >
        <Col sm="12" md="6">
          <CardImg
            src={image}
            alt={name}
            style={{ width: "100%", borderRadius: "8px" }}
            className="mt-2"
          />
          <div className="d-flex justify-content-between mt-2">
            {additionalImages.map((image, index) => (
              <CardImg
                key={index}
                src={image}
                alt={`Additional image ${index + 1}`}
                className="additional-images"
                style={{
                  width: "25%",
                  borderRadius: index === 0 || index === 3 ? "8px" : "0",
                }}
              />
            ))}
          </div>
        </Col>
        <Col sm="12" md="6" style={{ backgroundColor: "#000", color: "#FFF", margin: "0rem", borderRadius: "8px" }}>
          <div
            className="d-flex justify-content-center mb-4"
            style={{ marginTop: "4rem" }}
          >
            <h4>{location}</h4>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <button onClick={handleClick} className="button">
              Check Availability
            </button>
          </div>
          <h4>Details</h4>
          <p>{details}</p>
          <h4>Main Amenities</h4>
          <ul className="amenities-list">
            {amenities.map((amenity, index) => (
              <li key={index} className="amenity-item">
                {amenity}
              </li>
            ))}
          </ul>
          <h4>Pricing</h4>
          <p>{price}</p>
          <h4>Check-in</h4>
          {checkinLines.map((line, index) => (
            <p key={index} style={{ marginBottom: "0.5rem" }}>
              {line}
            </p>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default RentalDetail;
