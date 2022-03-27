import logo from './assets/logo.png';

const Footer = () => (
  <section className="d-flex flex-column flex-md-row align-items-center justify-content-around">
    <div className="order-1 order-md-0">
      <img src={logo} alt="logo" className="d-none d-md-block footer-logo me-1" />
      <p className="text-muted footer-info mt-3 mt-md-1">Copyright &copy; 2021 BRIX Templates | All Rights Reserved </p>
    </div>
    <div className="d-flex align-items-center justify-content-center order-0 order-md-1 mb-2">
      <input type="name" id="email" className="form-control-sm footer-input" placeholder="Enter your email" required="required" />
      <btn className="purple footer-btn btn-style px-4 py-2 ms-2" type="button">Subscribe</btn>
    </div>
  </section>
);

export default Footer;
