import React from 'react';
import './Navigation.css';
import PropTypes from 'prop-types';
import { Link, Element } from "react-scroll";
import { IconContext } from "react-icons";
import {FaPencilAlt} from 'react-icons/fa';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark={true} fixed="top" light expand="md">
                    <NavbarBrand href="/">PArHam7017</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link
                                    activeClass="active"
                                    to="HOME"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    delay={0}>
                                    <NavLink href="#HOME">HOME</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    activeClass="active"
                                    to="ABOUT"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    delay={0}>
                                <NavLink href="#ABOUT">ABOUT</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    activeClass="active"
                                    to="SKILLS"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    delay={0}>
                                <NavLink href="#SKILLS">SKILLS</NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button className={"btn "} onClick={this.props.handleChangeThemeClick}>
                                    <IconContext.Provider value={{ size: "1rem" }}>
                                        <div><FaPencilAlt /></div>
                                    </IconContext.Provider>
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
};

NavbarBrand.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
};

NavbarToggler.propTypes = {
    type: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
};
