import React, { useState } from 'react';
import { useEffect } from 'react';
import AdminNav from '../../components/Admin/AdminNav';
import AdminSidebar from '../../components/Admin/AdminSidebar';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchAllUsers = async () => {
          try {
            const res = await axios.get("http://localhost:8080/users")
            setUsers(res.data)
          } catch (err) {
            console.log(err)
          }
        }
        fetchAllUsers()
      }, []);

  return (
    <>
      <AdminNav />

      <section className="admin-dashboard">
        <div className="sidebar-left">
          <AdminSidebar />
        </div>

        <div className="dashboard-content">
            <Link to="/admin/adduser" style={{color:'#fff', textDecoration:'none'}}>
                <button className="btn btn-primary" style={{borderRadius:'6px', margin:'10px'}}>
                    Add User
                </button>
            </Link>
            <Table Striped>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            users.map(user=> (
                    <tr>
                        
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.gender}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.address}, {user.city}, {user.province}, {user.country}</td>
                        <td>{user.isAdmin}</td>
                        <td>
                            <Link to="#" className='editbtn'
                            style={{backgroundColor:'green', color:'#fff', 
                            textDecoration:'none', padding:'9.3px 15px',
                            borderRadius:'6px'}}>Edit</Link>
                            <Link to="#">
                                <button className="btn btn-danger" style={{marginBottom:'3.5px', marginLeft:'5px'}}>Delete</button>
                            </Link>
                        </td>
                            
                    </tr>))}
                </tbody>
            </Table>
        </div>
      </section>
    </>
  )
}

export default User