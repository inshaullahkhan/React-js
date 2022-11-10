// import React from 'react';
import React, { useState as useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'
const contentView = ()=>{

  const[blogs , Setblogs] = useState([]);
  const [search , SetSearch] = useState(" ");



}


function ColorSchemesExample() {

  const SearchBlogs =(e)=>{
    e.prevent.default();
    Seblogs(blogs.filter((blog)=>
    Header.Body.toLowerCase().include(search.toLowerCase()))
    )
  }

  return (
<div>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className=" nav">
          <Container fluid>
            <Navbar.Brand href="#" className='text-light' >InshaKundi</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='bg-primary' />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='ofcav'>
                <Nav className="justify-content-center flex-grow-1" style={{color:'white'}} >
                  <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
                  <Nav.Link href="#about" className='text-light' >About</Nav.Link>
                  <Nav.Link href="#services" className='text-light' >Services</Nav.Link>
                  <Nav.Link href="#team" className='text-light' >Team</Nav.Link>
                  <Nav.Link href="#pricing" className='text-light' >Pricing</Nav.Link>
                  <Nav.Link href="#faq" className='text-light' >FAQ</Nav.Link>
                  <Nav.Link href="#contact" className='text-light'>Contact Us</Nav.Link>
                </Nav>
                {/* <Form className="d-flex" onSubmit={(e)=>{SearchBlogs(e)}}>
                  <Form.Control
                    type="text" 
                    onChange={(e)=>{SetSearch(e.target.value)}}
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                 
                  <Button type='submit' variant="outline-success text-light">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
  



{/* <nav className="navbar navbar-expand-lg navbar-light bg-black">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item text-danger">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Portfolio</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contact</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav> */}

</div>

  );
}

export default ColorSchemesExample;