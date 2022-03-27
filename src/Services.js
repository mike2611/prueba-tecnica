import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Progress from './Progress';
import devCard from './assets/devCard.png';
import NavButtons from './NavButtons';

const Services = () => (
  <>
    <section className="container container-width border py-4">
      <div>
        <Progress />
        <hr />
      </div>
      <div>
        <h2 className="title-purple">Our services</h2>
        <p className="text-purple">Please select which sevice you arre interested in.</p>
      </div>
      <div>
        <Row xs={1} md={2} className="g-4 mb-4">
          <Col className="d-flex d-md-block justify-content-center">
            <Card className="services-card">
              <Card.Body className="d-flex align-items-center">
                <img src={devCard} alt="dev" />
                <Card.Text className="title-pruple fw-bold">
                  Development
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex d-md-block justify-content-center">
            <Card className="services-card">
              <Card.Body className="d-flex align-items-center">
                <img src={devCard} alt="other" />
                <Card.Text className="title-pruple fw-bold">
                  Web Design
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row xs={1} md={2} className="g-4 mb-4">
          <Col className="d-flex d-md-block justify-content-center">
            <Card className="services-card">
              <Card.Body className="d-flex align-items-center">
                <img src={devCard} alt="marketing" />
                <Card.Text className="title-pruple fw-bold">
                  Marketing
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex d-md-block justify-content-center">
            <Card className="services-card">
              <Card.Body className="d-flex align-items-center">
                <img src={devCard} alt="other" />
                <Card.Text className="title-pruple fw-bold">
                  Other
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
    <NavButtons previous="/" next="/budget" />
  </>
);

export default Services;
