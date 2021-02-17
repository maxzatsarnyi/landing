import React from 'react';
import {SidebarContainer, SidebarWrapper, SectionsContainer, LogoWrap, LogoIcon, SidebarSection, SidebarLink} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
           <SidebarContainer isOpen={isOpen}>
                <SidebarWrapper>
                    <LogoWrap><LogoIcon src={require("../../images/logo.svg").default} /></LogoWrap>
                </SidebarWrapper>
                
                <SectionsContainer>
                    <SidebarSection>
                        <SidebarLink to="/" onClick={toggle} >About me</SidebarLink>
                        <SidebarLink to="/" onClick={toggle} >Relationships</SidebarLink>
                        <SidebarLink to="/" onClick={toggle} >Users</SidebarLink>
                        <SidebarLink to="/" onClick={toggle} >Sign Up</SidebarLink>
                        <SidebarLink to="/" onClick={toggle} >Terms and Conditions</SidebarLink>
                    </SidebarSection>
                    <SidebarSection>
                        <SidebarLink to="/" onClick={toggle} >How it works</SidebarLink>
                        <SidebarLink to="/" onClick={toggle} >Partnership</SidebarLink>
                        <SidebarLink to="/" onClick={toggle} >Help</SidebarLink>
                        <SidebarLink to="/" onClick={toggle} >Leave testimonial</SidebarLink>
                        <SidebarLink to="/" onClick={toggle} >Contact us</SidebarLink>
                    </SidebarSection>
                    <SidebarSection>
                        <SidebarLink to="/" onClick={toggle} >Articles</SidebarLink>
                        <SidebarLink to="/" onClick={toggle} >Our news</SidebarLink>
                        <SidebarLink to="/" onClick={toggle} >Testimonials</SidebarLink>
                        <SidebarLink to="/" onClick={toggle} >Licenses</SidebarLink>
                        <SidebarLink to="/" onClick={toggle} >Privacy Policy</SidebarLink>
                    </SidebarSection>
                </SectionsContainer>
           </SidebarContainer>
        </>
    )
}

export default Sidebar;
