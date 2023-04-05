import TopNavbar from "../components/TopNavbar";
import { Container } from "reactstrap";
import RentalList from "../features/display/RentalList";

const ListingsPage = () => {
  return (
    <>
      <TopNavbar />
      <div className="rental-card">
        <RentalList />
      </div>
    </>
  );
};

export default ListingsPage;
