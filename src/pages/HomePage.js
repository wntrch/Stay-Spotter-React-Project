import TopNavbar from "../components/TopNavbar";
import { Row, Col } from "reactstrap";
import Banner from "../assets/img/homepagebanner.png";
import airbnblogo from "../assets/img/airbnb.jpg";
import tripadvisorlogo from "../assets/img/tripadvisor.jpg";
import vrbologo from "../assets/img/vrbo.jpg";

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
      <div className="content-wrapper">
        <div className="content-container">
          <Row className="text-row">
            <h2>
              Discover the perfect vacation rental at your fingertips. Explore a
              variety of listings from multiple platforms, all in one convenient
              location.
            </h2>
          </Row>
          <Row className="text-row">
            <h2>Featured Rental Categories</h2>
          </Row>
          <Row className="image-row">
            <Col sm="4">
              <a href="/listings">
                <img
                  className="category-image"
                  src="https://a0.muscache.com/im/pictures/55c9be62-0943-43df-98fc-35aa2c8e255d.jpg?im_w=720"
                  alt="beachside rentals"
                />
              </a>
              <h3>Beachside</h3>
            </Col>
            <Col sm="4">
              <a href="/listings">
                <img
                  className="category-image"
                  src="https://a0.muscache.com/im/pictures/f9430b89-b46f-4c1a-a831-843552abd7a6.jpg?im_w=1200"
                  alt="lakefront rentals"
                />
              </a>
              <h3>Lakefront</h3>
            </Col>
            <Col sm="4">
              <a href="/listings">
                <img
                  className="category-image"
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-39758327/original/60631c6a-7e69-407f-a5a5-31218d7906a8.jpeg?im_w=1200"
                  alt="urban retreat rentals"
                />
              </a>
              <h3>Urban Retreats</h3>
            </Col>
          </Row>
        </div>
      </div>
      <div
        className="content-wrapper"
        style={{ background: "#353941", color: "#fff" }}
      >
        <div className="content-container">
          <Row
            className="text-row"
            style={{ textAlign: "left", margin: "1.5rem 0 1.5rem" }}
          >
            <h4 style={{ paddingBottom: "1rem" }}>
              Why Travelers Love Using StaySpotter
            </h4>
            <p>
              StaySpotter offers a unique alternative to traditional hotel
              stays, providing travelers with the comfort, amenities, and
              privacy of home while on vacation. Why choose StaySpotter? Because
              we deliver exceptional value and unforgettable experiences! Say
              goodbye to impersonal hotel rooms—our selection ranges from
              stunning oceanfront homes with private beach access to chic city
              condos in luxurious buildings.
            </p>
            <p>
              StaySpotter connects you to an extensive collection of vacation
              rentals across the globe, each with its own distinct personality.
              Whether you're planning a solo business trip, a romantic getaway,
              or a family vacation, our platform has the perfect option for you.
              With thousands of rentals to choose from, catering to your
              specific needs and travel style has never been easier. Discover
              the StaySpotter difference today and create memories that will
              last a lifetime.
            </p>
          </Row>
        </div>
      </div>
      <div
        style={{
          background: "#353941",
          color: "#FFF",
          padding: "1rem",
          margin: "0 auto",
        }}
      >
        <Row className="text-row">
          <h2>Featured Listings From...</h2>
        </Row>
        <div className="featured-logo-container">
          <Row className="image-row">
            <Col sm="4">
              <a
                href="https://www.airbnb.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="featured-logo" src={airbnblogo} alt="Airbnb" />
              </a>
              <h3>Airbnb</h3>
            </Col>
            <Col sm="4">
              <a
                href="https://www.vrbo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="featured-logo2"
                  style={{ height: "280px" }}
                  src={vrbologo}
                  alt="VRBO"
                />
              </a>
              <h3>VRBO</h3>
            </Col>
            <Col sm="4">
              <a
                href="https://www.tripadvisor.com/Rentals"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="featured-logo"
                  src={tripadvisorlogo}
                  alt="trip advisor"
                />
              </a>
              <h3>TripAdvisor</h3>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
