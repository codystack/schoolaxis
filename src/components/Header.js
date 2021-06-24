import React from 'react'
import './Header.css'
import logo from '../logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import {Navbar, Nav, Button} from 'react-bootstrap'


function Header() {

    return (
        <React.StrictMode>
            <Router>
                <Switch>
                    <div className='header'>
                        <div className='headercontent'>
                            <img className='logo' src={logo} alt="logo" />
                            <div className='headerright'>

                                <Navbar className="navbarbg" expand="lg">
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="mr-auto">
                                            <Nav.Link href="#home" className="login">Login</Nav.Link>
                                            <Button href="#link" className="ButtonPrimary">Signup</Button>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>

                            </div>
                        </div>
                    </div>
                </Switch>
            </Router>
        </React.StrictMode>
    )
}

export default Header
