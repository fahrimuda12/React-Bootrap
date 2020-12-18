import React, {Component} from 'react';
import { Navbar, Nav, Form, FormControl, Button, Image, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LogoLindir from '../assets/images/logo-ico.png'; 

class NavbarMe  extends Component {
    render(){
        return (
            <Navbar bg="light" expand="lg" sticky="top" variant="light" className="shadow">
                    <Navbar.Brand href="#home" className="ml-lg-5"><Image src={LogoLindir} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="button-dropdown" />
                    <Navbar.Collapse id="button-dropdown" className="mt-4">
                        <Nav className="mx-lg-auto">
                            <Form>
                                <Form.Row>
                                    <Col sm={8}>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2 rounded-pill search" type="search" />
                                    </Col>
                                    <Col xs="auto">
                                    <Button type="submit"  className="rounded-circle my-2 my-sm-0"><FontAwesomeIcon icon="search" /></Button>
                                    </Col>
                                </Form.Row>
                            </Form>
                            <Nav.Link href="/" className="text-primary link-bottom">Home</Nav.Link>
                            <Nav.Link href="#feature" className="text-primary link-bottom">Feature</Nav.Link>
                            <Nav.Link href="#link" className="text-primary link-bottom">Categories</Nav.Link>
                            <Nav.Link href="#link" className="text-primary link-bottom">Pricing</Nav.Link>
                            <Nav.Link href="#link" className="link-bottom text-primary">System</Nav.Link>
                            <Nav.Link href="#link" className="link-bottom text-primary">News</Nav.Link>
                            <Nav.Link href="#link" className="mx-2">
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="switchDark" />
                                    <label className="custom-control-label" for="switchDark"></label>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#link" className=" btn  btn-primary text-white tombol px-3 rounded-pill">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarMe;