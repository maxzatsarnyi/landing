import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    color: rgb(254, 254, 254);
    text-align: center;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    border-radius: 4px;
    color: white;
    background: var(--primary-color);
    width: 210px;
    height: 38px;
    padding: 10px 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        transition: 0.3s ease-in-out;
        color: white;
        background: #cc4636;
    }
`
