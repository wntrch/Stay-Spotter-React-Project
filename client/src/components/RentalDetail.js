import { CardImg, Col, Row } from "reactstrap";

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
      <Row className="rental-detail-title">
        <Col sm="12">
          <h2 className="text-center mt-4 mb-4" style={{ fontWeight: "bold" }}>
            {name}
            <h6 style={{ marginTop: "0.25rem" }}>{location}</h6>
          </h2>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="6">
          <CardImg src={image} alt={name} style={{ width: "100%" }} />
          <div className="d-flex" style={{ overflow: "hidden" }}>
            {additionalImages.map((image, index) => {
              return (
                <CardImg
                  key={index}
                  src={image}
                  alt={`Additional image ${index + 1}`}
                  className="additional-images"
                  style={{
                    flex: "1 1 0",
                    objectFit: "cover",
                  }}
                />
              );
            })}
          </div>
        </Col>
        <Col
          sm="12"
          md="6"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            maxHeight: "100vh",
          }}
        >
          <div className="d-flex justify-content-center align-items-center mt-4">
            <div>
              <button onClick={handleClick} className="button">
                Check Availability
              </button>
            </div>
          </div>
          <hr className="section-divider" />

          <div>
            <h4 style={{ fontWeight: "bold" }}>Details</h4>
            <p>{details}</p>
            <h4 style={{ fontWeight: "bold" }}>
              <hr className="section-divider" />
              Main Amenities
            </h4>
            <ul className="amenities-list">
              {amenities.map((amenity, index) => (
                <li key={index} className="amenity-item">
                  {amenity}
                </li>
              ))}
            </ul>
            <hr className="section-divider" />
            <h4 style={{ fontWeight: "bold" }}>Pricing</h4>
            <p style={{}}>{price}</p>
            <hr className="section-divider" />
            <h4 style={{ fontWeight: "bold" }}>Check-in</h4>
            {checkinLines.map((line, index) => (
              <p key={index} style={{ marginBottom: "0.25rem" }}>
                {line}
              </p>
            ))}
          </div>
        </Col>
      </Row>
      <Row
        className="rental-detail-title pt-4 pb-4"
        style={{ height: "90px" }}
      ></Row>
    </div>
  );
};

export default RentalDetail;
