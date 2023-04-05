import TopNavbar from "../components/TopNavbar";
import { Container } from "reactstrap";
import RentalList from "../features/display/DisplayRentalList";

const ListingsPage = () => {
  return (
    <Container>
      <TopNavbar />
      <RentalList />
    </Container>
  );
};

export default ListingsPage;
