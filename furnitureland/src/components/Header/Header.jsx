import './Header.css'
import logo from '../../assets/furniturelandlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={logo} alt="Furniture Land Logo" className='image-logo'/>
        </div>

        <div className="nav">
            <div className="utility-bar">
                <a href="#" className='signinstatus'>Login</a>
                &nbsp;|&nbsp;
                <a href="#" className='signinstatus'>Register</a>
                &nbsp;&nbsp;
                <a href="#" className='signinstatus'>
                    <FontAwesomeIcon icon={faCartShopping} />
                </a>
            </div>

            <div className="menubar">
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className='nav-item' href="#">Home</Nav.Link>
                                <Nav.Link className='nav-item' href="#">Showroom</Nav.Link>
                                <Nav.Link className='nav-item' href="#">Products</Nav.Link>
                                <Nav.Link className='nav-item' href="#">About Us</Nav.Link>
                                <Nav.Link className='nav-item' href="#">Contact Us</Nav.Link>
                                <Nav.Link className='nav-item' href="#">Brand</Nav.Link>
                            </Nav>

                            <Form inline>
                                <Row>
                                    <Col xs="auto">
                                        <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2 searchbox"
                                        />
                                    </Col>
                                    <Col xs="auto">
                                        <Button className='btn-outline-success' type="submit">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </Button>
                                    </Col>
                                </Row>
                        </Form>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    </header>
  )
}

export default Header