import TopNavbar from "../components/TopNavbar";
import {Col, Row, Container, Card, CardBody, CardHeader} from 'reactstrap';
import Walk from '../assets/img/walk.png'

const About = () => {
    return (
      <div>
        <TopNavbar />
        <Container>
          <Row className="Abouts">
            <Col sm='12'>
                <img className="Pic" src={Walk} />
                <h1 className="Text">About Us</h1>
                <p className="Contentp">Our mission is to find every <br />family the space they need to relax, 
                          reconnect,<br /> and enjoy precious time away together.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
              <h1 className="Content">We believe in family connection</h1>
              </div>
            </Col>
          </Row>
          <Col>
              <Card className='bg-light mt-3'>
                  <CardBody>
                      <blockquote className='blockquote'>
                      <p className="Contentpg">We need each other now more than ever, and we all want more quality time with the people we love. Our focus is on the importance of connection and the joy that celebrating meaningful moments together brings. 
                                  That’s the magic we’re trying to capture. That’s why we’re here.</p>          
                          <footer className='blockquote-footer'>
                                By Leo, and Chris{' '}
                           </footer>
                      </blockquote>
                  </CardBody>
              </Card>
            </Col>
            <Row className='row-content'>
                <Col xs='12'>
                    <h3>Community Partners</h3>
                </Col>
            </Row>
          </Container>


      </div>
    )
  };

export default About;