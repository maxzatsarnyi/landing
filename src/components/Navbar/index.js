import React from 'react';
import {Nav,NavbarContainer, LogoWrap, Logo, BurgerWrap, BurgerIcon, NavMenu, NavItem, LinkS} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <LogoWrap to="about me">
                        <Logo src={require('../../images/logo.svg').default}/>
                    </LogoWrap>

                    <BurgerWrap onClick={toggle}>
                        <BurgerIcon src={require("../../images/menu_icon.svg").default}/>
                    </BurgerWrap>

                    <NavMenu>
                        <NavItem><LinkS to="about me">About me</LinkS></NavItem>
                        <NavItem><LinkS to="#">Relationships</LinkS></NavItem>
                        <NavItem><LinkS to="#">Requirements</LinkS></NavItem>
                        <NavItem><LinkS to="users">Users</LinkS></NavItem>
                        <NavItem><LinkS to="signup">Sign Up</LinkS></NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
