import { Card, CardImg, CardImgOverlay } from "reactstrap";
import { Link } from "react-router-dom";

const RentalCard = ({ rental }) => {
  const { id, name, image } = rental;

  return (
    <Link to={`${id}`}>
      <Card className="rental-card">
        <CardImg width="100%" src={image} alt={name} />
      </Card>
    </Link>
  );
};

export default RentalCard;
