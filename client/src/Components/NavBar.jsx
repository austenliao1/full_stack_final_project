import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./../App.css";

function NavBar() {
  let navigate = useNavigate();
  return (
    <Navbar id="NavBar" bg="white" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand
          id="Logo"
          href="/recipes"
          style={{ fontSize: "30px", marginBottom: "0" }}
        >
          Foodstagram
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link id="linkOTD" href="#saved">
              SAVED
            </Nav.Link>
            <Nav.Link id="linkOTD" href="">
              PROFILE
            </Nav.Link>
            <Nav.Link id="linkOTD" href="/">
              LOG OUT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
