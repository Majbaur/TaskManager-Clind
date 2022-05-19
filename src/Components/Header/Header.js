import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Header.css"
import logo from '../../images/carLogo.jpg'


const Header = () => 
{
    const [user] = useAuthState(auth);

    const handleSignout =() =>
    {
        signOut(auth);
    }

    const addItemLink = <Nav.Link style={{color:'black'}} as={Link} to='/addItem'>Add Item</Nav.Link>
    const myItemsLink = <Nav.Link style={{color:'black'}} as={Link} to='/myitems'>My Items</Nav.Link>

    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" className='p-3' fixed='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='d-flex align-items-center brand'>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            

                            {
                                user ? addItemLink : null
                            }

                            {
                                user? myItemsLink : null
                            }

                            

                            {
                                user ? <button className='btn btn-link text-decoration-none text-black' onClick={handleSignout}>Logout</button> : <Nav.Link as={Link} to='/login'>Log In</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;