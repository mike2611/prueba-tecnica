import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavButtons = ({ previous, next }) => (
  <section className="d-flex justify-content-center justify-content-md-around  container my-5">
    <div>
      <NavLink to={previous} className={(previous === '' ? 'd-none' : 'nav-back-btn nav-btn btn-style px-5 py-3 mx-3 text-center')} type="button">Previous step</NavLink>
    </div>
    <div>
      <NavLink to={next} className={(next === '' ? 'd-none' : 'purple nav-btn btn-style px-5 py-3 mx-3 text-center')} type="button">Next step</NavLink>
    </div>
  </section>
);

NavButtons.propTypes = {
  previous: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

export default NavButtons;
