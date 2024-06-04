import './Dashboard.css'
import AdminNav from '../../components/Admin/AdminNav'
import AdminSidebar from '../../components/Admin/AdminSidebar'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

const dashboard = () => {
  return (
        <>
            <AdminNav />

            <section className="admin-dashboard">
                <div className="sidebar-left">
                    <AdminSidebar />
                </div>

                <div className="dashboard-content">
                    <h1 style={{fontWeight:'500', fontSize:'1.5em', padding:'10px'}}>Welcome to Dashboard</h1>

                    <div className="admin-summary">
                        <Card style={{ width: '18rem', marginRight:'25px' }}>
                            <Card.Body>
                            <Card.Title>Admins</Card.Title>
                            <Card.Text>
                                <FontAwesomeIcon icon={faUser} style={{fontSize: '2em'}}/>
                            </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem', marginRight:'25px' }}>
                            <Card.Body>
                            <Card.Title>Products</Card.Title>
                            <Card.Text>
                                <FontAwesomeIcon icon={faCouch} style={{fontSize: '2em'}}/>
                            </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem', marginRight:'25px' }}>
                            <Card.Body>
                            <Card.Title>Feedbacks</Card.Title>
                            <Card.Text>
                                <FontAwesomeIcon icon={faEnvelope} style={{fontSize: '2em'}}/>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>

        </>
  )
}

export default dashboard