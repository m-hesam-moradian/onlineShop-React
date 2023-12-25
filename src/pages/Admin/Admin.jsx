import React from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";

export default function Admin() {
  return (
    <div>
      <Navbar bg="dark" variant="dark " >
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <Form.Control type="text" placeholder="Search" className="me-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}
