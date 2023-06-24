import { Row, Col } from "reactstrap";
import RentalCard from "./RentalCard";
import { Rentals } from "../../data/Rentals";

const RentalList = ({ rental }) => {
  console.log(Rentals);

  return (
    <Row className="ms-auto">
      {Rentals.map((rental) => {
        return (
          <Col
            sm="6"
            md="5"
            lg="3"
            className="m-4 hover-cursor"
            key={rental.id}
          >
            <RentalCard rental={rental} />
            <div className="rental-text"></div>
          </Col>
        );
      })}
    </Row>
  );
};

export default RentalList;
