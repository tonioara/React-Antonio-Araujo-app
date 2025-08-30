import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import LogoWeb from '../assets/harrypotter-logo.png';
import CartWidget from './CartWidget';

function NavBarHeader () {
  const stylesLogo = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  }

  return (
    <>
      <Navbar expand="lg" className="bg-dark" variant="dark">
        <Container fluid className="px-5">
          <Navbar.Brand href="#home">
            <img src={LogoWeb} alt='Logo de la Web' style={stylesLogo} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="mx-auto">
            <Nav.Link href="#Gryffindor" className="mx-4">Gryffindor</Nav.Link>
              <Nav.Link href="#Slytherin" className="mx-4">Slytherin</Nav.Link>
              <Nav.Link href="#Hufflepuff" className="mx-4">Hufflepuff</Nav.Link>
              <Nav.Link href="#Ravenclaw" className="mx-4">Ravenclaw</Nav.Link>
            </Nav>
            <Nav  className=" bg-dark" >
              <CartWidget  />
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarHeader;