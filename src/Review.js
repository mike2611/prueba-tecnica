import reviewImg from './assets/reviewImg.png';
import Progress from './Progress';
import NavButtons from './NavButtons';

const Review = () => (
  <>
    <section className="container container-width border py-4">
      <div>
        <Progress first={100} second={100} third={100} />
        <hr />
      </div>
      <div className="d-flex flex-column align-items-center">
        <div>
          <img src={reviewImg} alt="reviewImg" />
        </div>
        <h2 className="title-purple mb-3">Submit your quote request</h2>
        <p className="text-purple text-break text-center review-width mb-4">
          Please review all the information you previously typed in the past steps,
          and if all is okay, submit your message to receive a project quote in 24 - 48 hours.
        </p>
        <button className="purple top-btn btn-style px-5 py-3" type="button">Submit</button>
      </div>
    </section>
    <NavButtons previous="/budget" next="" />
  </>
);

export default Review;
