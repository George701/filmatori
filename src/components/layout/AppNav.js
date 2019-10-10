import React, { useState } from 'react';
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
    const [navState, setNavState] = useState({
        isOpen: false
    });

    const { isOpen } = navState;

    const toggle = () => setNavState({ isOpen: !isOpen });

    return (
        <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">
                    <h4 className="brand-color">FILMATORI</h4>
                </NavbarBrand>
                <NavbarToggler onClick={() => toggle()} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href='/hall'>
                                Hall
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='https://github.com/George701/filmatori'>
                                Repo
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
};


export default AppNav;
