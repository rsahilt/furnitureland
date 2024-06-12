import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import AdminNav from '../../components/Admin/AdminNav';
import AdminSidebar from '../../components/Admin/AdminSidebar';

const AddUser = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      retypePassword: '',
      phoneNumber: '',
      city: '',
      address: '',
      province: '',
      country: '',
      gender: '',
      isAdmin: false,// Add isAdmin field
      profilepic: null
    });
  
    const [errors, setErrors] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      retypePassword: '',
      phoneNumber: '',
      city:'',
      address:'',
      province:'',
      gender: '',
    });
  
    const handleChange = (e) => {
      const { name, value, type, checked, files } = e.target;
      const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    
      setFormData({
        ...formData,
        [name]: newValue
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        console.log(formData);
        // You can submit the form here if it's valid
      } else {
        console.log("Form submission cancelled due to errors.");
      }
    };
  
    const validateForm = () => {
      let valid = true;
      const newErrors = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        retypePassword: '',
        phoneNumber: '',
        gender: '',
        city:'',
        address:'',
        province:''
      };
  
      if (formData.firstName.trim() === '') {
        newErrors.firstName = 'First name is required';
        valid = false;
      }
  
      if (formData.lastName.trim() === '') {
        newErrors.lastName = 'Last name is required';
        valid = false;
      }
  
      if (formData.email.trim() === '') {
        newErrors.email = 'Email is required';
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Invalid email address';
        valid = false;
      }
  
      if (formData.password === '') {
        newErrors.password = 'Password is required';
        valid = false;
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters long';
        valid = false;
      }
  
      if (formData.retypePassword !== formData.password) {
        newErrors.retypePassword = 'Passwords do not match';
        valid = false;
      }
  
      if (formData.phoneNumber.trim() !== '' && !/^\d{10}$/.test(formData.phoneNumber)) {
        newErrors.phoneNumber = 'Invalid phone number';
        valid = false;
      } else if (formData.phoneNumber.trim() === '') {
        newErrors.phoneNumber = 'Phone number is required';
        valid = false;
      }
  
      if (formData.gender === '') {
        newErrors.gender = 'Gender is required';
        valid = false;
      }

      if (formData.city === '') {
        newErrors.city = 'City is required';
        valid = false;
      }
      
      if (formData.province === '') {
        newErrors.province = 'Province is required';
        valid = false;
      }
      
      if (formData.address === '') {
        newErrors.address = 'Address is required';
        valid = false;
      }
  
      setErrors(newErrors);
      return valid;
    };
  

  return (
    <>
      <AdminNav />

      <section className="admin-dashboard">
        <div className="sidebar-left">
          <AdminSidebar />
        </div>

        <div className="dashboard-content">

        <Form onSubmit={handleSubmit} style={{ width: '70%', margin: '0 auto' }} noValidate>
            
          <h1 style={{ fontWeight: '500', fontSize: '1.5em', padding: '40px 0 20px 0' }}>Add a new user</h1>
          <p style={{color:'red'}}><sup>*</sup>Only accepting clients whose address is in Nepal</p>

            <Row>
              <Col>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name:</Form.Label>
                  <Form.Control type="text" name="firstName" placeholder="Firstname" value={formData.firstName} onChange={handleChange} />
                  {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name:</Form.Label>
                  <Form.Control type="text" name="lastName" placeholder="Lastname" value={formData.lastName} onChange={handleChange} />
                  {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
                </Form.Group>
              </Col>
              
            </Row>
            <Row>
            <Col>
                <Form.Group controlId="gender">
                  <Form.Label>Gender:</Form.Label>
                  <Form.Control as="select" name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Control>
                  {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                  {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
            <Col>
                <Form.Group controlId="password">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
                  {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </Form.Group>
              </Col>
            </Row>

            <Row>
            <Col>
                <Form.Group controlId="retypePassword">
                  <Form.Label>Re-type Password:</Form.Label>
                  <Form.Control type="password" placeholder="Re-type password" name="retypePassword" value={formData.retypePassword} onChange={handleChange} />
                  {errors.retypePassword && <p style={{ color: 'red' }}>{errors.retypePassword}</p>}
                </Form.Group>
              </Col>
            </Row>

            <Row>
            <Col>
                <Form.Group controlId="phoneNumber">
                  <Form.Label>Phone Number:</Form.Label>
                  <Form.Control type="tel" name="phoneNumber" placeholder="Phone number" value={formData.phoneNumber} onChange={handleChange} />
                  {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="city">
                  <Form.Label>City:</Form.Label>
                  <Form.Control type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
                  {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="address">
                  <Form.Label>Address:</Form.Label>
                  <Form.Control type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
                  {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
                </Form.Group>
              </Col>
            </Row>

            <Row>
            <Col>
                <Form.Group controlId="province">
                  <Form.Label>Province:</Form.Label>
                  <Form.Control type="text" name="province" placeholder="Province" value={formData.province} onChange={handleChange} />
                  {errors.province && <p style={{ color: 'red' }}>{errors.province}</p>}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="country">
                  <Form.Label>Country:</Form.Label>
                  <Form.Control type="text" name="country" value="Nepal" disabled onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="profilepic">
                  <Form.Label>Display Picture:</Form.Label>
                  <Form.Control type="file" name="profilepic" onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit" style={{marginTop: '20px'}}>
              Add User
            </Button>
          </Form>
        </div>
      </section>
    </>
  );
};

export default AddUser;
