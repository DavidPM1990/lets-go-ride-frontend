// import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../context/auth.context';
import { useContext } from 'react';

function Navigation() {

  const { logOut, isLoading, isLoggedIn, user } = useContext(AuthContext)



  return (
    <>
      <Navbar className='bgColor' variant="dark">
        <Container>
          <Navbar.Brand href="/">Let's Go Ride</Navbar.Brand>
          <Nav className="me-auto">
            {!isLoading & isLoggedIn ? (
              <>
                <Nav.Link className='nameColor' href="/profile">{user.username}</Nav.Link>
                <Nav.Link href="/create-event">Create Event</Nav.Link>
                <Nav.Link href="/events">Events</Nav.Link>
                <Nav.Link href='/' onClick={() => logOut()}>Log Out</Nav.Link>
              </>
            ) : <>
              <Nav.Link href="/login">Log In</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </>}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Navigation;















