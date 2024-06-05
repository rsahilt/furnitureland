import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faTachometer, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Nav, Dropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Admin.css';

function AdminSidebar() {
  return (
    <div className='admin-sidebar'>
      <Nav className="flex-column admin-sidebar-list">
        <Nav.Item style={{borderRadius:'0'}}>
          <Nav.Link href="#" className="admin-link text-black">
            <FontAwesomeIcon icon={faTachometer} className="me-2 admin-faicon" /> Dashboard
          </Nav.Link>
          
        </Nav.Item>

        <Nav.Item>
          <Dropdown>
            <Dropdown.Toggle variant="link" style={{textDecoration:'none'}} id="dropdown-basic" className="admin-link text-black">
              <FontAwesomeIcon icon={faCouch} className="me-2 admin-faicon" /> Products
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#action/1">View All Products</Dropdown.Item>
              <Dropdown.Item href="#action/2">Add New Product</Dropdown.Item>
              <Dropdown.Item href="#action/3">Edit/Remove Product</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>

        <Nav.Item>
          <Dropdown>
              <Dropdown.Toggle variant="link" style={{textDecoration:'none'}} id="dropdown-basic" className="admin-link text-black">
                <FontAwesomeIcon icon={faUser} className="me-2 admin-faicon" /> Users
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#action/1">View All Users</Dropdown.Item>
                <Dropdown.Item href="#action/2">Add New User</Dropdown.Item>
                <Dropdown.Item href="#action/3">Edit/Remove User</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link href="#" className="admin-link text-black">
            <FontAwesomeIcon icon={faEnvelope} className="me-2 admin-faicon" /> Inbox
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default AdminSidebar;
