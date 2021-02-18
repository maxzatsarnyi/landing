import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Nav = styled.nav`
    margin: 0 auto;
    height: 59px;
    position: sticky;
    top: 0;
    z-index: 10;
    
    @media screen and(max-width: 480px){
        height: 40px;
    }
`
export const NavbarContainer = styled.div`
    max-width: 1170px;
    margin: 0 auto;

    display: flex;
    height: 59px;
    justify-content: space-between;

    @media screen and(max-width: 480px){
        height: 40px;
    }

`
export const LogoWrap = styled(Link)`
    padding-left: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.img`

`
export const BurgerWrap = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: flex;
        align-items: center;
        margin-right: 30px;
    }

    @media screen and (max-width: 480px){
        
        margin-right: 15px;
    }
`

export const BurgerIcon = styled.img`

`

export const NavMenu = styled.ul`
    list-style:none;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    height: 59px;

    @media screen and (max-width: 768px){
        display: none;
    }

    @media screen and(max-width: 480px){
        height: 40px;
        display: none;
        display: none;

    }
`

export const NavItem = styled.li`
    padding: 0 15px;

    /* display: flex;
    justify-content: center;
    align-items: center; */

`

export const LinkS = styled(Link)`
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;

    color: rgb(39, 42, 45);

    :hover{
        color: var(--primary-color);

    }
    &.active{
        color: var(--secondary-color);
    }
`