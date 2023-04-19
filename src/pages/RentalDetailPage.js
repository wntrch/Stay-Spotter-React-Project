import { Row } from "reactstrap";
import { Rentals } from "../data/Rentals";
import RentalDetail from "../components/RentalDetail";
import TopNavbar from "../components/TopNavbar";
import { useParams } from "react-router-dom";

const RentalDetailPage = () => {
  const { id } = useParams();
  const rentalId = Number(id);
  const rental = Rentals.find((rental) => rental.id === rentalId);
  console.log("rental", rental);

  return (
    <div>
      <TopNavbar />
      <Row>
        <RentalDetail rental={rental} />
      </Row>
    </div>
  );
};

export default RentalDetailPage;
