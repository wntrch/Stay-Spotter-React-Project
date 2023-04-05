import { Card, CardImg } from "reactstrap";

const DisplayRentalCard = ({ rental }) => {
console.log(rental);
  const { name, image } = rental;

  return (
      <Card className="rental-card">
        <CardImg width="100%" src={image} alt={name} />
      </Card>
  );
};

export default DisplayRentalCard;



