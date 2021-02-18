import styled from 'styled-components';
import {Link} from 'react-scroll';


export const SidebarContainer = styled.div`

    display: none;
    position: fixed;
    left: 0;
    top: ${({isOpen}) => isOpen === true ? '0' : '-100%'};
    z-index: 999;

    width: 85%;
    height: 100%;
    background: white;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => isOpen === true ? '1' : '0'};

    @media screen and (max-width: 768px){
        display: block;
    }
    
`

export const SidebarWrapper = styled.div`
    
`


export const LogoWrap = styled(Link)`
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 15px;

    
`

export const LogoIcon = styled.img`

`

export const SectionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* align-items: ; */
    /* height: 100%; */
`

export const SidebarSection = styled.div`
    border-top: 1px solid rgb(224, 224, 224);

    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const SidebarLink = styled(Link)`
    text-decoration: none;
    color: rgb(0, 0, 0);
    line-height: 1.5;
    padding: 18px 0 20px 40px;
    font-size: 18px;
    
    &:hover{
        color: var(--secondary-color);
    }

    @media screen and (max-width: 480px){
        padding: 12px 0 12px 15px;
        font-size: 16px;
    }
`



