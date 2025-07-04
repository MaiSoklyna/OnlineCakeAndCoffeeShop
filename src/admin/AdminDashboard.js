import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Tab } from 'react-bootstrap';
import { FaUsers, FaBox, FaClipboardList, FaChartLine } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import UserManagement from './UserManagement';

const AdminDashboard = () => {
  const { currentUser } = useAuth();
  const [activeKey, setActiveKey] = useState('overview');

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h2>Admin Dashboard</h2>
          <p className="text-muted">Welcome {currentUser?.displayName || currentUser?.email?.split('@')[0]}!</p>
        </Col>
      </Row>
      
      <Row>
        <Col md={3} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Nav variant="pills" className="flex-column" activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                <Nav.Item>
                  <Nav.Link eventKey="overview" className="d-flex align-items-center">
                    <FaChartLine className="me-2" /> Overview
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="products" className="d-flex align-items-center">
                    <FaBox className="me-2" /> Products
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="orders" className="d-flex align-items-center">
                    <FaClipboardList className="me-2" /> Orders
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="users" className="d-flex align-items-center">
                    <FaUsers className="me-2" /> Users
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={9}>
          <Tab.Content>
            <Tab.Pane eventKey="overview" active={activeKey === "overview"}>
              <Row>
                <Col md={4} className="mb-4">
                  <Card className="shadow-sm" style={{ borderLeft: "4px solid #a690c9" }}>
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="text-muted mb-1">Total Orders</h6>
                          <h3 className="mb-0">156</h3>
                        </div>
                        <FaClipboardList size={30} color="#a690c9" />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col md={4} className="mb-4">
                  <Card className="shadow-sm" style={{ borderLeft: "4px solid #a690c9" }}>
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="text-muted mb-1">Total Products</h6>
                          <h3 className="mb-0">48</h3>
                        </div>
                        <FaBox size={30} color="#a690c9" />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col md={4} className="mb-4">
                  <Card className="shadow-sm" style={{ borderLeft: "4px solid #a690c9" }}>
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="text-muted mb-1">Total Users</h6>
                          <h3 className="mb-0">312</h3>
                        </div>
                        <FaUsers size={30} color="#a690c9" />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              
              <Card className="shadow-sm mb-4">
                <Card.Header className="bg-transparent">
                  <h5 className="mb-0">Recent Orders</h5>
                </Card.Header>
                <Card.Body>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#ORD-1234</td>
                        <td>John Doe</td>
                        <td>3</td>
                        <td>$45.99</td>
                        <td><span className="badge bg-success">Delivered</span></td>
                      </tr>
                      <tr>
                        <td>#ORD-1235</td>
                        <td>Jane Smith</td>
                        <td>1</td>
                        <td>$24.50</td>
                        <td><span className="badge bg-warning">Processing</span></td>
                      </tr>
                      <tr>
                        <td>#ORD-1236</td>
                        <td>Robert Johnson</td>
                        <td>5</td>
                        <td>$112.75</td>
                        <td><span className="badge bg-info">Shipped</span></td>
                      </tr>
                    </tbody>
                  </table>
                </Card.Body>
              </Card>
            </Tab.Pane>
            
            <Tab.Pane eventKey="products" active={activeKey === "products"}>
              <Card className="shadow-sm">
                <Card.Header className="bg-transparent d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Products Management</h5>
                  <button className="btn btn-sm" style={{ backgroundColor: "#a690c9", color: "white" }}>Add New Product</button>
                </Card.Header>
                <Card.Body>
                  <p className="text-muted">Manage your cake and coffee products here.</p>
                </Card.Body>
              </Card>
            </Tab.Pane>
            
            <Tab.Pane eventKey="orders" active={activeKey === "orders"}>
              <Card className="shadow-sm">
                <Card.Header className="bg-transparent">
                  <h5 className="mb-0">Orders Management</h5>
                </Card.Header>
                <Card.Body>
                  <p className="text-muted">Manage customer orders here.</p>
                </Card.Body>
              </Card>
            </Tab.Pane>
            
            <Tab.Pane eventKey="users" active={activeKey === "users"}>
              <UserManagement />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard; 