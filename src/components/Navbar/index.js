import React from 'react';
import {Nav,NavbarContainer, LogoWrap, Logo, BurgerWrap, BurgerIcon, NavMenu, NavItem, LinkS} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <LogoWrap>
                        <Logo src={require('../../images/logo.svg').default}/>
                    </LogoWrap>

                    <BurgerWrap onClick={toggle}>
                        <BurgerIcon src={require("../../images/menu_icon.svg").default}/>
                    </BurgerWrap>

                    <NavMenu>
                        <NavItem><LinkS to="#">About me</LinkS></NavItem>
                        <NavItem><LinkS to="#">Relationships</LinkS></NavItem>
                        <NavItem><LinkS to="#">Requirements</LinkS></NavItem>
                        <NavItem><LinkS to="#">Users</LinkS></NavItem>
                        <NavItem><LinkS to="#">Sign Up</LinkS></NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
