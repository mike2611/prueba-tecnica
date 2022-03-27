import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Progress from './Progress';
import NavButtons from './NavButtons';

const ContactDetails = () => (
  <>
    <section className="container container-width border py-4">
      <div>
        <Progress first={50} second={0} third={0} />
        <hr />
      </div>
      <div>
        <h2 className="title-purple">Contact Details</h2>
        <p className="text-purple">Lorem ipsum dolor sit arnet consectetur adispisc.</p>
      </div>
      <Form className="container-sm">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="John Carter" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="Email address" />
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control placeholder="(123) 456 - 7890" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCompany">
            <Form.Label>Company</Form.Label>
            <Form.Control placeholder="Company name" />
          </Form.Group>
        </Row>
      </Form>
    </section>
    <NavButtons previous="" next="/services" />
  </>

);

export default ContactDetails;
