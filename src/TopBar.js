import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from './assets/logo.png';

const TopBar = () => (
  <Navbar className="mt-3" bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home"><img src={logo} alt="logo" className="top-logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto mb-1">
          <btn className="purple top-btn btn-style px-5 py-3" type="button">Clone now</btn>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopBar;
