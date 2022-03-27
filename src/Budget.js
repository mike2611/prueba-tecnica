/* eslint-disable jsx-a11y/label-has-associated-control */
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Progress from './Progress';
import NavButtons from './NavButtons';

const Budget = () => (
  <>
    <section className="container container-width border py-4">
      <div>
        <Progress first={100} second={100} third={50} />
        <hr />
      </div>
      <div>
        <h2 className="title-purple">What&apos;s your project budget?</h2>
        <p className="text-purple">Please select the project budget range you have in mind.</p>
      </div>
      <div>
        <Row xs={1} md={2} className="g-4 mb-4">
          <Col className="d-flex d-md-block justify-content-center">
            <Card className="budget-card">
              <Card.Body className="d-flex align-items-center">
                <Card.Text className="title-pruple fw-bold">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="radioBudget" id="radio1" />
                    <label className="form-check-label" htmlFor="radio1">
                      $5.000 - $10.000
                    </label>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex d-md-block justify-content-center">
            <Card className="budget-card">
              <Card.Body className="d-flex align-items-center">
                <Card.Text className="title-pruple fw-bold">
                  <div className="form-check budget-width">
                    <input className="form-check-input" type="radio" name="radioBudget" id="radio3" />
                    <label className="form-check-label" htmlFor="radio3">
                      $10.000 - $20.000
                    </label>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row xs={1} md={2} className="g-4 mb-2">
          <Col className="d-flex d-md-block justify-content-center">
            <Card className="budget-card">
              <Card.Body className="d-flex align-items-center">
                <Card.Text className="title-pruple fw-bold">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="radioBudget" id="radio3" />
                    <label className="form-check-label" htmlFor="radio3">
                      $20.000 - $50.000
                    </label>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex d-md-block justify-content-center">
            <Card className="budget-card">
              <Card.Body className="d-flex align-items-center">
                <Card.Text className="title-pruple fw-bold">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="radioBudget" id="radio4" />
                    <label className="form-check-label" htmlFor="radio4">
                      $50.000 +
                    </label>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
    <NavButtons previous="/services" next="/review" />
  </>
);

export default Budget;
