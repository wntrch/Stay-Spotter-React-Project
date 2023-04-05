import { Card, CardImg } from "reactstrap";

const RentalCard = ({ rental }) => {
console.log(rental);
  const { name, image } = rental;

  return (
      <Card>
        <CardImg  className="rental-card-img" src={image} alt={name} />
      </Card>
  );
};

export default RentalCard;



