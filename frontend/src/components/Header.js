import React from 'react'
import { Container, Nav, Navbar}  from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Header() {
  return (
    <div>
        <Navbar bg="dark" variant='dark' collapseOnSelect>
      <Container>

      <LinkContainer to="/">
        <Navbar.Brand>GUvi Learning Portal <i class="fa-solid fa-house"></i> </Navbar.Brand>
       </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0" style={{maxHeight : '100px'}}>

          <LinkContainer to="/signup">
            <Nav.Link><button cariant='success btn-block btn'>Signup</button></Nav.Link>
            </LinkContainer>


            <LinkContainer to="/enroll">
            <Nav.Link>Enroll</Nav.Link>
            </LinkContainer>


            <LinkContainer to="/learning">
            <Nav.Link>My Learning</Nav.Link>
            </LinkContainer>


            <LinkContainer to="/profile">
            <Nav.Link>Profile</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/login">
            <Nav.Link>Login <i class="fa-solid fa-right-to-bracket fa-beat" style={{color: '#64f702'}}></i></Nav.Link>
           </LinkContainer>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}
