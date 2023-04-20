import { Card, CardImg, CardText } from "reactstrap";
import { Link } from "react-router-dom";

const RentalCard = ({ rental }) => {
  console.log(rental);
  const { name, image, id } = rental;

  return (
    <Link to={`/listings/${id}`} className="rental-link">
      <div className="rental-card-wrapper">
        <Card color="dark">
          <CardImg
            className="rental-card-img"
            src={image}
            alt={name}
            style={{ marginBottom: "-1px", borderRadius: "5px 5px 0 0" }}
          />
        </Card>
        <CardText className="rental-text">{name}</CardText>
      </div>
    </Link>
  );
};

export default RentalCard;
