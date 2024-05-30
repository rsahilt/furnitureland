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
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Header = () => {
    const location = useLocation();
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
                <Navbar expand="lg" style={{paddingLeft:'50px'}}>
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>Home</Nav.Link>
                                <Nav.Link as={Link} to="/showroom" className={`nav-item ${location.pathname === '/showroom' ? 'active' : ''}`}>Showroom</Nav.Link>
                                <Nav.Link as={Link} to="/products" className={`nav-item ${location.pathname === '/products' ? 'active' : ''}`}>Products</Nav.Link>
                                <Nav.Link as={Link} to="/about" className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Nav.Link>
                                <Nav.Link as={Link} to="/contact" className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Nav.Link>
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
                                        <Button className='searchbuttonhome' type="submit">
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