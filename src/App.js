import React from 'react'
import './App.css'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          {/* <img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top" />  */}
          SQ Festival
        </Navbar.Brand>
      </Navbar>
      <Container fluid style={{ backgroundColor: '#71108A', height: '100vw' }}>
        <Row>
          <Col xs lg="2"></Col>
          <Col md="auto">
            <Form style={{marginTop: '50px'}}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll send you a personal link to sign up and set your password.
                </Form.Text>
              </Form.Group>

              <Button variant="secondary" size="lg" type="submit">
                Sign Up
              </Button>
            </Form>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
