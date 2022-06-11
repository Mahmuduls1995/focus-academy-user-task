import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav,Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (

         <>

            <Navbar collapseOnSelect className=" bg-emerald-400" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                       Focus Academy
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link className="text-white hover:bg-purple-700 ease-in duration-300  rounded" as={Link} to="/home">Home</Nav.Link>


                            
                         


                        </Nav>
                        <Nav>

                            {
                                user ?
                                    <span>
                                        <button className="btn btn-primary mr-2" >{user.displayName}</button>
                                        <button className="btn btn-primary" onClick={handleSignOut}>Sign Out</button>
                                    </span>
                                    :
                                    <Nav.Link className="text-white hover:bg-purple-700 ease-in duration-300 rounded" eventKey={2} as={Link} to="login">
                                        Login
                                    </Nav.Link>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>



    );
};

export default Header;
