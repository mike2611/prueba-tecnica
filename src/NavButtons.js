import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavButtons = ({ previous, next }) => (
  <section className="d-flex justify-content-around container my-5">
    <NavLink to={previous} className="nav-back-nav-btn btn-style px-5 py-3" type="button">Previous step</NavLink>
    <NavLink to={next} className="purple nav-btn btn-style px-5 py-3" type="button">Next step</NavLink>
  </section>
);

NavButtons.propTypes = {
  previous: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

export default NavButtons;
