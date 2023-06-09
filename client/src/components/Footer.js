import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col xs={{ size: 4, offset: 1 }} sm="2">
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/listings" className="footer-link">
                  Listing
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs="6" sm="3" className="text-center"></Col>
          <Col sm="4" className="text-center">
            <div style={{ paddingTop: "2.0rem"}}>
            <a
              role="button"
              className="footer-link2"
              href="tel:+12065551234"
            >
              <i className="fa fa-phone" /> 1-206-555-1234
            </a>
            <br />
            <a
              role="button"
              className="footer-link2"
              href="mailto:notreal@notreal.co"
            >
              <i className="fa fa-envelope-o" />
              vacation@stayspotter.com
            </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
