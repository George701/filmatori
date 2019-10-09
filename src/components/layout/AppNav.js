import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

const AppNav = () => {
    return (
        <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">
                    <h4 className="brand-color">FILMATORI</h4>
                </NavbarBrand>
                <NavbarToggler />
                <Collapse navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href='/hall'>
                                Hall
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/op-2'>
                                Opt 2
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}


export default AppNav;
