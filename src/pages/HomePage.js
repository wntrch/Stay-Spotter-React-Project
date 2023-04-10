import TopNavbar from "../components/TopNavbar";
import { Row } from "reactstrap";
import Banner from "../assets/img/homepagebanner.png";

const HomePage = () => {
  return (
    <div>
      <TopNavbar />
      <div className="banner-container">
        <img
          src={Banner}
          alt="beachside banner"
          style={{ width: "100%", height: "30vh", objectFit: "cover" }}
        />
        <div>
          <h2 className="banner-text">Book your next favorite vacation rental spot</h2>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter your next destination..."
            className="search-bar"
          />
          <button className="search-button">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <Row></Row>
    </div>
  );
};

export default HomePage;
