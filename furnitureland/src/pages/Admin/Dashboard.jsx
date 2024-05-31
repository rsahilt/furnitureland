import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



const dashboard = () => {
  return (
        <div>
            <Navbar expand="lg" style={{backgroundColor:'#3c3e56'}} className='admin-nav'>
                <Container fluid>
                    <Navbar.Brand href="#" style={{color:'#fff', paddingLeft:'20px'}}>Furniture Land</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex" style={{marginLeft:'71%'}}>
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button className='searchbuttonhome' type="submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </Button>
                        </Form>
                        <Link to="#" style={{marginLeft:'10px', color:'white', textDecoration:'none'}}>Sign Out</Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
  )
}

export default dashboard