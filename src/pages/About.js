import TopNavbar from "../components/TopNavbar";
import {Col, Row, Container, Card, CardBody} from 'reactstrap';
import hammock from '../assets/img/hammock.png';
import beachtent from '../assets/img/beachtent.jpeg';

const About = () => {
    return (
      <div>
        <TopNavbar />
        <Container>
          <Row className="Abouts">
            <Col sm='12'>
            <h1 className="Text">About Us</h1>
                <img className="Pic" src={hammock} />
                <div className="Contentp" col-sm>
                  <p>Our mission is to find every <br />family the space they need to relax, 
                            reconnect,<br /> and enjoy precious time away together.</p>
                </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="Believe" >
              <h1 className="Content">We believe in family connection</h1>
              </div>
            </Col>
          </Row>
          <Col>
              <Card className='bg-light mt-4'>
                  <CardBody className="Contentpg">

                      <p >We need each other now more than ever, and we all want more quality time with the people we love. Our focus is on the importance of connection and the joy that celebrating meaningful moments together brings. 
                                  That’s the magic we’re trying to capture. That’s why we’re here.</p>          

                  </CardBody>
              </Card>
          </Col>
          <Row>
          <Col sm='12'>
                <h1 className="Text">Our Motto</h1>
                <img className="Pic2" src={beachtent} />
                <p className="Contentps">Collect Moments, <br />Not Things.</p>
            </Col>
          </Row>
          </Container>


      </div>
    )
  };

export default About;