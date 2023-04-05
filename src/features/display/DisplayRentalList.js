import { Row, Col } from "reactstrap";
import DisplayRentalCard from "./DisplayRentalCard";
import { Rentals } from "../../data/Rentals";

const RentalList = () => {
	console.log(Rentals)

	return (
	<Row className="ms-auto">
		{Rentals.map((rental) => {
			return (
				<Col sm="6" md="5" lg="3" className="m-4 hover-cursor"
				key={rental.id}
				>
					<DisplayRentalCard rental={rental} />
				</Col>
				);
		})}
	</Row>
	);
};

export default RentalList;