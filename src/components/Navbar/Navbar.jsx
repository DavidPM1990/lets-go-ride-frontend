// import React from "react";
import "./Navbar.css";
import { AuthContext } from '../../context/auth.context';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {

  const { logOut, isLoading, isLoggedIn, user } = useContext(AuthContext)



  return (
    <>
      <Navbar className='bgColor' variant="dark">
        <Container>
          <Navbar.Brand to="/"><Link className='navStyle' to={'/'}>Let's Go Ride</Link></Navbar.Brand>
          <Nav className="me-auto">
            {!isLoading & isLoggedIn ? (
              <>
                <Nav.Link as='span' ><Link className='nameColor' to={'/profile'}>{user.username}</Link></Nav.Link>
                <Nav.Link as='span' ><Link className='navStyle' to={'/events'}>Events</Link></Nav.Link>
                <Nav.Link as='span' ><Link className='navStyle' to={'/create-event'}>Create Event</Link></Nav.Link>
                <Nav.Link as='span'><Link className='navStyle' onClick={() => logOut()}>Log Out</Link></Nav.Link>
              </>
            ) : <>
              <Nav.Link as='span' ><Link className='navStyle' to={'/events'}>Events</Link></Nav.Link>
              <Nav.Link as='span' ><Link className='navStyle' to={'/signup'}>Sign up</Link></Nav.Link>
              <Nav.Link as='span' ><Link className='navStyle' to={'/login'}>Log in</Link></Nav.Link>
            </>}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Navigation;















