import ContactPage from '../components/ContactPage';
import TopNavbar from '../components/TopNavbar';
import { Row } from "reactstrap";

const ContactUs = () => {
    return (
      <div>
        <Row>
            <TopNavbar />
        </Row>
        <ContactPage />
      </div>
    );
  };

export default ContactUs;