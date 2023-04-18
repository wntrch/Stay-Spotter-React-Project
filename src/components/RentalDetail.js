import { Card, CardImg, Col, Row } from "reactstrap";

const RentalDetail = ({ rental }) => {
  const { image, name, additionalImages, link } = rental;

  const handleClick = () => {
    const url =
      "https://www.airbnb.com/rooms/40711723?check_in=2023-05-13&federated_search_id=f5dd3120-89e1-4c93-b8d4-d620ddf1104d&source_impression_id=p3_1677813421_ONKaUPjEjqCJG9eo&guests=1&adults=1&check_out=2023-05-20";
    window.location.href = url;
  };

  return (
    <div className="detail-page-container">
        <Row>
          <Col sm="6" md="4" lg="5" className="m-4">
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
              <Col sm="6" md="5" lg="3" className="m-4 hover-cursor">
                <button onClick={handleClick}>Book Rental</button>
              </Col>
            </Row>
          </Col>
        </Row>
    </div>
  );
};

export default RentalDetail;
