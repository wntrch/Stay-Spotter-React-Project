import { Card, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

const RentalCard = ({ rental }) => {
  console.log(rental);
  const { name, image, id } = rental;

  return (
    <Link to={`/listings/${id}`}>
      <Card>
        <CardImg className="rental-card-img" src={image} alt={name} />
      </Card>
    </Link>
  );
};

export default RentalCard;
