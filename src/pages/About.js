import TopNavbar from "../components/TopNavbar";
import {Col, Row, Container, Card, CardBoddy, CardHeader} from 'reactstrap';
import Walk from '../assets/img/walk.png'

const About = () => {
    return (
      <Container>
        <TopNavbar />
        <Row className="Abouts">
          <Col sm='12'>
              <h3>About Us</h3>
              <p>Our mission is to find every family the space they need to relax, reconnect, and enjoy precious time away together.</p>
          </Col>
        </Row>
        <Row>
          <Col className='Right' sm='12' >
            <img className="Pic" src={Walk} />
            <div>
            <h2 className="Content">We believe in family connection</h2>
            <p>We need each other now more than ever, and we all want more quality time with the people we love. Our focus is on the importance of connection and the joy that celebrating meaningful moments together brings. 
            That’s the magic we’re trying to capture. That’s why we’re here.</p>          
            </div>
          </Col>
        </Row>
      </Container>
    )
  };

export default About;